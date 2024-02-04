import React from "react";
import img from "../assests/contact-img-2.png";
import { useForm } from "react-hook-form";
import { GoHome } from "react-icons/go";
import { FiFacebook, FiInstagram, FiPhone, FiYoutube } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="bg-[#0f0f0f] py-5 pb-16 relative px-20" id="contact">
      <div className="flex items-center">
        <div className="h-2 w-40 bg-[#E10000] shadow-lg"></div>
        <div
          className="font-bold text-[#6b6161] text-3xl sm:text-5xl px-5"
          style={{ fontFamily: "Jura" }}
        >
          Contact
        </div>
        <div className="h-2 w-10 bg-[#E10000] shadow-lg"></div>
      </div>
      <div className="w-full flex justify-center pt-20">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-full lg:w-3/5 bg-cover rounded-3xl flex justify-center"
        >
          <div className="w-full flex justify-around flex-wrap">
            <div className="text-white p-8 w-80">
              <div>
                <h2 className="flex gap-1 items-center font-K2D">
                  <GoHome /> Address
                </h2>
                <p className="px-1 py-1 font-Jura text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur. Vivamus suspendisse
                  semper tellus sapien volutpat urna et.
                </p>
              </div>
              <div>
                <h2 className="flex gap-1 items-center font-K2D">
                  <FiPhone /> Contact
                </h2>
                <p className="px-1 py-1 font-Jura  text-sm md:text-base">
                  Lorem ipsum - +91 1234567890 Lorem ipsum - +91 1234567890
                </p>
              </div>
              <div>
                <h2 className="flex gap-1 items-center font-K2D">
                  <IoIosMail />
                  Mail
                </h2>
                <p className="px-1 py-1 font-Jura  text-sm md:text-base">
                  Lorem ipsum - +91 1234567890 Lorem ipsum - +91 1234567890
                </p>
              </div>
              <div>
                <h2 className="font-Jura">Follow us on</h2>

                <div className="flex gap-5 mt-4 text-white text-4xl">
                  <a href="#contact" className="text-[#c13584]">
                    <FiInstagram />
                  </a>
                  <a href="#contact" className="text-[#1877f2]">
                    <FiFacebook />
                  </a>
                  <a href="#contact" className="text-[#ff0000]">
                    <FiYoutube />
                  </a>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="text-white p-5 w-80"
            >
              <div>
                <label htmlFor="name" className="font-Kodchasan">
                  Name:
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  // className="bg-transparent border border-gray-500  relative left-2 rounded-[20px] mt-3 mb-3 outline-0 "
                  className="bg-transparent mt-3 mb-3 block w-[80%] rounded-[20px] border-0 py-1.5 pl-3 pr-20  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-0"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-Kodchasan">
                  Email address:
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="bg-transparent mt-3 mb-3 block w-[80%] rounded-[20px] border-0 py-1.5 pl-3 pr-20  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-0"
                />
              </div>
              <div>
                <label htmlFor="sub" className="font-Kodchasan">
                  Subject:
                </label>
                <br />
                <input
                  type="text"
                  id="sub"
                  {...register("sub")}
                  className="bg-transparent mt-3 mb-3 block w-[80%] rounded-[20px] border-0 py-1.5 pl-3 pr-20  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-0"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-Kodchasan">
                  Type your message...
                </label>
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="5"
                  {...register("message")}
                  className="bg-transparent mt-3 mb-3 block w-[80%] rounded-[20px] border-0 py-1.5 pl-3 pr-20  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-0"
                />
              </div>
              <div className="flex justify-center items-center relative right-8">
                <button
                  type="submit"
                  className="bg-gray-500 px-4 py-1 rounded-[10px] font-Montserrat "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
