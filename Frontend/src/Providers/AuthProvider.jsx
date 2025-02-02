import { createContext, useEffect, useState } from "react";
import { signOut,onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout=()=>{
        setUser(null);
    signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });

    }, [])

    const updateUserProfile = (name, image,email) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
            email:email
        })

    }
    const authinfo = {
        createUser,
        signIn,
        updateUserProfile,
        user,
        logout,
        setUser

    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;