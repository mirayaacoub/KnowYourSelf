"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function FooterComponent() {
  return (
    <footer className="w-full flex w-full justify-between bg-white shadow-lg border-t-2 p-5">
      {/* <Footer.Divider /> */}

      <Footer.Brand
        href="https://flowbite.com"
        src="logo.png"
        alt="Flowbite Logo"
      />
      <div className="sm:col-span-1 ml-12">
        <Footer.Title title="Contact Us" className="mb-2" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">+961 81 918 049</Footer.Link>
          {/* Add more contact links here */}
        </Footer.LinkGroup>
      </div>
      <div className="sm:col-span-1 ml-8">
        <Footer.Title title="Legal" className="mb-2" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <Footer.Copyright href="#" by=" Rabab & Mira" year={2024} />
      <div className="mt-0 mb-6 flex space-x-6 sm:mt-0 sm:justify-center mr-10">
        <Footer.Icon href="#" icon={BsFacebook} />
        <Footer.Icon href="#" icon={BsInstagram} />
        <Footer.Icon href="#" icon={BsTwitter} />
        <Footer.Icon href="#" icon={BsGithub} />
      </div>
    </footer>
  );
}

export default FooterComponent;
