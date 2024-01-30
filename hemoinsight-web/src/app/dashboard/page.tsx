import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = () => {
  return (
    <main className="flex-1 bg-gray-100 flex p-4">
      <div className="container mx-auto">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
          Dashboard
        </h1>
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
