export function OrbitIllustration() {
  return (
    <svg className="orbit-art" viewBox="0 0 620 620" role="img" aria-labelledby="orbit-title orbit-desc" xmlns="http://www.w3.org/2000/svg">
      <title id="orbit-title">A satellite in orbit around an imagined planet</title>
      <desc id="orbit-desc">A hand-drawn space scene with a small satellite, orbit paths, stars, and fine circuit traces.</desc>
      <defs>
        <radialGradient id="planet-fill" cx="35%" cy="27%"><stop stopColor="#dfaa83"/><stop offset="1" stopColor="#bd795d"/></radialGradient>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#263550" opacity=".18"/></pattern>
      </defs>
      <circle cx="310" cy="306" r="281" fill="url(#dots)"/>
      <circle cx="310" cy="306" r="250" fill="none" stroke="#c7c8bc" strokeWidth="1" strokeDasharray="2 8"/>
      <circle className="orbit-satellite-track" cx="310" cy="306" r="186" fill="none" stroke="#9da89d" strokeWidth="1" strokeDasharray="2 9" opacity=".58"/>
      <g className="orbit-axis-turn orbit-axis-turn-one">
        <ellipse cx="310" cy="306" rx="236" ry="112" fill="none" stroke="#9da89d" strokeWidth="1.5" transform="rotate(-32 310 306)"/>
      </g>
      <g className="orbit-axis-turn orbit-axis-turn-two">
        <ellipse cx="310" cy="306" rx="181" ry="83" fill="none" stroke="#d4a084" strokeWidth="1.5" transform="rotate(47 310 306)"/>
      </g>
      <path d="M45 450h82l25-25h37" fill="none" stroke="#8d9a8b" strokeWidth="1.5"/>
      <path d="M72 465h61l21-21h49" fill="none" stroke="#8d9a8b" strokeWidth="1.5"/>
      <circle cx="209" cy="425" r="3" fill="#c78365"/><circle cx="203" cy="444" r="3" fill="#c78365"/>
      <g className="orbit-planet">
        <circle cx="309" cy="306" r="83" fill="url(#planet-fill)"/>
        <path d="M234 323c34-15 73-20 128-12M248 354c38-16 74-18 113-12M263 274c24-8 51-10 83-8" fill="none" stroke="#ebc5a7" strokeWidth="2" opacity=".45" strokeLinecap="round"/>
        <path d="M237 292c-8 13-12 28-11 43m144-81c17 15 26 35 28 56" fill="none" stroke="#844e43" strokeWidth="1.6" opacity=".34"/>
      </g>
      <g className="orbit-satellite-revolution">
      <g className="orbit-satellite-drift" transform="translate(429 163)">
      <g transform="rotate(23)">
        <path d="M0-32 10-7 8 15 0 28-8 15-10-7 0-32Z" fill="#f4efe3" stroke="#25334a" strokeWidth="2" strokeLinejoin="round"/>
        <circle cy="-5" r="4" fill="#d18e6f" stroke="#25334a" strokeWidth="1.5"/>
        <path d="M-11-1h-42v28h40m47-28h42v28H13" fill="#a9bdd0" stroke="#25334a" strokeWidth="2"/>
        <path d="M-52 5h40M-52 13h40M-52 21h40m24-16h40m-40 8h40m-40 8h40" stroke="#56637a" strokeWidth="1"/>
        <path d="M0 28v11m-10-50v-9m20 9v-9" stroke="#25334a" strokeWidth="2" strokeLinecap="round"/>
      </g>
      </g>
      </g>
      <circle className="orbit-star orbit-star-one" cx="469" cy="218" r="5" fill="#9eae8c"/><circle className="orbit-star orbit-star-two" cx="156" cy="226" r="4" fill="#d18e6f"/>
      <path className="orbit-star orbit-star-three" d="m173 148 5 11 11 5-11 5-5 11-5-11-11-5 11-5 5-11Zm339 200 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="#d18e6f"/>
      <path className="orbit-star orbit-star-four" d="m105 303 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="#8b9b84"/>
      <text x="430" y="445" fill="#4c5a6c" fontFamily="monospace" fontSize="10" letterSpacing="2">SIGNAL / 001</text>
      <text x="430" y="461" fill="#9a776a" fontFamily="monospace" fontSize="8" letterSpacing="1.5">A DREAM IN ORBIT</text>
    </svg>
  );
}
