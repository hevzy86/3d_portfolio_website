const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];
const words = [
  { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-1.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-2.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-3.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-4.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-5.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-6.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-7.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-8.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-9.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-10.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-11.png`,
  },
];

const abilities = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/seo.png`,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/chat.png`,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/time.png`,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/react.png`,
  },
  {
    name: "Python Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/python.svg`,
  },
  {
    name: "Backend Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/node.png`,
  },
  {
    name: "Interactive Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/three.png`,
  },
  {
    name: "Project Manager",
    imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: `${import.meta.env.BASE_URL}models/react_logo-transformed.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: `${import.meta.env.BASE_URL}models/python-transformed.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: `${import.meta.env.BASE_URL}models/node-transformed.glb`,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    
  },
  {
    name: "Interactive Developer",
    modelPath: `${import.meta.env.BASE_URL}models/three.js-transformed.glb`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: `${import.meta.env.BASE_URL}models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Vladimir brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: `${import.meta.env.BASE_URL}images/exp1.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Vladimir’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: `${import.meta.env.BASE_URL}images/exp2.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Vladimir’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: `${import.meta.env.BASE_URL}images/exp3.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo3.png`,
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: `${import.meta.env.BASE_URL}images/logo1.png`,
  },
  {
    name: "logo2",
    imgPath: `${import.meta.env.BASE_URL}images/logo2.png`,
  },
  {
    name: "logo3",
    imgPath: `${import.meta.env.BASE_URL}images/logo3.png`,
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Vladimir. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Vladimir was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Vladimir was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vladimir's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vladimir is the ideal partner.",
    imgPath: "client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Vladimir was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Vladimir’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Vladimir was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: `${import.meta.env.BASE_URL}images/insta.png`,
  },
  {
    name: "fb",
    imgPath: `${import.meta.env.BASE_URL}images/fb.png`,
  },
  {
    name: "x",
    imgPath: `${import.meta.env.BASE_URL}images/x.png`,
  },
  {
    name: "linkedin",
    imgPath: `${import.meta.env.BASE_URL}images/linkedin.png`,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
