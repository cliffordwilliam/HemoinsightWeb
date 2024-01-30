"use client";

import { BASE_URL } from "@/c";
import { Response, UserOutput } from "@/types";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Spinner from "./Spinner";

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [address, setAddress] = useState("");
  const [commorbidity, setCommorbidity] = useState("");
  const commorbidityList = [
    "Glucose",
    "Liver",
    "Cholesterol",
    "Hypertension",
    "Thyroid",
    "Sinusitis",
    "Triglycerides",
    "Kidney Failure",
  ];
  const onRegisterFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch(`${BASE_URL}/api/users`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        email,
        birthdate,
        weight,
        height,
        address,
        status: "Regular",
        commorbidity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    const resJson: Response<UserOutput> = await res.json();
    if (!res.ok) {
      const msg = resJson.error ?? "RegisterForm component POST user error!";
    } else {
      console.log("RegisterForm component POST user ok", resJson);
      router.push("/login");
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
              Register
            </h1>
            <form onSubmit={onRegisterFormSubmit}>
              {/* username */}
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
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
              {/* birthdate */}
              <div className="mb-5">
                <label
                  htmlFor="birthdate"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your birthdate
                </label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  // placeholder="password"
                  required
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
              {/* weight */}
              <div className="mb-5">
                <label
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="75"
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              {/* height */}
              <div className="mb-5">
                <label
                  htmlFor="height"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="175"
                  required
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              {/* address */}
              <div className="mb-5">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="123 Main Street Anytown, USA"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              {/* commorbidity */}
              <div className="mb-5">
                <label
                  htmlFor="commorbidity"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your commorbidity
                </label>
                <select
                  id="commorbidity"
                  name="commorbidity"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  value={commorbidity}
                  onChange={(e) => setCommorbidity(e.target.value)}
                >
                  <option value="" disabled>
                    Select commorbidity
                  </option>
                  {commorbidityList.map((commorbidity) => (
                    <option key={commorbidity} value={commorbidity}>
                      {commorbidity}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-gray-500">
                  Do you have an existing medical condition? We can recommend
                  health services that suits your medical profile.
                </p>
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

export default RegisterForm;
