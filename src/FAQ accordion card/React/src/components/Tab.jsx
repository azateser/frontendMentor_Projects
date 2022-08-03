import classNames from "classnames";
import React from "react";
import {useState} from "react";

import downArrow from "../images/icon-arrow-down.svg";

function Tab({title, description, id}) {

    const [show, setShow] = useState(false);

    const openTab = () => {
        setShow(!show)
    }

    return (
        <>
            <button
                className="flex items-center w-full pt-4 pb-3 border-b-[1px] border-[#e7e7e9] justify-between"
                type="button"
                id={id}
                onClick={openTab}
            >
            <span className={
                classNames({
                    "text-[#4a4b5e] hover:text-[#f47c57] md:text-[14px] text-[12px]": true,
                    "font-bold": show,
                })
            }>
                {title}
            </span>
                <img
                    src={downArrow}
                    alt="close-tab"
                    className={classNames({
                        "h-2 w-3 text-[#f47c57] transition-all duration-700": true,
                        "transform rotate-180": show,
                    })}/>


            </button>

            <div className={classNames({
                "transition-all duration-700": true,
                "hidden text-3xl ": !show,
            })}>
                <div className="mt-3 mb-1 text-[12px] text-[#787887]">
                    {description}
                </div>
            </div>
        </>
    );
}

export default Tab;