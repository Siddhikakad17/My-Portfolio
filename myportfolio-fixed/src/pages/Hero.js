import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <section className="page page-home">
      <div className="glass-card hero-card" data-aos="fade-up">
        <div className="hero-left">
          <h1 className="hero-title">Hi, I'm <span className="accent">Siddhi</span></h1>
          <div className="hero-sub">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React Enthusiast",
                  "UI/UX Focused",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </div>

          <p className="hero-desc">
            I build clean, responsive web apps with modern tools — React, Node, and a dash of design.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="/projects">View Projects</a>
            <a className="btn btn-outline" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <img
            src="https://picsum.photos/360/360?grayscale"
            alt="profile"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
}
