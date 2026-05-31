"use client";

import { SubmitEvent, useState } from "react";

export const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status === 200) {
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error("Err", err);
    }
  };

  return isSubmitted ? (
    <div>
      <h1
        className="flex items-center flex-col mx-auto w-full mt-32 px-8 text-center font-semibold text-2xl
      "
      >
        Thanks! I will get back to you as soon as possible!
      </h1>
    </div>
  ) : (
    <div className={`flex items-center flex-col mx-auto w-full mt-32 px-8`}>
      <div
        className={`text-xs border-b-[1px] font-thin items-center flex-col mx-auto px-1 mb-4 text-gray-200`}
      >
        CONTACT
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <div>
          <label className="label font-semibold">
            <span className="label-text">Full Name</span>
          </label>
          <input
            className="input w-full input-bordered input-primary mb-2 mt-1 text-gray-900 bg-gray-200 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder=""
          />
        </div>
        <div>
          <label className="label font-semibold">
            <span className="label-text">Email</span>
          </label>
          <input
            className="input w-full input-bordered input-primary mb-2 mt-1 text-gray-900 bg-gray-200 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder=" name@example.com"
          />
        </div>
        <div>
          <label className="label font-semibold">
            <span className="label-text">Message</span>
          </label>
          <div>
            <textarea
              name="contact"
              className="textarea w-full h-full textarea-primary mb-2 mt-1 text-gray-900 bg-gray-200 rounded-md"
              maxLength={500}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
              placeholder=" What's up!? (Max 500 characters)"
            ></textarea>
          </div>
        </div>
        <button
          className="btn btn-primary label font-semibold text-gray-200 hover:scale-110 cursor-pointer transition-all duration-100"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
