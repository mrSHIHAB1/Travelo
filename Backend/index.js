const express=require('express')
const cors=require('cors')
const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
const app=express()
const port=process.env.PORT || 50002
app.use(cors())
app.use(express.json())

require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zignzkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
    const spotlist=client.db('spotlist').collection('spots')
    const Countrylistt=client.db('spotlist').collection('Countrylist')
    app.post('/spots', async (req, res) => {
        const addspots = req.body;
        console.log(addspots)
        const result = await spotlist.insertOne(addspots);
        res.send(result);
  
      })
      
    app.get('/spots',async(req,res)=>{
      const cursor=spotlist.find();
      const result=await cursor.toArray();
      res.send(result);

    })
    app.get('/Countrylist',async(req,res)=>{
      const cursor=Countrylistt.find();
      const result=await cursor.toArray();
      res.send(result);

    })
    app.delete('/spots/:id', async (req, res) => {
      const id = req.params.id; 
      const query = { _id: new ObjectId(id) };
      const result = await spotlist.deleteOne(query);
      res.send(result);
    });
    app.get('/spots/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await spotlist.findOne(query);
      res.send(result)
    })
    app.put('/spots/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const option = { upsert: true };
      const updatespot = req.body;
      const upspot = {
        $set: {
          tourists_spot_name: updatespot.tourists_spotname,
          photo: updatespot.photo,
          country_Name: updatespot.countryName,
          location: updatespot.locationn,
          short_description:updatespot.shortdes,
          average_cost: updatespot.avcost,
          seasonality: updatespot.season,
          travel_time: updatespot.travtime,
          totaVisitorsPerYear:updatespot.totaVisitorsPerYear
        }
      }
      const result = await spotlist.updateOne(filter, upspot, option)
      res.send(result)
    })
  

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  //
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send("helloword")
})
app.listen(port,()=>{
    console.log(`Example app listenning on port${port}`)
})