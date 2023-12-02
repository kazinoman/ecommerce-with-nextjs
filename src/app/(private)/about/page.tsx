import React from "react";

const About = () => {
    return (
        <div className=" max-w-6xl mx-auto mt-16">
            <div className="flex items-center justify-center px-5 py-5">
                <div className="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
                    <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                        <a
                            href="#"
                            className="relative block">
                            <img
                                alt="profil"
                                src="https://images.unsplash.com/photo-1579781354199-1ffd36bd7d30?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="mx-auto object-cover rounded-full h-20 w-20 "
                            />
                        </a>
                    </div>
                    <div className="w-full mb-10">
                        <div className="h-3 text-3xl leading-tight text-left text-indigo-500">
                            “
                        </div>
                        <p className="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
                            To get social media testimonials like these, keep
                            your customers engaged with your social media
                            accounts by posting regularly yourself
                        </p>
                        <div className="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                            ”
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="font-bold text-center text-indigo-500 text-md">
                            Tom Hardy
                        </p>
                        <p className="text-xs text-center text-gray-500 dark:text-gray-300">
                            @thom.hardy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
