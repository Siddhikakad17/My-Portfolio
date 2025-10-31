import React from "react";

const projects = [
  { title: "Portfolio Website", desc: "React + Bootstrap + AOS", img: "", link: "#" },
  { title: "Ruhless Drop", desc: "", img: "", link: "#" },
  { title: "Sentimental Analysis", desc: "HTML + CSS + ML", img: "", link: "#" },
];

export default function Projects() {
  return (
    <section className="page page-projects">
      <h2 className="page-title" data-aos="fade-up">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card glass-card" data-aos="zoom-in" data-aos-delay={i * 100} key={i}>
            <div className="project-media">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="project-body">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <a className="btn btn-outline" href={p.link} target="_blank" rel="noreferrer">View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
