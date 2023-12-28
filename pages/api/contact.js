import {MongoClient} from "mongodb"

async function handler(req,res){

    if(req.method !== "POST"){
        return
    }

    const {email, name, message} = req.body;

    if(
        !email || 
        !email.includes('@') || 
        !name || name.trim() === '' || 
        !message || message.trim() === ''
    ){
     return res.status(422).json({message:'Invalid input'});
    }

    // Store it in a database;

    const newMessage ={
        email,
        name,
        message
    }
    
    let client;

    try {
        client = await  MongoClient.connect(`mongodb+srv://akhileshyadav870765:akhilesh@cluster0.ivyko2f.mongodb.net/?retryWrites=true&w=majority`);

    } catch (error) {
        console.log("aky")
        res.status(500).json({message:'Could not connect to database'})
        return 
    }
    
    const db = client.db('blog');
   
    try {
        const result = await db.collection('message').insertOne(newMessage);
    } catch (error) {
        client.close()
        return res.status(500).json({message:'Storing Message failed'});
    }
   
   

    client.close();

    res.status(201).json({message:'SuccessFully stored message'});
}

export default handler;