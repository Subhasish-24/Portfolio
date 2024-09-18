import React, { useState } from "react";
import { copy, grid1, grid3, grid4, tick } from "../assets/images";
import Globe from "react-globe.gl";
import Button from "../utils/Button";

const About = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleCopyMethod = () => {
    navigator.clipboard.writeText("gunidd243@gmail.com");
    setIsToggle(true);
  };
  return (
    <section className="c-space my-20" id="about">
      <div
        className="grid xl:grid-cols-3 xl:grid-rows-6
         md:grid-cols-2 grid-cols-1 gap-5 h-full"
      >
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src={grid1}
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Subhasish</p>
              <p className="grid-subtext">
                With a strong foundation in frontend development and a focus on
                3D projects, I have honed my skills in React, React Three Fiber,
                and GSAP, creating interactive and visually engaging web
                experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <p className="grid-headtext">Tech Stacks:-</p>
            <img
              src="/src/assets/collage.png"
              className="object-contain w-full  h-fit"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                //  labelsData={[{ lat: 30, lng: -100, text: 'Bhubaneswar, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Bhubaneswar, Odisha.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid3}
              alt="grid3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                First discovering coding through YouTube sparked my interest,
                and from there, I was hooked. Working on projects like 3D
                visualizations, React Three Fiber, and integrating animations
                with GSAP and Three.js excites me the most. I'm passionate about
                exploring the possibilities in 3D development and love building
                immersive web experiences. My focus lies in growing as a 3D or
                React developer, constantly pushing myself to learn more and
                bring creative ideas to life through code.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={grid4}
              alt="grid4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div
                className="flex justify-center items-center gap-2 cursor-pointer"
                onClick={handleCopyMethod}
              >
                <img src={isToggle ? tick : copy} alt="" />
                <p className=" lg:text-2xl md:text-xl text-gray_gradient text-white font-medium">
                  gunidd243@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
