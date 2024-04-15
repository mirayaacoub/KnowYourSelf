"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function FooterComponent() {
  return (
    <Footer container>
      <div className="absolute bottom-5 w-full">
        <Footer.Divider />
        <br></br>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Know YourSelf"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 sm:mt-4 sm:grid-cols-3 sm:gap-6 pr-6">
            <div>
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">+961 81 918 049</Footer.Link>

                {/* <Footer.Link href="#">Tailwind CSS</Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <span className="hidden sm:inline">&nbsp;</span>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between pr-6">
          <Footer.Copyright href="#" by="Rabab&Mira" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
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
