import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer
      className="shadow m-4 md:ms-32 md:me-32 dark:bg-gray-800 border-t-2 border-white"
      style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
        <span className="text-base text-white text-center">
          © 2023 Made by Anasio Claeys. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
          <li className="w-7 h-7 ms-5">
            <AiFillLinkedin className="w-full h-full" />
          </li>
          <li className="w-6 h-7 ms-5">
            <BsInstagram className="w-full h-full" />
          </li>
          <li className="w-7 h-7 ms-5">
            <AiFillFacebook className="w-full h-full" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
