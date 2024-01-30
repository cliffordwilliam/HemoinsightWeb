import { compare, handleError, sign } from "@/db/helper";
import { getUserByEmail } from "@/db/models/user";
import { Response, UserOutput, ZodUserLoginInput } from "@/types";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    // body
    const body = await req.json();
    // valid?
    const zRes = ZodUserLoginInput.safeParse(body);
    if (!zRes.success) throw zRes.error;
    // no user? wrong password?
    const user = await getUserByEmail(zRes.data.email);
    if (!user || !compare(zRes.data.password, user.password)) {
      // res
      return NextResponse.json<Response<UserOutput>>(
        {
          status: 403,
          message: "POST login BAD",
        },
        {
          status: 403,
        }
      );
    } else {
      // payload -> token
      const payload = {
        email: user.email,
      };
      const token = sign(payload);
      // save token to cookie
      cookies().set("token", token, {
        httpOnly: true,
        secure: false,
        // expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
        sameSite: "strict",
      });
      // res
      return NextResponse.json<Response<UserOutput>>(
        {
          status: 200,
          message: "POST login OK",
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    const errorResponse = handleError(error);
    return NextResponse.json(errorResponse, {
      status: errorResponse.status,
    });
  }
};
