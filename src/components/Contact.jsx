import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Snowfall from "react-snowfall";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [load, setLoad] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoad(true);
    const serviceID = import.meta.env.VITE_SERVICE_ID; // Found in 'Email Services'
    const templateID = import.meta.env.VITE_TEMPLATE_ID; // Found in 'Email Templates'
    const publicKey = import.meta.env.VITE_PUBLIC_KEY; // Found in 'Account' -> 'API Keys'
    const templateParams = {
      name: `${data.firstName} ${data.lastName}`, // Matches {{name}}
      time: new Date().toLocaleString(), // Matches {{time}}
      message: data.message, // Matches {{message}}
      email: data.email, // Matches {{email}}
      phoneNumber: data.phoneNumber,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Message sent successfully", response);
        alert("Thanks for submitting");
        reset();
      })
      .catch((e) => {
        console.log("Some error Occured", e);
        alert("Try Again");
      })
      .finally(() => {
        setLoad(false);
      });
  };
  // const [formDetails,setFormDetails] = useState(formInitialDetails)
  // const [buttonText,setButtonText] = useState(false);
  // const [status,setStatus] = useState({})

  return (
    <section className="contact" id="contacts">
      {/* <Snowfall/> */}
      <div className="bg-gradient-to-r from-pink-600 to bg-purple-600 via-fuchsia-300 flex justify-between items-center p-20">
        <div className="border border-black shadow-amber-100 p-2">
          <img
            src="contactpic3.jpg"
            className="w-90 h-90 object-fit-contain animate-pulse ease-in-out"
            alt="Contact"
          />
        </div>
        <div className=" w-1/2">
          <h2 className="text-slate-800 font-bold text-3xl">Get In Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className=" my-3 flex  items-center gap-3">
              <input
                placeholder="First Name"
                className=" text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all"
                {...register("firstName", { required: true, maxLength: 20 })}
              />
              {errors.firstName?.type === "required" && (
                <div role="alert" className="text-red-300 text-bold ">
                  First name is required
                </div>
              )}
              <input
                placeholder="Last Name"
                className=" text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all"
                {...register("lastName", {
                  required: "Enter the last name",
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.lastName?.type === "required" && (
                <p role="alert" className="text-red-300 text-bold ">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className=" mb-3 flex  items-center gap-3">
              <input
                placeholder="Email Address"
                className=" text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all"
                type="email"
                {...register("email", { required: true, min: 18, max: 99 })}
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-300 text-bold ">
                  Email is required
                </p>
              )}
              <input
                placeholder="Phone Number"
                className=" text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be exactly 10 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "Phone number must be exactly 10 digits",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                })}
              />

              {/* This will display whatever message is triggered (required, minLength, or maxLength) */}
              {errors.phoneNumber && (
                <p role="alert" className="text-red-300 font-bold">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="my-2">
              <textarea
                {...register("message", { required: true })}
                placeholder="Enter Your Message"
                className=" text-black w-2/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all"
              ></textarea>
              {errors.message?.type === "required" && (
                <p role="alert" className="text-red-500 text-bold ">
                  Message is required
                </p>
              )}
            </div>
            <button
              className="hover:scale-105 hover:cursor-pointer text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all"
              type="submit"
            >
              {" "}
              {load ? <span>Loading</span> : <span>Submit</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
