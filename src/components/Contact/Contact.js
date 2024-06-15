import React, { useState } from "react";
import "./contact.css";
import { GrLocation, GrPhone, GrMailOption } from "react-icons/gr";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "17d5a3c6-7cf6-4a88-a679-0af4dec5a965");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contacts-details" id="contact">
        <h1>
          {" "}
          <span className="underline-box">Contact</span>
        </h1>
      </div>
      <div className="wapper">
        <div className="container">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <GrLocation className="icons" />
                <div className="topic"> Address</div>
                <div className="text-one">Chennai, Tamilnadu</div>
                <div className="text-two details">India</div>
              </div>
              <div className="phone details">
                <GrPhone className="icons" />
                <div className="topic"> Phone</div>
                <div className="text-one">+918072594782</div>
       
              </div>
              <div className="email details">
                <GrMailOption className="icons" />
                <div className="topic">Email</div>
                <div className="text-one">logeshkarthi782@gmail.com</div>

              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Get In touch</div>
              <div className="p-txt">
                <p>
                  If you like my work or if you want to get in touch with me,
                  please leave a message.
                </p>
              </div>
              <form onSubmit={onSubmit}>
                <div className="input-box">
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="input-box massage-box">
                  <textarea
                    id="message"
                    placeholder="Enter Your Message"
                    required
                  />
                </div>
                <div className="button">
                  <button type="submit">Submit Form</button>
                </div>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

