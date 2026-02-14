import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contact = () => {
  // const formInitialDetails={
  //   firstname:'',
  //   lastname:'',
  //   email:'',
  //   phone:'',
  //   message:''
  // }
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  // const [formDetails,setFormDetails] = useState(formInitialDetails)
  // const [buttonText,setButtonText] = useState(false);
  // const [status,setStatus] = useState({})

  return (
    <section className="contact">
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
            <div className=" mt-5 mb-2 flex  items-center gap-3">
              <input 
                placeholder="First Name"
                className=" text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all"
                {...register("firstName", { required: true, maxLength: 20 })}
              />
              <input placeholder="Contact Number" className=" text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            </div>
            <div className=" mt-5 mb-2 flex  items-center gap-3">

            <input className=" text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all" type="number" {...register("age", { min: 18, max: 99 })} />
            <input className=" text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all" type="number" {...register("age", { min: 18, max: 99 })} />
            </div>
            <div className="my-2">
              <textarea placeholder="Enter Your Message" className=" text-black w-2/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all">

              </textarea>
            </div>
            <input className=" text-black w-1/3 p-3 rounded-md border border-slate-800 bg-white/10 backdrop-blur-md   outline-none focus:ring-2 focus:ring-white/10 transition-all" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
