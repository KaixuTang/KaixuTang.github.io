"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const researchThemes = [
  {
    index: "01",
    title: "Reliable machine learning",
    description:
      "Methods and evaluation practices for dependable data-driven systems.",
  },
  {
    index: "02",
    title: "Computational modeling",
    description:
      "Mathematical models that connect theory, data, and scientific questions.",
  },
  {
    index: "03",
    title: "Evaluation and benchmarking",
    description:
      "Careful, reproducible comparisons that clarify where methods succeed.",
  },
];

const navigation = [
  ["About", "about"],
  ["Research", "research"],
  ["Experience", "experience"],
  ["Selected Work", "work"],
  ["Education", "education"],
  ["Honors & Awards", "awards"],
  ["Contact", "contact"],
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("kaixu-theme");
    const initialTheme: Theme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("kaixu-theme", nextTheme);
  }

  return (
    <div className="site-shell">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <div className="monogram" aria-label="Kaixu Tang initials">
            KT
          </div>

          <h1 className="name">Kaixu Tang</h1>
          <p className="role">
            Undergraduate Student
            <br />
            Department of Statistics
            <br />
            Peking University
          </p>

          <p className="status">Currently seeking PhD opportunities</p>

          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-knob" />
            </span>
            <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
          </button>

          <nav aria-label="Primary navigation">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <p className="sidebar-footer">
            Academic profile
            <br />
            Updated July 2026
          </p>
        </div>
      </aside>

      <main>
        <header id="about" className="hero">
          <p className="eyebrow">About</p>
          <div className="intro">
            <p>
              I am an undergraduate student in the Department of Statistics at
              Peking University, where I am honored to be advised by{" "}
              <strong>Prof. Hao Ge</strong>.
            </p>
            <p>
              Since July 2025, I have been an Undergraduate Research Fellow at
              Yale University, where I am fortunate to work with{" "}
              <strong>Prof. Hongyu Zhao</strong>.
            </p>
            <p>
              I am currently open to PhD opportunities. Feel free to reach out
              if you would like to discuss research or potential opportunities.
            </p>
          </div>

          <div className="actions" aria-label="Profile links">
            <span
              className="primary-action action-placeholder"
              aria-disabled="true"
              title="CV will be added soon"
            >
              CV (coming soon)
            </span>
            <a
              href="https://github.com/KaixuTang"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span
              className="action-placeholder"
              aria-disabled="true"
              title="Google Scholar profile will be added soon"
            >
              Google Scholar
            </span>
            <a
              href="https://www.linkedin.com/in/kaixu-tang-a90409374/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:2300012401@stu.pku.edu.cn">Email</a>
          </div>
        </header>

        <section id="research">
          <div className="section-head">
            <h2>Research</h2>
            <p className="section-note">
              Themes that guide my current exploration and future doctoral
              work.
            </p>
          </div>

          <div className="themes">
            {researchThemes.map((item) => (
              <article className="theme-card" key={item.index}>
                <span className="theme-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="section-head">
            <h2>Experience</h2>
            <p className="section-note">
              Research experience across statistical and biomedical data
              science.
            </p>
          </div>

          <div className="profile-list">
            <article className="profile-item">
              <div>
                <p className="profile-period">July 2025 — Present</p>
                <h3>Undergraduate Research Fellow</h3>
                <p className="profile-organization">Yale University</p>
                <p>
                  Research internship under the guidance of Prof. Hongyu Zhao.
                </p>
              </div>
              <span className="tag">Research Internship</span>
            </article>
          </div>
        </section>

        <section id="work">
          <div className="section-head">
            <h2>Selected Work</h2>
            <p className="section-note">
              Current research and project work, with an emphasis on careful
              evaluation.
            </p>
          </div>

          <div className="work-list">
            <article className="work-item">
              <div className="work-label">Current</div>
              <div>
                <h3>Delphi Benchmark</h3>
                <p>
                  An ongoing effort focused on structured, reproducible model
                  evaluation and transparent comparison.
                </p>
              </div>
              <span className="tag">Project</span>
            </article>
            <article className="work-item">
              <div className="work-label">Ongoing</div>
              <div>
                <h3>Research in progress</h3>
                <p>
                  Exploring data-driven methods for scientific questions while
                  prioritizing rigor, interpretability, and reproducibility.
                </p>
              </div>
              <span className="tag">Research</span>
            </article>
          </div>
        </section>

        <section id="education">
          <div className="section-head">
            <h2>Education</h2>
            <p className="section-note">
              Academic training and current institutional affiliation.
            </p>
          </div>
          <div className="education-item">
            <div>
              <h3>Peking University</h3>
              <p className="profile-organization">Department of Statistics</p>
              <p>Undergraduate student</p>
            </div>
            <span className="tag">Current</span>
          </div>
        </section>

        <section id="awards">
          <div className="section-head">
            <h2>Honors &amp; Awards</h2>
            <p className="section-note">
              Selected academic distinctions and honors.
            </p>
          </div>

          <div className="profile-list">
            <article className="profile-item">
              <div>
                <h3>Silver Medal</h3>
                <p className="profile-organization">
                  37th Chinese Mathematical Olympiad
                </p>
              </div>
              <span className="tag">National Honor</span>
            </article>
            <article className="profile-item">
              <div>
                <h3>Applied Mathematics &amp; Statistics Elite Program</h3>
                <p className="profile-organization">Peking University</p>
              </div>
              <span className="tag">Elite Program</span>
            </article>
          </div>
        </section>

        <section id="contact">
          <div className="contact-card">
            <div>
              <p className="contact-kicker">Contact</p>
              <h2>Feel free to reach out.</h2>
              <p>
                I am currently open to PhD opportunities and welcome
                conversations about research and collaboration.
              </p>
            </div>
            <a href="mailto:2300012401@stu.pku.edu.cn">
              2300012401@stu.pku.edu.cn
            </a>
          </div>
        </section>

        <footer>
          <span>© 2026 Kaixu Tang</span>
          <a href="#about">Back to top</a>
        </footer>
      </main>
    </div>
  );
}
