// Load mogodb driver
const MongoClient = require('mongodb').MongoClient

// create mogo client
const url = 'mongodb+srv://superadmin:poison143@cluster0.ajr0r.mongodb.net/sample_mflix?retryWrites=true&w=majority'
const client = new MongoClient(url, {useNewUrlParser: true })

async function connect(){
    await client.connect()
}
connect()

app.get('/weather',async (req,res) => {
    try {
        const callLetters = req.query.callLetters
        const db = client.db('sample_weatherdata')
        const collection = db.collection('data')


        const cursor = collection.find(query).limit(10)
        let data = []
        await cursor.forEach(doc => data.push(doc.position),(doc.callLetters),(doc.airTemperature),(doc.ts)) 
        res.send(data)
    } catch(e) {
        console.error(e) 
    }
})
app.listen(3000, console.log('Start application at port 3000'))
