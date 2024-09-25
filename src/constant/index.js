export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProject = [
  {
    title: "Apple-Website",
    desc: "Apple's website is a minimalist masterpiece, reflecting the brand's signature aesthetic.",
    subDesc:
      "This website is designed to be clean, intuitive, and focused on showcasing their products. The homepage features large, high-quality images of their latest devices, accompanied by concise descriptions and clear calls to action. The navigation is simple and straightforward, guiding users to specific product categories or information pages. Overall, Apple's website is a testament to effective web design, prioritizing user experience and brand consistency.",
    href: "https://apple-website-five-smoky.vercel.app/",
    logo: "https://i.pinimg.com/564x/b1/f1/70/b1f170bfba5817dd84429e5b5ebbcc85.jpg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    textures: "/videos/apple.mp4",
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwind-logo.png",
      },
      {
        id: 3,
        name: "Three js",
        path: "/assets/threejs.png",
      },
      {
        id: 4,
        name: "GSAP",
        path: "/assets/gsap.png",
      },
      {
        id: 5,
        name: "R3F",
        path: "/assets/r3f.png",
      },
    ],
  },
  {
    title: "Text-Animation",
    desc: " A captivating React-based application featuring a dynamic 3D camping scene and an animated text element that mirrors the scene's content",
    subDesc:
      "This interactive web application provides a captivating 3D camping scene on the right side of the screen. On the left, an animated text description complements the visual experience, reflecting the essence of the camping environment. A dynamic Enter button invites users to step into the scene, exploring the surroundings in a fully immersive 3D experience.",
    href: "https://text-animation-omega.vercel.app/",
    logo: "/assets/text-logo.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    textures: "/videos/camping.mp4",
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCss",
        path: "/assets/tailwind-logo.png",
      },
      {
        id: 3,
        name: "R3F",
        path: "/assets/r3f.png",
      },
    ],
  },
  {
    title: "Shoes-Animation",
    desc: "A dynamic React-based application allowing users to customize a 3D shoe's color palette, including the laces, sole, main body, and interior",
    subDesc:
      "Employed React, React Three Fiber, and Tailwind Css to create an immersive 3D shoe customization experience. Implemented intuitive color selection tools and real-time updates to visually showcase the chosen color combinations.",
    href: "https://shoes-animation.vercel.app/",
    logo: "/assets/shoes-logo.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    textures: "/videos/shoe.mp4",
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCss",
        path: "/assets/tailwind-logo.png",
      },
      {
        id: 3,
        name: "R3F",
        path: "/assets/r3f.png",
      },
    ],
  },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.02 : isMobile ? 0.02 : 0.02,
    deskPosition: isMobile ? [0.2, -1, 0] : [0.25, -1.6, 0],
    cubePosition: isSmall
      ? [2, -2, 0]
      : isMobile
        ? [3, -2, 0]
        : isTablet
          ? [2, -2.3, 0]
          : [4, -2.1, 0],
    reactLogoPosition: isSmall
      ? [2, 2, 0]
      : isMobile
        ? [2.3, 2, 0]
        : isTablet
          ? [2, 2.1, 0]
          : [4.5, 2, 0],
    ringPosition: isSmall
      ? [-8, 12, 0]
      : isMobile
        ? [-12, 11, 0]
        : isTablet
          ? [-11, 11, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -8, -10]
      : isMobile
        ? [-8, -6, -10]
        : isTablet
          ? [-7, -7, -10]
          : [-13, -9, -10],
  };
};
