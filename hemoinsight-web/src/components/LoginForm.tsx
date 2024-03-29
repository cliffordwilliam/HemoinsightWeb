"use client";

import { BASE_URL } from "@/c";
import { Response, UserOutput } from "@/types";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Spinner from "./Spinner";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLoginFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    const resJson: Response<UserOutput> = await res.json();
    if (!res.ok) {
      const msg = resJson.error ?? "LoginForm component POST user login error";
    } else {
      console.log("LoginForm component POST user login ok", resJson);
      router.push("/dashboard");
    }
  };
  return (
    <>
      {loading ? (
        <>
          {/* loader */}
          <Spinner />
        </>
      ) : (
        <>
          {/* card */}
          <div className="w-full max-w-xl m-auto p-8 shadow-md bg-white rounded">
            {/* title */}
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
              Login
            </h1>
            <form onSubmit={onLoginFormSubmit}>
              {/* email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="email@mail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* password */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default LoginForm;
