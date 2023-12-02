"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserService } from "@/services/users";
import { setCookie } from "cookies-next";
import { toast } from "react-hot-toast";

export default function Home() {
    const router = useRouter();
    const [credentials, setCredentials] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await UserService.userLogin(credentials);

            if (res?.access_token) {
                setCookie("auth_token", res.access_token);
                router.push("/products");
                toast.success("Successfully login.");
            } else {
                toast.error(res?.message);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center h-full ">
            <section>
                <div className="flex flex-col justify-center items-center min- py-10 sm:px-6 lg:px-5 bg-white rounded-md">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="px-4 py-8 sm:px-10">
                            <form
                                className="space-y-6"
                                onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700">
                                        Email address{" "}
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required={true}
                                            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            onChange={(event) => {
                                                setCredentials({
                                                    ...credentials,
                                                    email: event?.target.value,
                                                });
                                            }}
                                            defaultValue={"john@mail.com"}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700">
                                        {" "}
                                        Password{" "}
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required={true}
                                            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            onChange={(event) => {
                                                setCredentials({
                                                    ...credentials,
                                                    password:
                                                        event?.target.value,
                                                });
                                            }}
                                            defaultValue={"changeme"}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="block ml-2 text-sm text-neutral-600">
                                            {" "}
                                            Remember me{" "}
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 hover:text-blue-500">
                                            {" "}
                                            Forgot your password?{" "}
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
