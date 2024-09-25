import React, { Suspense, useState } from "react";
import { myProject } from "../constant";
import { arrowUp, leftArrow, rightArrow } from "../images";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader, RetroComputer } from "../components/index";
import { Center, OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const projectCount = myProject.length; //3

const Projects = () => {
  const [selectArrow, setSelectArrow] = useState(0);

  const currentProject = myProject[selectArrow];

  const handleNavigation = (direction) => {
    setSelectArrow((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  useGSAP(() => {
    gsap.fromTo(
      ".animatedText",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      }
    );
  }, [selectArrow]);
  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">My Work</p>
      <div
        className="grid lg:grid-cols-2 grid-cols-1 mt-12
        gap-5 w-full"
      >
        <div
          className="flex flex-col gap-5 relative
            sm:p-10 py-10 px-4 shadow-2xl shadow-black-200"
        >
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-contain rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl
                w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              className="w-10 h-10 shadow-sm"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText text-sm">{currentProject.subDesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gaap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag) => (
                <div key={tag.id} className="tech-logo">
                  <img src={tag.path} alt="" />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              target="_blank"
              className="flex items-center gap-2 cursor-pointer text-white-600"
            >
              <p>Check Live Site</p>
              <img src={arrowUp} className="w-3 h-3" alt="arrowUp" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src={leftArrow} alt="" className="w-4 h-4" />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img src={rightArrow} alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className="border border-black-300 bg-black-200
        rounded-lg h-96 md:h-full"
        >
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={1.7}
                  position={[0, -2, 0]}
                  rotation={[0, -0.1, 0]}
                >
                  <RetroComputer texture={currentProject.textures} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
