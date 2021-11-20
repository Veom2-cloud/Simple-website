import React, { useState } from "react";
import { Form } from "react-bootstrap";

function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");
    const [msg, setMessage] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${name} .  My phone no is ${phone} . My email is ${email} . My message is ${msg}`
    );
  };
  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <Form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  required
                  name="Fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  required
                  name="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone no
                </label>
                <input
                  required
                  name="Phone no"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}                  
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter phone no"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  required
                  name="Message"
                  value={msg}
                  onChange={(e) => setMessage(e.target.value)}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12 ">
                <button class="btn btn-outline-secondary" type="submit">
                  Submit form
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
