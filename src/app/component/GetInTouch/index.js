import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { CommonData } from "../../../pages/_app";
import { useNavigate } from "next/link";
import { Validation, validate } from "../../lib/validation";
import clsx from "clsx";
import axios from "axios";
import Image from "next/image";
import NextImage from "../NextImage";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const GetInTouch = ({ func ,data}) => {
  const {mainTitle,description,image  } = data || {}
  const fullName = useRef(null);
  const email = useRef(null);

  const [errors, setErrors] = useState([]);
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
  });
  const [postResponse, setPostResponse] = useState(null);
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [isValid, err] = validate(inputData, ["role"]);
    if (email.current.value == "" && fullName.current.value == "") {
      setErrors(err);
      return false;
    }
    const response = await axios.post(`api/contact`, inputData);
    if (response) {
      setPostResponse(response);
    }
    return isValid;
    // email?.current?.value = ""
    // fullName?.current?.value = ""
  };

  useEffect(() => {
    if (postResponse) {
      var timer = setInterval(() => {
        func(false);
      }, 2000);
    }

    return () => setTimeout(timer);
  }, [postResponse]);

  return (
//  <>
//  </>

    <section className="getInTouchSection">
      <div className="getInTouchContent">
        <div className="getInTouchGrid">
          <div className="leftSide">
            <h2 className="getInTouchTitle">{mainTitle}</h2>
            <div className="getInTouchdesc">

            <TinaMarkdown content={description} />{" "}
            </div>
         

            {postResponse ? (
              <p> Thank You!! </p>
            ) : (
              <form onSubmit={handleSubmit} className="getInTouchForm">
                <div className="inputBox">
                  <input
                    ref={fullName}
                    className={clsx("inputBox", {
                      error: errors.includes("fullName"),
                    })}
                    onChange={handleChange}
                    label="FullName"
                    name="fullName"
                    type="fullName"
                    placeholder="Full Name"
                  />
                </div>
                <div className="inputBox">
                  <input
                    ref={email}
                    className={clsx("inputBox", {
                      error: errors.includes("email"),
                    })}
                    onChange={handleChange}
                    label="E-Mail"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="formBtn">
                  <button type="submit" className="btn themeBtn">
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="rightSide">
          <NextImage
            src={image.image}
            alt={image?.alt}
            width={500}
            height={500}
          />
          </div>
          <div className="closePopup" onClick={() => func(false)}>
            <NextImage
              src="/assets/images/cancel.webp"
              alt="cancel"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
