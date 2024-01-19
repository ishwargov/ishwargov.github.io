import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ishwar Govind",
  initials: "IG",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Software Engineer",
  summary:
    "I'm a software engineer with experience in low latency systems software. Also passionate about applying AI, particularly RL, to solve real-world problems.",
  avatarUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRPYSf4IA0iSkcZFIkAqbJ1evR9cyV3HxI6TEqidLps4rGLyPNs3RXvdQSmL4xKdKaiKAVqdRY_vgO740xVzhVsm0WZaw=s1600",
  personalWebsiteUrl: "https://github.ishwargov.io",
  contact: {
    email: "ishwar.govind@gmail.com",
    tel: "0",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ishwargov",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ishwargovind/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ishwargovind",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "IIT Palakkad",
      degree: "BTech. (Hons) in Computer Science and Engineering.",
      tags: ["Algorithms","ML","Responsible AI","NLP", "Networks", "OS", "DBMS"],
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Arista Networks",
      link: "https://www.arista.com",
      badges: ["Bangalore"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2023 Jul",
      end: "Present",
      description:
        "Currently working on Arista's EOS, a fully programmable and highly modular, Linux-based network operation system.",
    },
    {
      company: "Arista Networks",
      link: "https://www.arista.com",
      badges: ["Remote"],
      title: "Software Intern",
      logo: ClevertechLogo,
      start: "2022 May",
      end: "2022 Aug",
      description:
        "Designed and Implemented feature for handling Multicast Packets arriving at L2 VLAN in an EVPN scenario.",
    },
    {
      company: "UST",
      link: "https://www.ust.com/",
      badges: ["Remote"],
      title: "AI Research Intern",
      logo: JojoMobileLogo,
      start: "2021 Jun",
      end: "2021 Jul",
      description:
        "Developed a Hybrid DeepLearning Model using MTCNN, FaceNet and InceptionNet for Anti-Spoof Face Recognition. Created a Flask Web App to add, train and predict faces.",
    },
  ],
  skills: [
    "C",
    "C++",
    "Python",
    "PyTorch",
    "TensorFlow",
    "docker",
    "Ray[RLLib]",
    "git",
    "SQL"
  ],
  projects: [
    {
      title: "RL for Optimal Portfolio Management",
      techStack: [
        "RL",
        "PyTorch",
        "Python",
      ],
      description: "Risk-Sensitive Actor-Critic (RAC) and Transformer-based Proximal Policy Optimization (PPO) agents for optimal portfolio management.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Deep Weather Forecasting",
      techStack: [
        "SequenceModels",
        "TensorFlow",
        "Python",
      ],
      description: "Developed a ConvLSTM-based model to improve Indian Summer Monsoon Rainfall (ISMR) forecasting by analyzing spatio-temporal patterns in ISMR dataset and incorporating climatic oscillation variables",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "PlexShare",
      techStack: [
        ".NET",
        "C#",
        "Azure",
      ],
      description: "A lab session monitoring application that allows an instructor and students to interact, collaborate and share content in the form of chat messages and files. It also supports a digital whiteboard and screensharing options.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://www.youtube.com/watch?v=qAjuYhqLNBo",
      },
    },
  ],
} as const;
