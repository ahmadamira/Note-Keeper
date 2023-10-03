const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const dbName = "NoteKeeper";
async function main() {
  const client = new MongoClient(url);
  await client.connect();
  const admin = client.db(dbName).admin();
  console.log(await admin.serverStatus());
  console.log(await admin.listDatabases());
}
main();
