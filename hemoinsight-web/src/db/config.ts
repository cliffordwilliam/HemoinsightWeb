import { Db, MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("MONGODB_CONNECTION_STRING is not defined");
}

let client: MongoClient;

export const getClient = async () => {
  if (!client) {
    client = await MongoClient.connect(connectionString);
    await client.connect();
  }
  return client;
};

export const getDb = async (name: string | undefined) => {
  const client = await getClient();
  const db: Db = client.db(name);
  return db;
};
