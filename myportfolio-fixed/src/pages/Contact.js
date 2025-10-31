import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const send = (e) => {
    e.preventDefault();
    // simple mailto fallback
    const subject = encodeURIComponent(`Contact from ${name || "Portfolio"}`);
    const body = encodeURIComponent(msg);
    window.location.href = `mailto:siddhi@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page page-contact">
      <h2 className="page-title" data-aos="fade-up">Contact</h2>

      <form className="contact-form glass-card" onSubmit={send} data-aos="fade-up">
        <label>
          Name
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required />
        </label>

        <label>
          Message
          <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Say hi..." required />
        </label>

        <div>
          <button className="btn btn-primary" type="submit">Send Email</button>
        </div>
      </form>

      <div className="contact-links" data-aos="fade-up">
        <h4>Contact & Links</h4>
        <div className="contact-items">
          <a href="siddhikakad17@gmail.com" className="contact-link"><FaEnvelope /> <span className="contact-label">E-mail</span></a>
          <a href="www.linkedin.com/in/siddhi-kakad-s2005" target="_blank" rel="noreferrer" className="contact-link"><FaLinkedin /> <span className="contact-label">LinkedIn</span></a>
          <a href="https://github.com/Siddhikakad17" target="_blank" rel="noreferrer" className="contact-link"><FaGithub /> <span className="contact-label">GitHub</span></a>
        </div>
      </div>
    </section>
  );
}

