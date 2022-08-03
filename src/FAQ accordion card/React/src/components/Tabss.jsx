import classNames from "classnames";
import React from "react";
import { useState } from "react";

function Tab({title, description, status}) {

    const [showDescription, setShowDescription] = useState(status);


    return (
        <li className="relative m-0 py-2">

            <h2
                onClick={() => setShowDescription(!showDescription)}
                className="transition-colors text-sm text-[#4A4B5E]"
            >
                {title}
            </h2>

            <p className={classNames({
                "relative z-10 mt-3 max-h-96 translate-x-0 translate-y-0 text-xs overflow-hidden opacity-70": true,
            })}>
                {showDescription ? description : ""}

            </p>
            <hr className="mt-4"/>
        </li>
    );
}

export default Tab;