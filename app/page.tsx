"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const researchThemes = [
  {
    index: "01",
    title: "Statistical genetics",
    description:
      "Genome-wide association studies, polygenic risk scores, and statistical methods for biobank-scale data.",
  },
  {
    index: "02",
    title: "Biomedical data science",
    description:
      "Machine learning for multi-omics and electronic health records, with an emphasis on disease-risk prediction.",
  },
  {
    index: "03",
    title: "AI for biology",
    description:
      "Computational approaches to genomics, gene-expression recovery, biological systems, and scientific discovery.",
  },
];

const navigation = [
  ["About", "about"],
  ["Research", "research"],
  ["Experience", "experience"],
  ["Course Projects", "work"],
  ["Education", "education"],
  ["Honors & Awards", "awards"],
  ["Contact", "contact"],
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");
  const [wechatOpen, setWechatOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("kaixu-theme");
    const initialTheme: Theme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }, []);

  useEffect(() => {
    if (!wechatOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setWechatOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [wechatOpen]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("kaixu-theme", nextTheme);
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  }

  return (
    <>
      <div className="site-shell">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <div className="portrait">
            <img src="/profile.png" alt="Portrait of Kaixu Tang" />
          </div>

          <h1 className="name">Kaixu Tang</h1>
          <p className="role">
            Senior Undergraduate Student
            <br />
            Department of Statistics
            <br />
            School of Mathematical Sciences
            <br />
            Peking University
          </p>

          <p className="status">
            Seeking 2027 Fall PhD opportunities in Statistics &amp;
            Biostatistics
          </p>

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
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(id);
                }}
              >
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
              I am a senior undergraduate student in the Department of
              Statistics, School of Mathematical Sciences, Peking University.
              I have the privilege of working with Prof. [
              <a
                href="http://faculty.bicmr.pku.edu.cn/~gehao/"
                target="_blank"
                rel="noreferrer"
              >
                Hao Ge
              </a>
              ] at Peking University and Prof. [
              <a
                href="https://zhaocenter.org/"
                target="_blank"
                rel="noreferrer"
              >
                Hongyu Zhao
              </a>
              ] at Yale University. Throughout my research journey, I have been
              fortunate to learn from and collaborate with Dr. [
              <a
                href="https://profiles.stanford.edu/leqi-xu"
                target="_blank"
                rel="noreferrer"
              >
                Leqi Xu
              </a>
              ]. I am currently seeking 2027 Fall PhD opportunities in
              Statistics &amp; Biostatistics. Please feel free to reach out!
            </p>
          </div>

          <div className="actions" aria-label="Profile links">
            <a
              className="primary-action"
              href="/Kaixu_Tang_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
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
            <button type="button" onClick={() => setWechatOpen(true)}>
              WeChat
            </button>
          </div>
        </header>

        <section id="research">
          <div className="section-head">
            <h2>Research Interests</h2>
            <p className="section-note">
              Statistical and computational methods for genetics, biomedical
              data, and AI-enabled scientific discovery.
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
            <h2>Selected Course Projects</h2>
            <p className="section-note">
              A selection of projects completed through my undergraduate
              coursework.
            </p>
          </div>

          <div className="work-list">
            <article className="work-item">
              <div className="work-label">Fall 2025</div>
              <div>
                <h3>
                  <a
                    href="https://arxiv.org/abs/2603.22824"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Implicit Bias under Norm-Constrained Steepest Descent
                    (NucGD)
                  </a>
                </h3>
                <p className="project-course">
                  Deep Learning and Reinforcement Learning
                </p>
                <p>
                  Studied implicit bias in multiclass separable classification
                  and proposed NucGD, a nuclear-norm optimizer with an SVD-free
                  asynchronous power-iteration update.
                </p>
              </div>
              <span className="tag">Course Project</span>
            </article>
            <article className="work-item">
              <div className="work-label">Fall 2025</div>
              <div>
                <h3>
                  <a
                    href="/course-projects/CATE_Multi_Valued_Treatments.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Estimating Conditional Average Treatment Effects with
                    Multi-Valued Treatments
                  </a>
                </h3>
                <p className="project-course">Statistical Learning</p>
                <p>
                  Extended CATE estimation to multi-valued treatments using
                  double machine learning, causal forests, and a spline-based
                  meta-learner, with simulations and an application to NLSY79.
                </p>
              </div>
              <span className="tag">Course Project</span>
            </article>
            <article className="work-item">
              <div className="work-label">Spring 2025</div>
              <div>
                <h3>
                  <a
                    href="/course-projects/Bayesian_Expression_Recovery.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bayesian Expression Recovery under a Poisson-Gamma
                    Framework
                  </a>
                </h3>
                <p className="project-course">
                  Bayesian Theory and Computation
                </p>
                <p>
                  Compared non-informative, empirical-Bayes mixture, SAVER,
                  and SAVER-X priors for expression recovery from PDAC bulk
                  RNA-seq data with synthetic dropout.
                </p>
              </div>
              <span className="tag">Course Project</span>
            </article>
            <article className="work-item">
              <div className="work-label">Spring 2025</div>
              <div>
                <h3>
                  <a
                    href="/course-projects/Mammalian_Circadian_Clock.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mathematical Modeling of the Mammalian Circadian Clock
                  </a>
                </h3>
                <p className="project-course">
                  Mathematical Modeling in the Life Sciences
                </p>
                <p>
                  Reimplemented and calibrated the 16-ODE Leloup-Goldbeter
                  circadian model to mouse liver data and assessed oscillation
                  robustness through peak detection and sensitivity analysis.
                </p>
              </div>
              <span className="tag">Course Project</span>
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
              <p className="profile-organization">
                Department of Statistics, School of Mathematical Sciences
              </p>
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
                I am seeking 2027 Fall PhD opportunities in Statistics &amp;
                Biostatistics and welcome conversations about research and
                collaboration.
              </p>
            </div>
            <a href="mailto:2300012401@stu.pku.edu.cn">
              2300012401@stu.pku.edu.cn
            </a>
          </div>
        </section>

        <footer>
          <span>© 2026 Kaixu Tang</span>
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("about");
            }}
          >
            Back to top
          </a>
        </footer>
      </main>
      </div>

      {wechatOpen && (
        <div
          className="wechat-backdrop"
          role="presentation"
          onClick={() => setWechatOpen(false)}
        >
          <div
            className="wechat-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wechat-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="wechat-close"
              type="button"
              aria-label="Close WeChat QR code"
              onClick={() => setWechatOpen(false)}
            >
              ×
            </button>
            <p className="eyebrow">WeChat</p>
            <h2 id="wechat-title">Scan to connect</h2>
            <img
              className="wechat-qr"
              src="/wechat-qr.jpg"
              alt="WeChat QR code for Kaixu Tang"
            />
          </div>
        </div>
      )}
    </>
  );
}
