import React from "react";

export const metadata = {
    title: "Team page",
    description: "This is a about page.",
};

const Team = () => {
    return (
        <div>
            <h1>Team page</h1>
            <div className="h-10 w-10">
                <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Team;
