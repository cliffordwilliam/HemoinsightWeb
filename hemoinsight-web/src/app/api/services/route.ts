import { handleError } from "@/db/helper";
import { getService } from "@/db/models/service";
import { Response, Service } from "@/types";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const services = await getService();

        return NextResponse.json<Response<Service[]>>(
            {
                status: 200,
                message: "POST login OK",
                data: services,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        const errorResponse = handleError(error);
        return NextResponse.json(errorResponse, {
            status: errorResponse.status,
        });
    }
};
