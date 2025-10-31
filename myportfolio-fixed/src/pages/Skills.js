import React from "react";

const categories = {
  Frontend: ["C++","Java","HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  Backend: ["Node.js", "Express", "My SQL"],
  Tools: ["Git", "VS Code", "Postman", "Figma"],
};

export default function Skills() {
  return (
    <section className="page page-skills">
      <h2 className="page-title" data-aos="fade-up">Skills</h2>
      <div className="skills-grid">
        {Object.entries(categories).map(([cat, items]) => (
          <div className="skill-box glass-card" data-aos="fade-up" key={cat}>
            <h4>{cat}</h4>
            <ul>
              {items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
