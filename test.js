import { MongoClient } from "mongodb";

const main = async () =>{
   let conn = await MongoClient.connect("mongodb://localhost");
    let db = conn.db("example");
    let myColl = db.collection("myCollection");
    let docs = await myColl.find({num : 193}).toArray();
    console.log(docs);

    await myColl.insertOne({classCode: "k15pm01",
                        year : 2024});
};

main();