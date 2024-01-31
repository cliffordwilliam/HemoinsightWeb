import { User, UserInput } from "@/types";
import { getDb } from "../config";
import { hash } from "../helper";
import { USER_COLLECTION } from "@/c";

export const postUser = async (input: UserInput) => {
    const userHash: UserInput = {
        ...input,
        password: hash(input.password),
    };
    const db = await getDb(process.env.MONGODB_DB_NAME);
    const res = await db.collection(USER_COLLECTION).insertOne(userHash);
    return { ...input, _id: res.insertedId };
};

export const getUserByEmail = async (email: string) => {
    const db = await getDb(process.env.MONGODB_DB_NAME);
    const user = (await db
        .collection(USER_COLLECTION)
        .findOne({ email: email })) as User;
    return user;
};
