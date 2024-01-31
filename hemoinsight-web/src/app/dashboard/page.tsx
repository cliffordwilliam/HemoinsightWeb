import { BASE_URL } from "@/c";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
const Page = () => {
    //Stuck here, forget how to fetch data.
    // useEffect(() => {
    //     const fetchService = async () => {
    //         await fetch(`${BASE_URL}/api/services`, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //     };
    //     fetchService();
    // }, []);

    return (
        <main className="flex-1 bg-gray-100 flex p-4">
            <div className="container mx-auto">
                <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
                    Dashboard
                </h1>
                <div className="buttonAlignment flex flex-row justify-end gap-1">
                    <button className="text-white bg-green-900 hover:bg-green-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Book a test now
                    </button>

                    <button className="text-white bg-teal-700 hover:bg-teal-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        + Family Member
                    </button>

                    <button className="text-white bg-teal-700 hover:bg-teal-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        My Report List
                    </button>

                    <button className="text-white bg-teal-700 hover:bg-teal-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Health Summary
                    </button>
                </div>

                {/* welcome banner  */}
                <div className="bannerContainer mx-auto bg-slate-300 m-2 text-[5rem] rounded-[10px] p-2">
                    Banner
                </div>
                <div className="bannerContainer mx-auto text-[24px] bg-slate-200 m-2  rounded-[10px] p-2">
                    Suggestion based on user's demographic data / comorbidity
                </div>
                <div className="outerContainer flex flex-row justify-around gap-2">
                    {/* UserProfile  */}
                    <div className="bannerContainer mx-auto w-1/4 bg-slate-300 m-2 h-[30rem]">
                        User Profile
                    </div>

                    {/* list of services here  */}
                    <div className="bannerContainer mx-auto w-3/4 bg-slate-300 m-2 ">
                        Services
                    </div>
                </div>

                {/* logout */}
                <form
                    action={async () => {
                        "use server";
                        cookies().get("token") && cookies().delete("token");
                        redirect("/login");
                    }}
                >
                    <button className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Logout
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Page;
