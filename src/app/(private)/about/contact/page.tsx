import React from "react";

const Contact = () => {
    return (
        <div className=" p-8  text-white max-w-6xl mx-auto">
            <h2 className="mb-12 text-3xl font-extrabold leading-9 text-white border-b-2 border-gray-100">
                FAQs
            </h2>
            <ul className="flex flex-wrap items-start gap-8">
                <li className="w-2/5">
                    <p className="text-lg font-medium leading-6 text-white">
                        What is a home energy rating?
                    </p>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-400">
                            A home energy rating is an estimated calculation
                            into a homes potential energy usage, which will
                            determine the amount of heating and cooling required
                            to make its occupants comfortable. It produces a
                            star rating dependant on the amount of heating and
                            cooling loads which will be required, from 0 to 10
                            stars.
                        </p>
                    </p>
                </li>
                <li className="w-2/5">
                    <p className="text-lg font-medium leading-6 text-white">
                        Why do I need a 6 Star energy rating?
                    </p>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-400">
                            In most Australian states the government requires
                            that all new homes and apartments (along with
                            certain types of building extensions) built since
                            2010 be energy rated and achieve a minimum of 6
                            Stars.
                        </p>
                    </p>
                </li>
                <li className="w-2/5">
                    <p className="text-lg font-medium leading-6 text-white">
                        What is the general cost of an energy rating?
                    </p>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-400">
                            Simple energy rating prices vary greatly on the size
                            and type of building, generally an energy rating
                            will cost somewhere between $130 to $700+.
                        </p>
                    </p>
                </li>
                <li className="w-2/5">
                    <p className="text-lg font-medium leading-6 text-white">
                        What information do I need to supply for an energy
                        rating to be completed??
                    </p>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-400">
                            The information required to complete a full and
                            comprehensive energy report are the following final
                            working drawings: Site Plan, Floor Plan, Elevations,
                            Sections, Lighting layout and window schedule
                            (including sizes of the existing windows).
                        </p>
                    </p>
                </li>
                <li className="w-2/5">
                    <p className="text-lg font-medium leading-6 text-white">
                        Does building an extension need an energy rating?
                    </p>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-400">
                            Depended on the size of the extension you are
                            building there is a chance that it too will need to
                            be energy rated. It&#x27;s always best to check
                            first before going ahead with construction.
                        </p>
                    </p>
                </li>
                <li className="w-2/5">
                    <p className="text-lg font-medium leading-6 text-white">
                        What is the general cost of an energy rating?
                    </p>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-400">
                            Depended on the size of the extension you are
                            building there is a chance that it too will need to
                            be energy rated. It&#x27;s always best to check
                            first before going ahead with construction.
                        </p>
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
