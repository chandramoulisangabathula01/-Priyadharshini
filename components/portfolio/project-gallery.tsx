"use client";

import Image from "next/image";
import { Dialog as ProjectDialog } from "@animate-ui/react/primitives/radix-ui";
import { Effect } from "@animate-ui/react/primitives/effects/effect";
import projectMedia from "@/content/project-media.json";
import type { Project } from "@/content/projects";

function ProjectArtwork() {
  return <svg viewBox="0 0 480 250" aria-hidden="true"><rect x="115" y="45" width="250" height="160" rx="10" fill="#fbf8f0" stroke="#273653" strokeWidth="2"/><path d="M115 72h250" stroke="#d4d0c4" strokeWidth="2"/><circle cx="133" cy="59" r="4" fill="#cc8165"/><circle cx="148" cy="59" r="4" fill="#b6c89d"/><circle cx="163" cy="59" r="4" fill="#8ba7c0"/><rect x="132" y="90" width="88" height="91" rx="3" fill="#e6e8dd"/><path d="M147 108h55m-55 11h42m-42 11h50m-50 11h37" stroke="#697984" strokeWidth="3" strokeLinecap="round"/><rect x="235" y="92" width="108" height="12" rx="6" fill="#293954"/><path d="M235 120h85m-85 11h99m-99 11h75" stroke="#b3b6a7" strokeWidth="4" strokeLinecap="round"/><rect x="235" y="157" width="68" height="21" rx="10" fill="#d89a6f"/><text x="251" y="171" fill="#fff" fontSize="9" fontFamily="monospace">RUN &lt; /&gt;</text><text x="30" y="35" fill="#d89a6f" fontSize="10" fontFamily="monospace" letterSpacing="2">MADE WITH CURIOSITY</text></svg>;
}

function ProjectImage({ project }: { project: Project }) {
  if (!project.media) return <ProjectArtwork />;
  const image = projectMedia[project.media];
  return <Image className="project-evidence-image" src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 560px" />;
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <ProjectDialog.Portal>
      <ProjectDialog.Overlay className="project-dialog-overlay" />
      <ProjectDialog.Content className="project-dialog-content" from="bottom" aria-describedby={`project-${project.number}-description`}>
        <div className="project-dialog-topline">
          <span className="mono">PROJECT FILE / {project.number}</span>
          <ProjectDialog.Close className="project-dialog-close" aria-label="Close project details">×</ProjectDialog.Close>
        </div>
        <div className="project-dialog-heading">
          <div>
            <span className={`project-status${project.status === "Completed" ? " status-done" : " status-progress"}`}><i />{project.status}</span>
            <ProjectDialog.Title className="project-dialog-title">{project.title}</ProjectDialog.Title>
          </div>
          <span className="mono project-dialog-category">ECE / LEARNING</span>
        </div>
        <ProjectDialog.Description id={`project-${project.number}-description`} className="project-dialog-summary">{project.detail.summary}</ProjectDialog.Description>
        <div className="project-dialog-layout">
          <div className="project-dialog-visual">
            <ProjectImage project={project} />
            <span className="mono">VISUAL NOTE / {project.number}</span>
          </div>
          <div className="project-dialog-sections">
            <section>
              <span className="mono project-dialog-label">01 / BUILD NOTES</span>
              <ul>{project.detail.build.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section>
              <span className="mono project-dialog-label">02 / WHAT IT TEACHES</span>
              <ul>{project.detail.learning.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>
        </div>
        <section className="project-next-step">
          <span className="mono project-dialog-label">THE NEXT QUESTION</span>
          <p>{project.detail.nextStep}</p>
        </section>
        <div className="project-dialog-footer"><span>G. PRIYADHARSHINI <i>·</i> B.TECH ECE</span><ProjectDialog.Close className="project-dialog-done">Back to projects <span aria-hidden="true">↗</span></ProjectDialog.Close></div>
      </ProjectDialog.Content>
    </ProjectDialog.Portal>
  );
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectDialog.Root key={project.number}>
          <Effect asChild fade slide={{ direction: "up", offset: 16 }} inView inViewMargin="-40px" delay={index % 2 * 75} transition={{ type: "spring", stiffness: 170, damping: 25 }}>
          <article className={`project-card project-card-${project.art}`}>
            <ProjectDialog.Trigger asChild>
              <button className="project-card-trigger" type="button" aria-label={`Open details for ${project.title}`}>
                <span className="sr-only">Open details for {project.title}</span>
              </button>
            </ProjectDialog.Trigger>
            <div className={`project-art project-art-${project.art}${project.media ? " project-art-with-image" : ""}`}>
              <ProjectImage project={project} />
              <span className="project-number mono">{project.number} / 04</span>
            </div>
            <div className="project-card-body">
              <div className="project-meta"><span className={`project-status${project.status === "Completed" ? " status-done" : " status-progress"}`}><i />{project.status}</span><span className="mono project-type">ECE / LEARNING</span></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <span className="project-open-cue" aria-hidden="true">Open project notes <span>↗</span></span>
            </div>
            <ProjectDetail project={project} />
          </article>
          </Effect>
        </ProjectDialog.Root>
      ))}
    </div>
  );
}
