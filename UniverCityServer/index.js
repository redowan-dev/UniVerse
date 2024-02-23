const express = require('express');
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


//mongoDB
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.zb7yt6s.mongodb.net/?retryWrites=true&w=majority`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   

    const usersCollection = client
    .db("UniVerse")
    .collection("users");
    const blogsCollection = client
    .db("UniVerse")
    .collection("blogs");
    const noticeCollection = client
    .db("UniVerse")
    .collection("notice");
  


    //  users realated api is here
    app.post("/users",  async (req, res) => {
        const user = req.body;
        const query = { email: user.email };
  
        const excitingUser = await usersCollection.findOne(query);
        console.log("existing User", excitingUser);
  
        if (excitingUser) {
          return res.send({ message: "user exists" });
        }
        const result = await usersCollection.insertOne(user);
        return res.send(result);
      });

    app.get("/users", async (req, res) => {
        const result = await usersCollection.find().toArray();
        return res.send(result);
      });

      app.patch("/users/admin/:id", async (req, res) => {
        const id = req.body.id;
        const query = { _id: new ObjectId(id) };
        console.log(id);
        const updateDoc = {
          $set: {
            role: "admin",
          },
        };
        const result = await usersCollection.updateOne(query, updateDoc);
        return res.send(result);
      });
      
      app.put("/users/removeadmin/:id", async (req, res) => {
        const id = req.body.id;
        const query = { _id: new ObjectId(id) };
        console.log(id);
        const updateDoc = {
          $set: {
            role: "user",
          },
        };
        const result = await usersCollection.updateOne(query, updateDoc);
        return res.send(result);
      });

      app.delete("/users/:id", async (req, res) => {
        try {
          const id = req.params.id;
        
          const filter = { _id: new ObjectId(id) };
          const result = await usersCollection.deleteOne(filter);
          return res.send(result);
        }
        catch (err) {
          res.status(500).json(err)
        }
      });

      app.get('/users/admin/:email', async(req,res)=>{
        const email = req.params.email;
  
        if(req.decoded.email!== email){
          res.send({admin:false})
        }
  
        const query = {email:email}
        const user = await usersCollection.findOne(query);
        const result = {admin:user?.role==='admin'}
        res.send(result)
      })

      // Blog related api 

      app.get("/blogs", async (req, res) => {
        try {
          const result = await blogsCollection.find().toArray();
          return res.send(result);
        }
        catch (error) {
          console.error('Error fetching users using the native driver:', error);
          res.status(500).json({ error: 'Server error' });
        }
      });
     
      app.get("/blogs/:id", async (req, res) => {
        
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}
      
  
      const result = await blogsCollection.findOne(query);
      res.send(result);
   })
      
      app.post("/blogs", async (req, res) => {
        try {
          const newBlogs = req.body;
        
          const result = await blogsCollection.insertOne(newBlogs);
          return res.send(result);
        }
        catch (error) {
          console.error('Error fetching users using the native driver:', error);
          res.status(500).json({ error: 'Server error' });
        }
      });
      app.delete("/blogs/:id", async (req, res) => {
        try {
          const id = req.params.id;
        
          const filter = { _id: new ObjectId(id) };
          const result = await blogsCollection.deleteOne(filter);
          return res.send(result);
        }
        catch (err) {
          res.status(500).json(err)
        }
      });

      app.patch('/blogs', async (req, res) => {
       
       
          const id = req.body.id;
        
          const updatedBlog = req.body;
          console.log(updatedBlog);
          const filter = { _id: new ObjectId(id) };
          const updateDoc = {
            $set: {
              title: updatedBlog.title,
              details: updatedBlog.details,
              img: updatedBlog.img,
              react: updatedBlog.react,
              name: updatedBlog.name,
              email: updatedBlog.email,
            },
          };
    
          const result = await blogsCollection.updateOne(filter, updateDoc);
    
          return res.send(result);
       
      });
    
      // notice related 
      app.get("/notice", async (req, res) => {
        try {
          const result = await noticeCollection.find().toArray();
          return res.send(result);
        }
        catch (error) {
          console.error('Error fetching users using the native driver:', error);
          res.status(500).json({ error: 'Server error' });
        }
      });
      
      app.get("/notice/:id", async (req, res) => {
        
        const id = req.params.id;
        const query = { _id: new ObjectId(id)}
        
    
        const result = await noticeCollection.findOne(query);
        res.send(result);
     })

      app.post("/notice", async (req, res) => {
        try {
          const newNotice = req.body;
        
          const result = await noticeCollection.insertOne(newNotice);
          return res.send(result);
        }
        catch (error) {
          console.error('Error fetching users using the native driver:', error);
          res.status(500).json({ error: 'Server error' });
        }
      });
      app.patch('/notice/:id', async (req, res) => {
       
        const id = req.params.id;
        const updatedNotice = req.body;
  
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            title: updatedNotice.title,
            details: updatedNotice.details,
            img: updatedNotice.img,
            
            name: updatedNotice.name,
            email: updatedNotice.email,
          },
        };
  
        const result = await noticeCollection.updateOne(filter, updateDoc);
  
        return res.send(result);
     
    });
      app.delete("/notice/:id", async (req, res) => {
        try {
          const id = req.params.id;
        
          const filter = { _id: new ObjectId(id) };
          const result = await noticeCollection.deleteOne(filter);
          return res.send(result);
        }
        catch (err) {
          res.status(500).json(err)
        }
      });

     // Connect the client to the server	(optional starting in v4.7)
     await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Universe running");
});

app.listen(port, () => {
  console.log(`Universe port ${port}`);
});