import React from "react";
// icons removed from About page (links live in Contact page)

export default function About() {
  const education = [
    { degree: 'Diploma in IT', institution: 'MIT Polytechnic', year: 'Graduated 2024' },
    { degree: 'B.Tech (IT)', institution: 'MIT ADT', year: 'Expected graduation: 2027' },
    // add more entries here and they'll render automatically
  ];

  const experience = [
    { role: 'Web Developer', org: 'Innovetix', period: 'Jun 2025 - Jul 2025' },
    { role: 'Student Developer', org: 'Campus Projects', period: '2023 - Present' },
  ];

  return (
    <section className="page page-about">
      <div className="container">
        <div className="glass-card about-card" data-aos="fade-up">

          <div className="about-right">
          <h2>About Me</h2>
          <p>
           I’m a web development student with a solid foundation in HTML, CSS, JavaScript, and React. I love building responsive, user-friendly websites
            and turning design ideas into real, functional code. I’m eager to apply what I’ve learned in class to real-world projects and keep growing my skills
             through hands-on experience and continuous learning in modern web technologies.
          </p>

          <div className="about-grid">
            <div className="info-box">
              <h4>Education</h4>
              {education.map((e, i) => (
                <p key={i} style={{ marginBottom: i === education.length - 1 ? 0 : 8 }}>
                  <strong>{e.degree}</strong><br />{e.institution} — {e.year}
                </p>
              ))}
            </div>

            <div className="info-box">
              <h4>Experience</h4>
              <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                {experience.map((ex, i) => (
                  <li key={i}><strong>{ex.role}</strong> — {ex.org} ({ex.period})</li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
