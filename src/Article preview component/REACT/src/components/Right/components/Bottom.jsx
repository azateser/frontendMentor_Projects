import { useState } from "react";
import classNames from "classnames";

import imgIconFacebook from "../../../images/icon-facebook.svg";
import imgIconTwitter from "../../../images/icon-twitter.svg";
import imgIconPinterest from "../../../images/icon-pinterest.svg";
import imgAvatar from "../../../images/avatar-michelle.jpg";

const Bottom = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bottom">
      <div className="bottom-left">
        <div
          className={classNames({
            "w-10 rounded-full md:block": true,
            hidden: show,
          })}
        >
          <img className="rounded-full" src={imgAvatar} alt="avatar" />
        </div>
        <div
          className={classNames({
            "md:block": true,
            hidden: show,
          })}
        >
          <div className="font-bold text-[#48556A]">Michelle Appleton</div>
          <div className="text-[#6D7F97]">28 Jun 2020</div>
        </div>
      </div>
      <div
        onClick={() => setShow(!show)}
        className={classNames({
          "group bottom-right": true,
          "!bg-[#6D7F97]": show,
        })}
      >
        {show ? (
          <div className="share-box">
            <span className="text-[#6D7F97]"> S H A R E</span>
            <img src={imgIconFacebook} alt="facebook icon" />
            <img src={imgIconTwitter} alt="twitter icon" />
            <img src={imgIconPinterest} alt="pinterest icon" />
            <div className="share-box-arrow"></div>
          </div>
        ) : null}

        <svg
          className={classNames({
            "fill-[#6D7F97] group-hover:fill-[#ECF2F8] transition-colors duration-500": true,
            "fill-[#ECF2F8]": show,
          })}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="13"
        >
          <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
        </svg>
      </div>
    </div>
  );
};

export default Bottom;
