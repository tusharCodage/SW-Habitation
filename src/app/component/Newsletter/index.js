import React, { memo, useContext, useRef, useState } from "react";
import { CommonData } from "../../../pages/_app";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Validation } from "../../lib/validation";

const CustomForm = ({ status, onValidated, message }) => {
  const [isError, setError] = useState(false);
  let email;
  const submit = (e) => {
    e.preventDefault()
    if (email && Validation.isValidEmail(email.value)) {
      setError(false);
      onValidated({
        EMAIL: email.value,
      });
    } else {
      setError("Email is invalid");
    }
  };
  const inputEl = useRef(null);

  // const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // const { error } = await res.json();

    // if (error) {
    //   // 4. If there was an error, update the message in state.
    //   setMessage(error);

    //   return;
    // }

    // 5. Clear the input value and show a success message.
    // inputEl.current.value = "";
    // setMessage("Success! You are now subscribed to the newsletter.");
  };

  return (
    <>
      {status ? (
        <div className="newsError">
          {status === "sending" && (
            <div style={{ color: "blue" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: String(message) }}
            />
          )}
          {status === "success" && (
            <div
              style={{ color: "green" }}
              dangerouslySetInnerHTML={{ __html: String(message) }}
            />
          )}
        </div>
      ) : (
        <>
          {/* <form onSubmit={subscribe}>
            <input
              className={isError ? "error" : ""}
              id="email-input"
              name="email"
              placeholder="you@awesome.com"
              ref={inputEl}
              required
              type="email"
            />
            <button type="submit">Subscribe</button>
            
          </form> */}
          <form onSubmit={submit}>
          <input
            className={isError ? "error" : ""}
            ref={(node) => (email = node)}
            type="email"
            placeholder="Your email"
            />
          <button onClick={submit}>Submit</button>
            </form>
        </>
      )}
    </>
  );
};

const Newsletter = ({ newsletter }) => {
  const { title, description, input, btn } = newsletter || {};

  const postUrl = `https://gmail.us17.list-manage.com/subscribe/post?u=3c5fd86c9eae9d0783dce6d24&amp;id=9c0e4b235d&amp;f_id=00c348e0f0`;

  return (
    <>
      <div className="newsletterWrap">
        <h2 className="newsletterTitle">{title}</h2>
        <p>{description}</p>
        <div className="newsLetterForm">
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
          {/* <input type="text" placeholder="Your Email" />
          <button>Send</button> */}
        </div>
      </div>
    </>
  );
};

export default memo(Newsletter);
