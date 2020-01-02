import React, { useState } from "react";
import axios from "axios";
import contact from "../images/contact.svg"

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const url =
      "https://s3oqwb33yj.execute-api.us-east-1.amazonaws.com/default/ContactFormLambda/";
    const content = "Hi this is " + name + ",   " + message;
    const data = { email, subject: "Lanyard Query", message: content };

    axios
      .post(url, data)
      .then(() => {
        setSuccess(
          "Thank you for your email. We shall get back to you at the earliest. "
        );
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch(err => {
        setEmail("");
        setMessage("");
        setName("");
        setSuccess(
          "Thank you for your email. We shall get back to you at the earliest. "
        );
      });
  };

  return (
    <div id="contact">
        <h1 className="the_title">Contact</h1>
      <div className="in_wrap by_two">
        <div className="container">
        <div className="illust">
                <img src={contact} alt="contact" />
             </div>
          <div className="form"> 
            <div className="inwrap">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="Query" className="key">
                    Query
                  </label>
                  <div className="val">
                    <textarea
                      name="Query"
                      id="Query"
                      placeholder="Your Query"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-row">
                      <label htmlFor="Name" className="key">
                        Name
                      </label>
                      <div className="val">
                        <input
                          name="Name"
                          id="Name"
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-row">
                      <label htmlFor="Mail" className="key">
                        Mail
                      </label>
                      <div className="val">
                        <input
                          name="Mail"
                          id="Mail"
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="Your Mail"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="actions">
                    <button type="submit">Submit</button>
                  </div>
                </div>
                {success ? (
                  <div className="form-row">
                    <div className="wb-alert wb-success md">{success}</div>
                  </div>
                ) : null}
                {error ? (
                  <div className="form-row">
                    <div className="wb-alert wb-error md">{error}</div>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
