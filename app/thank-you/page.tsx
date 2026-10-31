import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="thank-you-page">
      <span className="thank-you-star" aria-hidden="true">✦</span>
      <span className="mono micro-label">MESSAGE RECEIVED</span>
      <h1>Thank you<br /><em>for the note.</em></h1>
      <p>Your message is on its way. I&apos;ll get back to you as soon as I can.</p>
      <Link className="button button-dark" href="/">Back to the portfolio <span aria-hidden="true">→</span></Link>
    </main>
  );
}
