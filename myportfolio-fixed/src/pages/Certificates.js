import React from "react";

const certs = [
  {
    title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
    src: "https://coursera.org/share/d09f9b2ddad710e52c50f1671edd1080",
  },
  {
    title: "JavaScript Full Stack Capstone Project",
    src: "https://coursera.org/share/419505687c7440311997309f77e01075",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    src: "https://coursera.org/share/226ef9e9a718a6b8fe0dc9b93608db2b",
  },
];

export default function Certificates() {
  return (
    <section className="page page-certs">
      <h2 className="page-title" data-aos="fade-up">Certificates</h2>
      <div className="certs-grid">
        {certs.map((c, i) => {
          return (
            <div
              className={`cert-card glass-card`}
              data-aos="flip-left"
              key={i}
            >
              <div className="cert-card-inner">
                <h4>{c.title}</h4>
                <a className="btn btn-outline" href={c.src} target="_blank" rel="noreferrer">View</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
