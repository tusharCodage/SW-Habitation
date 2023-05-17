import { memo, useEffect, useRef, useState } from "react";
import Link from "next/link";
import React, { useContext } from "react";
import { CommonData } from "../../../pages/_app";
import { validate } from "../../lib/validation";
import clsx from "clsx";
import axios from "axios";
import { useRouter } from "next/router";

const Contact = () => {
  const fullName = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const [errors, setErrors] = useState([]);
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const navigate = useRouter();
  const handleChange = (e) => {
    setInputData((inputData) => ({
      ...inputData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [isValid, err] = validate(inputData, ["role"]);
    if (
      email.current.value == "" &&
      fullName.current.value == "" &&
      message.current.value == ""
    ) {
      setErrors(err);
      return false;
    }
    const response = await axios.post(`/api/contact`, inputData);
    const getallmy = JSON.parse(response.config.data);
    const getvalue =
      getallmy.fullName !== "" ||
      getallmy.message !== "" ||
      getallmy.email !== "";
    if (getvalue == true) {
      return navigate.push("/thankyou");
    }
    return isValid;
  };
  return (
    <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      <section className="contactForm">
        <div className="container smallWidth">
          <div className="contactContent">
            {/* <div className="contactInfo">
              <div className="contactBox">
                <h6>{informationBox?.box1?.title}</h6>
                <div className="infoContent">
                  <h4>{informationBox?.box1?.days}</h4>
                  <h4>{informationBox?.box1?.timing}</h4>
                  <h5>{informationBox?.box1?.available}</h5>
                </div>
              </div>
              <div className="contactBox">
                <h6>{informationBox?.box2?.title}</h6>
                <div className="infoContent">
                  <h4>
                    <Link href={`tel:${informationBox?.box2?.phone}`}>
                      {informationBox?.box2?.phone}
                    </Link>
                  </h4>
                  <h5>
                    <Link href={`mailto:${informationBox?.box2?.email}`}>
                      {informationBox?.box2?.email}
                    </Link>
                  </h5>
                </div>
              </div>
            </div> */}
            <form onSubmit={handleSubmit}>
              <div className="inputWrap">
                <div className="inputBox">
                <input
                    onChange={handleChange}
                    className={clsx("inputBox", {
                      error: errors.includes("fullName"),
                    })}
                    ref={fullName}
                    label="FullName"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="inputBox">
                  <input
                    onChange={handleChange}
                    className={clsx("inputBox", {
                      error: errors.includes("email"),
                    })}
                    ref={email}
                    label="E-Mail"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                {/* <div
                  className={clsx("inputBox", {
                    error: errors.includes("role"),
                  })}
                >
                  <select onChange={handleChange} name="role" label="Role">
                    <option value="">Choose Query</option>
                    <option value="Query1" className="py-1">
                      Query1
                    </option>
                    <option value="Query2" className="py-1">
                      Query2
                    </option>
                    <option value="Query3" className="py-1">
                      Query3
                    </option>
                  </select>
                </div> */}
                <div className="inputBox">
                  <textarea
                    className={clsx("inputBox", {
                      error: errors.includes("message"),
                    })}
                    ref={message}
                    onChange={handleChange}
                    label="Your message here"
                    name="message"
                    placeholder="Message"
                  />
                </div>
                <div className="formBtn">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Contact);
