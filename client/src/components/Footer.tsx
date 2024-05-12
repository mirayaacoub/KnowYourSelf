"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function FooterComponent() {
  return (
    <Footer
      container
      className="sticky bottom-0 left-0 w-full bg-white shadow-lg"
    >
      <div className="absolute bottom-0 w-full">
        <Footer.Divider />

        <div className="grid w-full justify-between sm:flex sm:justify-start md:flex md:grid-cols-1">
          <div className="sm:col-span-1 mt-5 ml-4">
            <Footer.Brand
              href="https://flowbite.com"
              src="logo.png"
              alt="Flowbite Logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 sm:mt-2 sm:grid-cols-3 sm:gap-10 pr-6">
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
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between pr-6 ml-6">
          <Footer.Copyright href="#" by="Rabab&Mira" year={2024} />
          <div className="mt-0 mb-6 flex space-x-6 sm:mt-0 sm:justify-center mr-10">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
