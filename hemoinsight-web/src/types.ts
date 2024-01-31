import { ObjectId } from "mongodb";
import { z } from "zod";

export type link = {
    name: string;
    href: string;
};

export type item = {
    title: string;
    links: link[];
};

export type payload = {
    email: string;
};

// REST STYLE
export type Response<T> = {
    status: number;
    message?: string;
    data?: T;
    error?: string;
};

// USER
export type User = {
    _id: ObjectId;
    username: string;
    password: string;
    email: string;
    birthdate: string;
    weight: string;
    height: string;
    address: string;
    status: string;
    commorbidity: string;
};
export const ZodUserInput = z.object({
    username: z.string(),
    password: z.string().min(5),
    email: z.string().email(),
    birthdate: z.string(),
    weight: z.string(),
    height: z.string(),
    address: z.string(),
    status: z.string(),
    commorbidity: z.string(),
});
export const ZodUserLoginInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
});
export type UserInput = Omit<User, "_id">;
export type UserOutput = Omit<User, "password">;

//SERVICE
export type Service = {
    _id: ObjectId;
    title: string;
    description: string;
    price: number;
    clinic: string;
};
