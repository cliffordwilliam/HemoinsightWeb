import { handleError } from "@/db/helper";
import { postUser } from "@/db/models/user";
import { Response, UserOutput, ZodUserInput } from "@/types";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    // body
    const body = await req.json();
    // valid?
    const zRes = ZodUserInput.safeParse(body);
    if (!zRes.success) throw zRes.error;
    // POST
    const data = await postUser(zRes.data);
    // res
    return NextResponse.json<Response<UserOutput>>(
      {
        status: 201,
        message: "POST user OK",
        data,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return NextResponse.json(errorResponse, {
      status: errorResponse.status,
    });
  }
};
