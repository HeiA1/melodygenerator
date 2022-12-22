// Set up the database connection
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
const collection = client.db("test").collection("melodies");
  // Perform database operations
  // ...
});

// Save a melody to the database
function saveMelody(key, tempo, melody) {
collection.insertOne({ key, tempo, melody }, function(err, res) {
    console.log("Melody saved to database");
});
}

// Load a melody from the database
function loadMelody(id) {
collection.findOne({ _id: id }, function(err, melody) {
    console.log("Melody loaded from database:", melody);
    return melody;
});
}