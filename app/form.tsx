'use client'

import { SubmitEvent, useState } from 'react'

export const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      if (res.status === 200) {
        setSubmitted(true)
      }
    } catch (err: any) {
      console.error('Err', err)
    }
  }

  return isSubmitted ? (
    <div>
      <h1
        className="text-center font-semibold text-3xl
      "
      >
        Thank you for your message!
      </h1>
    </div>
  ) : (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div className="">
        <label className="label font-semibold">
          <span className="label-text">Full Name</span>
        </label>
        <input
          className="input w-full input-bordered input-primary"
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
          className="input w-full input-bordered input-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label className="label font-semibold">
          <span className="label-text">Message</span>
        </label>
        <textarea
          className="textarea w-full textarea-primary"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
}