import { Navigation } from "@/components/portfolio/navigation";
import { OrbitIllustration } from "@/components/portfolio/orbit-illustration";
import { CertificateGallery } from "@/components/portfolio/certificate-gallery";
import { ProjectGallery } from "@/components/portfolio/project-gallery";
import { Effect, Effects } from "@animate-ui/react/primitives/effects/effect";
import { projects } from "@/content/projects";
import { getCertificateFiles, getSemesterCertificateFiles } from "@/lib/certificates";

const skillGroups = [
  { label: "Code", icon: "{ }", skills: ["Python", "Web development"] },
  { label: "Electronics", icon: "⌁", skills: ["Basic electronics", "Circuit design", "Electronic circuit analysis", "RC coupled amplifier"] },
  { label: "Exploring now", icon: "↗︎", skills: ["Advanced circuit design", "Hartley oscillator", "Practical electronics"] },
  { label: "How I work", icon: "✦", skills: ["Communication", "Teamwork", "Problem-solving", "Determination", "Adaptability", "Continuous learning"] },
] as const;

const interests = [
  { n: "01", title: "Pages & ideas", text: "Reading books to expand my knowledge, explore new ideas, and grow my imagination.", mark: "Aa" },
  { n: "02", title: "Places with a past", text: "Travelling to historical places and learning the stories held in their walls.", mark: "⌖" },
  { n: "03", title: "Quiet architecture", text: "Exploring temples and appreciating their history, craft, and cultural heritage.", mark: "⌂" },
  { n: "04", title: "The wider world", text: "Discovering interesting events, discoveries, and developments from around the world.", mark: "◉" },
] as const;

