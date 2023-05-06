import axios from "axios";
import React, { useState } from "react";
function Signup() {
  const [data, userData] = useState({});

  const handleChange = (e) => {
    userData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleClick = async () => {
    await axios
      .post("http://localhost:8080/signup", data)
      .then((succ) => {
        console.log(succ);
        alert("Success");
      })
      .catch((err) => {
        console.log(err);
        alert("Failure");
      });
  };
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            {/* <p class="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p> */}
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Phone
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="phone"
                name="phone"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={() => handleClick()}
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
