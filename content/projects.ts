export type Project = {
  number: string;
  title: string;
  status: "Completed" | "In progress";
  description: string;
  tags: string[];
  art: "blind-stick" | "python" | "amplifier" | "oscillator";
  media?: "smartBlindStick" | "rcAmplifier" | "hartleyOscillator";
  detail: {
    summary: string;
    build: string[];
    learning: string[];
    nextStep: string;
  };
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Smart blind stick",
    status: "Completed",
    description: "An assistive technology project designed to help visually impaired people navigate their surroundings more safely and independently.",
    tags: ["Assistive technology", "Sensor integration", "Practical electronics"],
    art: "blind-stick",
    media: "smartBlindStick",
    detail: {
      summary: "A student assistive-technology prototype that explores how electronic sensing can support safer, more independent mobility. The project photo shows an Arduino Uno and ultrasonic sensors mounted on a walking stick.",
      build: ["Arduino Uno controller", "Ultrasonic distance sensors", "Walking-stick prototype"],
      learning: ["How a sensor estimates distance from an echoed sound pulse", "Connecting a physical sensor to a microcontroller", "Designing technology around a real accessibility need"],
      nextStep: "A useful next iteration is to evaluate the alert method and test obstacle detection at different heights and distances with guidance from intended users.",
    },
  },
  {
    number: "02",
    title: "Python-based website development",
    status: "In progress",
    description: "Building websites with Python as the backend while learning how server-side code brings real web experiences to life.",
    tags: ["Python", "Backend development", "Web applications"],
    art: "python",
    detail: {
      summary: "A learning project focused on the connection between a website and its server. Python handles the server-side logic while the browser presents the experience to the visitor.",
      build: ["Python for backend logic", "A browser-based interface", "The request-and-response flow between them"],
      learning: ["How a browser request reaches server-side code", "How backend logic shapes the response", "How interface and server responsibilities fit together"],
      nextStep: "Keep building the site and document the finished features with a real screenshot and a short explanation of the Python code behind them.",
    },
  },
  {
    number: "03",
    title: "RC coupled amplifier",
    status: "Completed",
    description: "An academic circuit design project exploring amplifier fundamentals, electronic components, and the behavior of coupled stages.",
    tags: ["Circuit design", "Amplifier fundamentals", "Circuit analysis"],
    art: "amplifier",
    media: "rcAmplifier",
    detail: {
      summary: "A common-emitter amplifier study using a BC547 transistor. The schematic traces how the bias network, coupling capacitors, and emitter branch work together to amplify an AC input.",
      build: ["BC547 transistor in a common-emitter arrangement", "R1 and R2 base-bias network", "Input and output coupling capacitors C1 and C2", "Emitter resistor Re with bypass capacitor Ce"],
      learning: ["How a resistor divider establishes the transistor bias", "How coupling capacitors pass AC while separating DC bias", "How emitter resistance and its bypass capacitor affect the stage"],
      nextStep: "A useful extension is to compare the expected voltage gain with a measured or simulated result and note how component values affect the response.",
    },
  },
  {
    number: "04",
    title: "Hartley oscillator",
    status: "In progress",
    description: "Studying oscillator design through the Hartley circuit, with a focus on signal generation and practical circuit analysis.",
    tags: ["Oscillator design", "Signal generation", "Learning in progress"],
    art: "oscillator",
    media: "hartleyOscillator",
    detail: {
      summary: "An in-progress study of a transistor Hartley oscillator. Its split inductor and capacitor form an LC tank, while feedback sustains a repeating electrical signal.",
      build: ["Q1 transistor stage", "L1 and L2 split-inductor feedback network", "C1 tank capacitor", "Bias and coupling components shown in the schematic"],
      learning: ["How an LC network sets an oscillator's resonant frequency", "How feedback helps maintain a repeating waveform", "How transistor bias supports the oscillator stage"],
      nextStep: "Check the oscillation conditions in a simulation or assembled circuit, then compare the observed frequency with the value estimated from the tank components.",
    },
  },
];