export default function Home() {
  const certificates = getCertificateFiles();
  const semesterCertificates = getSemesterCertificateFiles();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <section className="hero section-wrap" id="top">
          <div className="hero-copy">
            <Effects fade slide={{ direction: "up", offset: 22 }} holdDelay={90} transition={{ type: "spring", stiffness: 150, damping: 24 }}>
              <div className="eyebrow"><span className="status-dot" /> ECE student <span className="eyebrow-divider">/</span> class of 2029</div>
              <h1>Curiosity is<br />my <em>starting point.</em></h1>
              <p className="hero-intro">I&apos;m <strong>G. Priyadharshini</strong>, a B.Tech ECE student at SR University. I enjoy turning curiosity into practical technology — from electronic circuits to Python applications — and hope to contribute to India&apos;s space exploration.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#projects">Explore my work <span aria-hidden="true">→</span></a>
                <a className="text-link" href="#contact">A little more about me <span aria-hidden="true">→</span></a>
                <a className="text-link" href="/resume/Priyadharshini_Resume.pdf" download>Download resume <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-footnote"><span className="footnote-line" /> Learning, building, looking up.</div>
            </Effects>
          </div>
          <Effect className="hero-visual" fade zoom={{ initialScale: 0.96, scale: 1 }} delay={160} transition={{ type: "spring", stiffness: 120, damping: 24 }}>
            <div className="hero-note"><span className="mono">FIELD NOTE 001</span><span>From circuits<br />to the cosmos</span></div>
            <OrbitIllustration />
            <div className="hero-caption"><span className="caption-marker">✦</span><span>Somewhere between<br />the signal and the stars.</span></div>
            <span className="hero-coordinate mono">17°32&apos; N&nbsp; 78°24&apos; E</span>
          </Effect>
          <div className="hero-bottom"><span>SR UNIVERSITY <i>·</i> B.TECH ECE</span><a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a><span>INDIA <i>·</i> EARTH</span></div>
        </section>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid">
            <div className="section-label"><span className="section-index">01 /</span> A LITTLE INTRODUCTION</div>
            <div className="intro-content">
              <h2>Curious mind.<br /><em>Determined heart.</em></h2>
              <div className="intro-columns">
                <p>I&apos;m a second-year B.Tech ECE student at SR University. I love the moment a new idea starts to make sense — whether it&apos;s inside a circuit, in a line of Python, or somewhere out in the universe.</p>
                <p>My parents&apos; hard work reminds me to keep showing up. I believe that patience, consistency, and a never-give-up attitude turn small steps into something meaningful.</p>
              </div>
              <div className="stats-row">
                <div className="stat"><span className="stat-number">02<span>×</span></span><span className="stat-caption">Semester topper<br />Semesters 1 &amp; 2</span></div>
                <div className="stat"><span className="stat-number">15<span>+</span></span><span className="stat-caption">Online course<br />certificates</span></div>
                <div className="stat"><span className="stat-number">04</span><span className="stat-caption">Projects in my<br />learning journey</span></div>
                <div className="stat"><span className="stat-number">2029</span><span className="stat-caption">Expected graduation<br />in 2029</span></div>
              </div>
            </div>
            <div className="intro-stamp" aria-hidden="true"><span>STAY</span><span>CURIOUS</span><span className="stamp-star">✦</span></div>
          </div>
        </section>
        </Effect>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="section-wrap education-section" id="journey">
          <div className="section-head">
            <div className="section-label"><span className="section-index">02 /</span> THE LEARNING SO FAR</div>
            <p className="section-kicker">A foundation in signals, systems<br />and figuring things out.</p>
          </div>
          <div className="education-card">
            <div className="education-card-main">
              <div className="university-mark" aria-hidden="true"><span>SR</span><span className="mark-orbit" /></div>
              <div><span className="mono micro-label">EXPECTED GRADUATION / 2029</span><h2>Bachelor of Technology</h2><p>Electronics &amp; Communication Engineering</p><span className="university-name">SR University <span>·</span> Second year</span></div>
            </div>
            <div className="education-card-side"><span className="laurel" aria-hidden="true">✦</span><span className="mono micro-label">ACADEMIC HONOUR</span><strong>Semester topper</strong><span className="honour-note">Semesters 1 &amp; 2</span></div>
          </div>
          <div className="education-rule"><span>WHAT I&apos;M DRAWN TO</span><span>Electronics <b>·</b> Software <b>·</b> Space technology</span></div>
        </section>
        </Effect>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-head skills-head">
              <div><div className="section-label"><span className="section-index">03 /</span> TOOLS &amp; CURIOSITIES</div><h2>Things I&apos;m <em>learning to do.</em></h2></div>
              <p className="section-kicker">Every new skill starts with<br />a question worth following.</p>
            </div>
            <div className="skill-grid">
              <Effects asChild fade slide={{ direction: "up", offset: 16 }} inView inViewMargin="-40px" holdDelay={75} transition={{ type: "spring", stiffness: 170, damping: 25 }}>
              {skillGroups.map((group, i) => (
                <article className="skill-card" key={group.label}>
                  <div className="skill-card-top"><span className="skill-symbol" aria-hidden="true">{group.icon}</span><span className="mono">0{i + 1}</span></div>
                  <h3>{group.label}</h3>
                  <ul>{group.skills.map((skill) => <li key={skill}><span className="skill-bullet" />{skill}</li>)}</ul>
                </article>
              ))}
              </Effects>
            </div>
          </div>
        </section>
        </Effect>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="projects-section section-wrap" id="projects">
          <div className="section-head projects-head">
            <div><div className="section-label"><span className="section-index">04 /</span> SMALL STEPS, REAL THINGS</div><h2>Ideas, in <em>the making.</em></h2></div>
            <p className="section-kicker">A mix of finished coursework<br />and the next thing I&apos;m exploring.</p>
          </div>
          <ProjectGallery projects={projects} />
          <div className="project-footnote"><span className="footnote-line" /> Each project is a new question — and a reason to keep going.</div>
        </section>
        </Effect>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="recognition-section">
          <div className="section-wrap recognition-grid">
            <div className="recognition-copy">
              <div className="section-label"><span className="section-index">05 /</span> A MILESTONE, THEN THE NEXT</div>
              <h2>Good work<br />deserves a <em>moment.</em></h2>
              <p>Recognised as semester topper in both my first and second semesters at SR University. Alongside my coursework, I&apos;ve completed more than fifteen online courses and continue to learn beyond the classroom.</p>
              <a href="#contact" className="text-link">Ask me what I&apos;ve been learning <span aria-hidden="true">→</span></a>
            </div>
            <div className="recognition-cards">
              <div className="award-card award-card-one"><span className="award-seal" aria-hidden="true">✦</span><span className="mono micro-label">SR UNIVERSITY / RECOGNITION</span><strong>Semester<br />topper</strong><span className="award-term">Semester 01</span><span className="award-year">B.TECH · ECE</span></div>
              <div className="award-card award-card-two"><span className="award-seal" aria-hidden="true">✦</span><span className="mono micro-label">SR UNIVERSITY / RECOGNITION</span><strong>Semester<br />topper</strong><span className="award-term">Semester 02</span><span className="award-year">B.TECH · ECE</span></div>
              <div className="course-count"><span className="course-count-num">15<span>+</span></span><span className="mono">COURSES COMPLETED</span><span className="course-count-text">And still learning.</span></div>
            </div>
          </div>
        </section>
        </Effect>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="semester-honours-section" id="semester-certificates">
          <div className="section-wrap">
            <div className="section-head certificate-head">
              <div><div className="section-label"><span className="section-index">06 /</span> ACADEMIC HONOURS</div><h2>Hard work, <em>recognised.</em></h2></div>
              <p className="section-kicker">Department appreciation<br />for academic excellence.</p>
            </div>
            <div className="semester-honours-intro">
              <span className="semester-honours-mark" aria-hidden="true">✦</span>
              <p>Recognised by the Head of the ECE Department at SR University for academic excellence in both semesters of my first year.</p>
              <span className="mono semester-honours-year">2025–26</span>
            </div>
            <div className="certificate-shelf-heading"><span>FIRST YEAR · ELECTRONICS &amp; COMMUNICATION ENGINEERING</span><span className="mono">2 APPRECIATION CERTIFICATES</span></div>
            <CertificateGallery files={semesterCertificates} variant="semester" />
          </div>
        </section>
        </Effect>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="certificate-section" id="certificates">
          <div className="section-wrap">
            <div className="section-head certificate-head">
              <div><div className="section-label"><span className="section-index">07 /</span> SELECTED CERTIFICATIONS</div><h2>Proof of the <em>practice.</em></h2></div>
              <p className="section-kicker">Little milestones from<br />a life of learning.</p>
            </div>
            <div className="certificate-summary">
              <div className="certificate-summary-mark" aria-hidden="true">✦</div>
              <div><span className="mono micro-label">LEARNING, RECOGNISED</span><strong>More than fifteen online course certificates</strong><span className="certificate-summary-detail">Plus semester-topper recognition in Semesters 1 and 2 at SR University.</span></div>
              <span className="certificate-summary-count mono">15+ <small>COURSES</small></span>
            </div>
            <div className="certificate-shelf-heading"><span>OPEN A CERTIFICATE TO PREVIEW</span><span className="mono">{certificates.filter((file) => file.kind === "pdf").length} PDF + {certificates.filter((file) => file.kind === "image").length} IMAGE SCANS</span></div>
            {certificates.length > 0 ? <CertificateGallery files={certificates} /> : (
              <div className="certificate-empty-state">
                <span className="empty-state-icon" aria-hidden="true">✧</span>
                <strong>The collection is taking shape.</strong>
                <p>Certificate previews will appear here as scans and documents are added.</p>
              </div>
            )}
          </div>
        </section>
        </Effect>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="dream-section" id="dream">
          <div className="dream-stars" aria-hidden="true" />
          <div className="section-wrap dream-grid">
            <div className="dream-copy">
              <div className="section-label section-label-light"><span className="section-index">08 /</span> THE NORTH STAR</div>
              <span className="mono dream-overline">A DREAM THAT REACHES BEYOND THE HORIZON</span>
              <h2>One day,<br />I hope to work <em>among the stars.</em></h2>
              <p>My dream is to become an ISRO professional and contribute to India&apos;s space exploration. I&apos;m especially interested in the ways electronics and communication engineering help missions reach farther.</p>
              <p>My parents&apos; dedication keeps me focused. Every circuit I study, every skill I build, and every project I take on brings the dream a little closer.</p>
              <div className="dream-pill-row"><span>Focused</span><span>Family-inspired</span><span>Always learning</span></div>
              <span className="mono roadmap-label">PERSONAL LEARNING ROADMAP</span>
              <ol className="dream-roadmap" aria-label="Personal learning roadmap">
                <li><span>01</span><strong>ECE foundations</strong></li>
                <li><span>02</span><strong>Circuit design</strong></li>
                <li><span>03</span><strong>Programming projects</strong></li>
                <li><span>04</span><strong>Space technology</strong></li>
              </ol>
            </div>
            <div className="dream-visual"><OrbitIllustration /><div className="dream-orbit-caption"><span>01 — THE LONG VIEW</span><span>Curiosity, in orbit</span></div></div>
          </div>
          <div className="dream-quote section-wrap"><span>“</span><p>Dream big. Stay curious. Never give up.</p><span className="mono">A NOTE TO MY FUTURE SELF</span></div>
        </section>
        </Effect>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="interests-section section-wrap" id="interests">
          <div className="section-head interests-head">
            <div><div className="section-label"><span className="section-index">09 /</span> OUTSIDE THE CIRCUIT</div><h2>A few things that<br /><em>make me, me.</em></h2></div>
            <p className="section-kicker">A curious mind doesn&apos;t<br />clock out after class.</p>
          </div>
          <div className="interests-grid">
            <Effects asChild fade slide={{ direction: "up", offset: 16 }} inView inViewMargin="-40px" holdDelay={75} transition={{ type: "spring", stiffness: 170, damping: 25 }}>
              {interests.map((item) => <article className="interest-card" key={item.n}><div className="interest-card-top"><span className="mono">{item.n}</span><span className="interest-mark" aria-hidden="true">{item.mark}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </Effects>
          </div>
        </section>
        </Effect>

        <Effect className="section-reveal" fade slide={{ direction: "up", offset: 24 }} inView>
        <section className="contact-section" id="contact">
          <div className="section-wrap contact-grid">
            <div className="contact-copy">
              <div className="section-label"><span className="section-index">10 /</span> OPEN CHANNEL</div>
              <h2>Have a good<br /><em>question?</em></h2>
              <p>I&apos;m open to internships, academic collaborations, and conversations about electronics, Python, and space technology.</p>
              <a className="contact-email" href="mailto:priyadharshinigundu@gmail.com">priyadharshinigundu@gmail.com <span aria-hidden="true">→</span></a>
              <a className="linkedin-link" href="https://www.linkedin.com/in/priyadharshini-g-834a5b381" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">→</span></a>
              <span className="social-note">GitHub <small>Profile coming soon</small></span>
              <a className="linkedin-link resume-link" href="/resume/Priyadharshini_Resume.pdf" download>Download resume <span aria-hidden="true">↓</span></a>
              <div className="contact-coordinate mono"><span className="status-dot" /> BASED AT SR UNIVERSITY · INDIA</div>
            </div>
            <form className="contact-form" name="contact" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <p className="honeypot"><label>Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
              <div className="form-heading"><span className="mono">A NOTE TO PRIYADHARSHINI</span><span aria-hidden="true">✦</span></div>
              <label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="What should I call you?" autoComplete="name" required />
              <label htmlFor="email">Your email</label><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
              <label htmlFor="subject">Subject <span className="optional">OPTIONAL</span></label><input id="subject" name="subject" type="text" placeholder="What would you like to talk about?" />
              <label htmlFor="message">Your message</label><textarea id="message" name="message" rows={4} placeholder="Write a little note..." required />
              <button type="submit" className="button button-dark form-submit">Send a note <span aria-hidden="true">→</span></button>
              <p className="form-footnote">A little hello goes a long way. I&apos;ll be in touch.</p>
            </form>
          </div>
        </section>
        </Effect>
      </main>
      <footer className="site-footer">
        <div className="section-wrap footer-top"><a className="brand" href="#top" aria-label="Priyadharshini, back to top"><span className="brand-mark" aria-hidden="true"><img src="/icon.png" alt="" /></span><span className="brand-name">Priyadharshini<span className="brand-dot">.</span></span></a><span className="footer-motto">Made with curiosity <span>✦</span> and a little hope.</span><a className="back-top mono" href="#top">BACK TO THE TOP ↑</a></div>
        <div className="section-wrap footer-bottom"><span>© 2026 G. Priyadharshini</span><span>B.TECH ECE <i>·</i> SR UNIVERSITY <i>·</i> CLASS OF 2029</span><span>INDIA <i>·</i> EARTH</span></div>
      </footer>
    </>
  );
}
