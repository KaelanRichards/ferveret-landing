/* eslint-disable no-console */
import React, { useState } from "react";

import emailjs, { init } from "emailjs-com";

import { FounderCard } from "../components/cards/FounderCard";
import { Meta } from "../layout/Meta";
import { Footer } from "../templates/Footer";
import Navbar from "../templates/Navbar";
import { AppConfig } from "../utils/AppConfig";

init("user_LSNh7oV7YpOPWorlYZFs8");

const Team = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    const req = { name, email, company, message };

    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .send(
        `service_wxthxw9`,
        "template_nnptjyt",
        req,
        "user_LSNh7oV7YpOPWorlYZFs8"
      )
      .then(
        (result: any) => {
          // eslint-disable-next-line no-alert
          alert(
            `Message Sent, We will get back to you shortly: ${result.text}`
          );
        },
        (error: any) => {
          // eslint-disable-next-line no-alert
          alert(`An error occurred, Please try again: ${error.text}`);
        }
      );
  };
  return (
    <div className="antialiased bg-gray-1300" style={{ fontFamily: "Mulish" }}>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <div className="bg-gray-1300 text-center pt-40 pb-16 px:8 sm:px-12 md:px-16 xl:px-60">
        <div className="m-auto text-4xl font-bold text-gray-1200">
          Our Founders
        </div>
      </div>
      <div className="bg-gray-1300 flex flex-col xl:flex-row xl:space-x-3 justify-evenly pb-40 pt-8 px:6 sm:px-12 md:px-16 xl:px-60 items-center">
        <FounderCard
          name="Reza Azizian"
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.`}
          image="/assets/images/founder1.png"
        />
        <FounderCard
          name="Matteo Bucci"
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.`}
          image="/assets/images/founder2.png"
        />
      </div>
      <div className="flex flex-col lg:px-60 pb-32 px-6">
        <div className="text-left text-4xl font-bold">Get in touch with us</div>
        <div className="text-2xl pt-2">
          Ask questions, tell us more about your upcoming datacenter/HPC or
          Hyperscale project. We are here to help.
        </div>
        <form className="flex flex-col pt-16 space-y-6">
          <label htmlFor="name">
            Name
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
            />
          </label>

          <label htmlFor="name">
            Company
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              name="Company"
            />
          </label>

          <label htmlFor="message">
            Message
            <textarea
              rows={5}
              className="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
            />
          </label>

          <button
            className="bg-blue-500 hover:bg-blue-700 w-28 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
