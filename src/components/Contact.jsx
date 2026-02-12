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
        <div className="border shadow-amber-100">
          <img
            src="contactpic3.jpg"
            className="w-100 h-100 object-fit-cover "
            alt="Contact"
          />
        </div>
        <div className="border">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
