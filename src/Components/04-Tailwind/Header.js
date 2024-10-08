import React from "react";

const Header = () => {
  return (
    <header className="tw-bg-sky-500 tw-px-8 tw-p-2">
      <nav className="tw-flex tw-justify-between tw-items-center">
        <div className="tw-text-white tw-text-lg tw-font-bold">
          Mujeres Digitales
        </div>
        <ul className="tw-flex tw-grow tw-justify-center tw-gap-20 tw-space-x-4 tw-list-none">
          <li>
            <a
              href="#home"
              className="tw-text-white tw-no-underline tw-hover:underline"
            >
              Home
            </a>{" "}
          </li>
          <li>
            <a
              href="#about"
              className="tw-text-white tw-no-underline tw-hover:underline"
            >
              About
            </a>{" "}
          </li>
          <li>
            <a
              href="#services"
              className="tw-text-white tw-no-underline tw-hover:underline"
            >
              Services
            </a>{" "}
          </li>
          <li>
            <a
              href="#contact"
              className="tw-text-white tw-no-underline tw-hover:underline"
            >
              Contact
            </a>{" "}
          </li>
        </ul>
        <button className="tw-bg-blue-500 tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
