"use client";

import { useEffect, useRef, useState } from "react";
import { Effects } from "@animate-ui/react/primitives/effects/effect";

export type CertificateFile = {
  title: string;
  detail: string;
  src: string;
  kind: "pdf" | "image";
  previewPages?: string[];
};

export function CertificateGallery({ files, variant = "default" }: { files: CertificateFile[]; variant?: "default" | "semester" }) {
  const [active, setActive] = useState<CertificateFile | null>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    dialogRef.current?.querySelector<HTMLButtonElement>(".preview-close")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("dialog-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("dialog-open");
      triggerRef.current?.focus();
    };
  }, [active]);

  if (files.length === 0) return null;

  return (
    <>
      <div className={`certificate-gallery${variant === "semester" ? " semester-certificate-gallery" : ""}`} aria-label="Certificates">
        <Effects asChild fade slide={{ direction: "up", offset: 14 }} inView inViewMargin="-30px" holdDelay={45} transition={{ type: "spring", stiffness: 180, damping: 26 }}>
          {files.map((file) => (
            <button className="certificate-link" key={file.src} type="button" onClick={(event) => { triggerRef.current = event.currentTarget; setImageFailed(false); setActive(file); }}>
            <span className="certificate-thumb" aria-hidden="true">{variant === "semester" && file.kind === "image" ? <img src={file.src} alt="" loading="lazy" /> : <>{file.kind === "pdf" ? "PDF" : "IMG"}<span>→</span></>}</span>
            <span className="certificate-link-copy"><strong>{file.title}</strong><small>{file.detail}</small></span>
            <span className="certificate-open" aria-hidden="true">→</span>
          </button>
          ))}
        </Effects>
      </div>
      {active && (
      <div className="preview-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
          <section ref={dialogRef} className="preview-dialog" role="dialog" aria-modal="true" aria-label={`${active.title} preview`}>
            <div className="preview-dialog-head"><div><span className="mono micro-label">CERTIFICATE PREVIEW</span><h2>{active.title}</h2><p>{active.detail}</p></div><button className="preview-close" type="button" onClick={() => setActive(null)} aria-label="Close preview">×</button></div>
          <div className="preview-content">
            {active.kind === "pdf" ? (
              active.previewPages?.length ? (
                <div className="pdf-page-previews" aria-label={`${active.title} PDF pages`}>
                  {active.previewPages.map((src, index) => <img key={src} src={src} alt={`${active.title}, page ${index + 1}`} />)}
                </div>
              ) : <div className="image-preview-error" role="status"><strong>Preview unavailable.</strong><span>Run the build to generate the PDF page previews.</span></div>
            ) : imageFailed ? (
              <div className="image-preview-error" role="status"><strong>Image preview unavailable.</strong><span>Open the original image to view this certificate.</span></div>
            ) : (
              <img src={active.src} alt={`${active.title} certificate`} onError={() => setImageFailed(true)} />
            )}
          </div>
            <div className="preview-dialog-foot"><span>Previewing {active.kind.toUpperCase()}</span><a href={active.src} target="_blank" rel="noreferrer">Open original file →</a></div>
          </section>
        </div>
      )}
    </>
  );
}
