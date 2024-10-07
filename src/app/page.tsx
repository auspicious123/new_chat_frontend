"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        router.push("/notification");
      }, 3000);
    } catch (error) {
      toast.error("Login failed. Please try again.", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      {/* <Navbar /> */}
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-auto h-screen/75 max-h-screen lg:py-0">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Admin Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} method="POST">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-customYellow hover:customYellow/50 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-base px-5 py-2.5 text-center font-semibold"
                >
                  {isloading && (
                    <div className="flex h-4 space-x-1 justify-center items-center">
                      <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
                    </div>
                  )}
                  {!isloading && "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
