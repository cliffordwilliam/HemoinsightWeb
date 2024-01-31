import { Service } from "@/types";
import { getDb } from "../config";
import { SERVICE_COLLECTION } from "@/c";

export const getService = async () => {
    const db = await getDb(process.env.MONGODB_DB_NAME);
    const service = (await db
        .collection(SERVICE_COLLECTION)
        .find()
        .toArray()) as Service[];
    return service;
};
