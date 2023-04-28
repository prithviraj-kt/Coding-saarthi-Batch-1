import React, { useEffect } from "react";
import { useState } from "react";
function Contact() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  useEffect(() => {
    alert("Hello")
  },[data.email]);

  return (
    <div>
      <form>
        <div className="mb-3 w-25 m-4">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3 w-25 m-4">
          <label className="form-label">EMail Id</label>
          <input
            type="text"
            name="email"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3 w-25 m-4">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-25 m-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
