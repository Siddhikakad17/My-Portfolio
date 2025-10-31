import React from "react";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section className="page">
      <div className="hero-card glass-card" data-aos="fade-up">
        <div className="hero-left">
          <h1 className="hero-title">Hi, I'm <span className="accent">Siddhi Kakad</span> 👋</h1>
          <p className="hero-sub">A passionate Web Developer & IT Engineering Student.</p>
          <p className="hero-desc">I build responsive, accessible front-ends and enjoy turning designs into polished user experiences.</p>
        </div>

        <div className="hero-right">
          <img src={profile} alt="Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
}

export default Home;
