import "./App.css";
import { YssaImg, CoverImg, Paucs, Logo, JeromeLogo1, JeromeLogo2, JeromeBanner, Menu, Poster, Cv  } from "./assets";
import { TypeAnimation } from "react-type-animation";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaCircleNodes } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCanva } from "react-icons/si";
// import { myprojectsData , myserviceOffer , mytechStack } from "./data";
function App() {

  const date = new Date()

  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  const tabs = [
    { icon: <AiOutlineAppstoreAdd className="w-7 h-7" />, name: 'Appstore' },
    { icon: <FaCircleNodes className="w-7 h-7" />, name: 'Nodes' },
    { icon: <MdMiscellaneousServices className="w-7 h-7" />, name: 'Services' },
  ];

//   const projectElement =
//   const serviceofferElement =
//   const techstackElement =
  return (
    <div className=" h-full bg-primary-black text-white ">
      <main className=" grid grid-cols-1 gap-6 ">
        <section>
          <div
            style={{
              backgroundImage: `url(${CoverImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className=" h-[12.188rem]   p-5 w-full relative"
          >
            {/* <div className=" w-40 h-40 absolute -bottom-16 left-[6.25rem] border-[0.313rem] rounded-full border-primary-black  ">
              <img
                className=" w-full h-full object-cover rounded-full "
                src={YssaImg}
                alt=""
              />
            </div> */}
          </div>
          <div className=" w-[85%] m-auto mt-20 flex flex-col gap-1">
            <h2 className="text-2xl">Hi! I’m</h2>
            <h1 className="text-3xl font-bold">ALYSSA JOY FLORES</h1>
            <div className=" rounded-[0.325rem] bg-light-gray-opacity w-fit p-2 ">
              <TypeAnimation
                sequence={[
                  "Graphic Designer",
                  1500,
                  "Web Developer",
                  2500,
                  "Web Designer",
                  3500,
                  "Illustrator",
                  4500,
                ]}
                wrapper="p"
                speed={50}
                className="text-light-violet text-[1rem] font-medium"
                repeat={Infinity}
              />
            </div>
          </div>
        </section>
        <section className=" grid grid-rows-2 grid-cols-3 gap-4 w-[85%] m-auto">
          <div className="p-5 border-[0.1px] rounded-[0.325rem] col-span-2 row-span-2 flex flex-col gap-4 items-center justify-center ">
            <div className=" w-full flex flex-row justify-between">
              <div className=" w-60 h-60 bg-white rounded-xl">
                <img
                  className=" w-full h-full object-cover rounded-sm"
                  src={YssaImg}
                  alt=""
                />
              </div>
              <a href={Cv} target="_blank" rel="noopener noreferrer">
                <button className="self-start rounded-full border-[0.1px] border-white text-light-violet font-medium p-2 w-28">
                  Resume
                </button>
              </a>
            </div>
            <div>
              <h1 className="font-bold">About Me</h1>
              <p className="mt-2 text-[0.88rem] text-pretty">
              I am Alyssa Joy Flores, an artist with a deep passion for both traditional and digital art. I enjoy working with different mediums, and my love for creativity drives everything I do. Alongside my artistic skills, I have knowledge in web design and backend development from my course. This mix of art and technology helps me approach projects with both creativity and technical understanding, especially in digital design.
              </p>
            </div>
          </div>
          <div className="p-5 border-[0.1px] rounded-[0.325rem]">
            <h1 className="font-bold border-b-[0.1px] border-white pb-2">Reach Me Out</h1>
            <ul className="mt-3 flex flex-col gap-3 font-medium text-[0.9rem]">
              <li className="flex flex-row gap-3 items-center">
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <FaPhoneAlt className=" text-light-violet w-4 h-4" />
                </div>
                <p>+639063270389</p>
              </li>
              <li className="flex flex-row gap-3 items-center">
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <MdEmail className=" text-light-violet w-4 h-4" />
                </div>
                <p>alyssajoygflores@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="p-5 border-[0.1px] rounded-[0.325rem]  col-start-3">
            <h1 className="font-bold border-b-[0.1px] border-white pb-2">Hobbies</h1>
            <ul className="mt-3 flex flex-row flex-wrap   gap-5 font-medium text-[0.8rem]">
              <li className="flex flex-row gap-3 items-center">
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <MdDesignServices className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Editing</p>
              </li>
              <li className="flex flex-row gap-3 items-center">
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <MdOutlineWeb className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Web Design</p>
              </li>
              <li className="flex flex-row gap-3 items-center">
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <FaGamepad className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Gaming</p>
              </li>
              <li className="flex flex-row gap-3 items-center">
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <AiFillPicture className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Illustrating</p>
              </li>
              <li className="flex flex-row gap-3 items-center">
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <MdOutlineWeb className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Backend Dev</p>
              </li>
            </ul>
          </div>
          <div className=" w-full col-span-3 border-[0.1px] border-white p-5 rounded-[0.325rem]">
            <h1 className="font-bold  border-white ">
              Social Media
            </h1>
            <ul className="mt-3 flex flex-row  w-full   gap-10 font-medium text-[0.8rem]">
              <li className="flex flex-row gap-3 items-center">
              <a 
                href="https://www.facebook.com/profile.php?id=61561774851705" 
                target="_blank" 
                className="flex flex-row gap-3 items-center"
              >
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <FaFacebookSquare className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Facebook</p>
              </a>
              </li>
              <li className="flex flex-row gap-3 items-center">
              <a 
                href="https://www.upwork.com/freelancers/~01f3db4999d78db810?mp_source=share" 
                target="_blank" 
                className="flex flex-row gap-3 items-center"
              >
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <FaSquareUpwork className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Upwork</p>
              </a>
              </li>
              <li className="flex flex-row gap-3 items-center">
              <a 
                href="https://www.linkedin.com/in/alyssa-joy-flores-9a1999315/" 
                target="_blank" 
                className="flex flex-row gap-3 items-center"
              >
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <FaLinkedin className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Linkedin</p>
              </a>
              </li>
              <li className="flex flex-row gap-3 items-center">
              <a 
                href="https://www.youtube.com/@AlyssaJoyFlores" 
                target="_blank" 
                className="flex flex-row gap-3 items-center"
              >
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <FaYoutubeSquare className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Youtube</p>
              </a>
              </li>
              <li className="flex flex-row gap-3 items-center">
              <a 
                href="https://www.instagram.com/arsfinesse?igsh=cWxrc3p1OXllcmpl" 
                target="_blank" 
                className="flex flex-row gap-3 items-center"
              >
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <FaInstagramSquare className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Instagram</p>
              </a>
              </li>
              <li className="flex flex-row gap-3 items-center">
              <a 
                href="https://x.com/ArsFinesse?t=xYnqf3a67Z7UN37uVpsUoQ&s=09" 
                target="_blank" 
                className="flex flex-row gap-3 items-center"
              >
                <div className=" bg-light-gray-opacity p-2 rounded-xl">
                  <FaTwitterSquare className=" text-light-violet w-4 h-4" />
                </div>
                <p className=" font-semibold">Twitter</p>
              </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="w-[85%] m-auto  mt-5  h-full  ">
          <ul className="flex flex-row justify-around text-light-violet border-b-[0.1px] pb-3 border-light-gray-opacity ">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer ${activeTab === index ? 'text-blue-500' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.icon}
                <span className="sr-only">{tab.name}</span>
              </li>
            ))}
          </ul>
          <h1 className="font-bold text-2xl  border-white mt-5">
            {activeTab === 0 ? ' My Projects' : activeTab === 1 ? 'My Tech Stack' : 'Other Projects'}
          </h1>
          {/* Hard Core Projects */}
          <section className=" flex flex-row gap-10 mt-5">
            {activeTab === 0 ? (
              <div className="mt-5 flex flex-col gap-5 w-[20.813rem] h-full">
                <div className="text-center rounded-sm">
                  <img className="w-full h-full object-cover rounded-md" src={Paucs} alt="Project Preview" />
                </div>
                <ul className="flex flex-row gap-5 w-full flex-wrap h-fit">
                  <li className="bg-light-gray-opacity border-light-violet border-[0.1px] p-2 font-semibold rounded-sm h-fit text-sm">React JS</li>
                  <li className="bg-light-gray-opacity border-light-violet border-[0.1px] p-2 font-semibold rounded-sm h-fit text-sm">Tailwind</li>
                  <li className="bg-light-gray-opacity border-light-violet border-[0.1px] p-2 font-semibold rounded-sm h-fit text-sm">Node JS</li>
                  <li className="bg-light-gray-opacity border-light-violet border-[0.1px] p-2 font-semibold rounded-sm h-fit text-sm">Express JS</li>
                </ul>
                <div className="flex flex-row gap-7">
                  <div>
                    <h2 className="font-bold text-lg">PHINMA AU Central Store</h2>
                    <p className="mt-2 text-gray-500 text-sm max-w-[40ch]">
                    A capstone project designed to assist both the school organization and students in improving the management and ordering of school items
                    </p>
                  </div>
                  <div className="self-center">
                    <ul className="flex flex-col gap-2 cursor-pointer">
                      <li>
                      <a 
                        href="https://github.com/yssaflrs/paucs-v1.0-website.git" 
                        target="_blank" 
                      >
                        <FaGithub className="w-7 h-7 text-gray-200" />
                      </a>
                      </li>
                      <li>
                      <a 
                        href="https://paucs.store/" 
                        target="_blank" 
                      >
                        <CgWebsite className="w-7 h-7 text-gray-200" />
                      </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              
            ) : activeTab === 1 ? (
              <ul className="mt-5 flex flex-row flex-wrap gap-16" >

                  <li className=" w-24 h-24 border-2 bg-white flex items-center justify-center rounded-sm">
                    <FaNodeJs className=" w-16 h-16 text-green-400"/>
                  </li>
                  <li className=" w-24 h-24 border-2 bg-white flex items-center justify-center rounded-sm">
                    <FaCss3Alt className=" w-16 h-16 text-blue-400"/>
                  </li>
                  <li className=" w-24 h-24 border-2 bg-white flex items-center justify-center rounded-sm">
                    <FaHtml5 className=" w-16 h-16 text-orange-400"/>
                  </li>
                  <li className=" w-24 h-24 border-2 bg-white flex items-center justify-center rounded-sm">
                    <FaJs className=" w-16 h-16 text-yellow-400"/>
                  </li>
                  <li className=" w-24 h-24 border-2 bg-white flex items-center justify-center rounded-sm">
                    <SiExpress className=" w-16 h-16 text-yellow-400"/>
                  </li>
                  <li className=" w-24 h-24 border-2 bg-white flex items-center justify-center rounded-sm">
                    <FaFigma className=" w-16 h-16 text-black"/>
                  </li>
                  <li className=" w-24 h-24 border-2 bg-white flex items-center justify-center rounded-sm">
                    <SiAdobephotoshop className=" w-16 h-16 text-blue-950"/>
                  </li>
                  <li className=" w-24 h-24 border-2 bg-white flex items-center justify-center rounded-sm">
                    <SiCanva className=" w-16 h-16 text-violet-500"/>
                  </li>
                </ul>

            ) : activeTab === 2 ? (
              <ul className="mt-5 grid grid-cols-3 w-full gap-5">

                  <li className=" rounded-md h-72 relative border border-white flex items-center justify-center">
                    <img className="h-full " src={Logo} alt=""  />
                    <h3 className="absolute bottom-0 left-0  p-2 font-semibold bg-white text-light-violet">ArsFinnesse Logo</h3>
                  </li>


                  <li className=" rounded-md h-72 relative border border-white flex items-center justify-center">
                    <img className="h-full" src={JeromeLogo1} alt="" />
                    <h3 className="absolute bottom-0 left-0  p-2 font-semibold bg-white text-light-violet">JuvoGenesis Logo v1</h3>
                  </li>

                  <li className=" rounded-md h-72 relative border border-white flex items-center justify-center">
                    <img className="h-full" src={JeromeLogo2} alt="" />
                    <h3 className="absolute bottom-0 left-0  p-2 font-semibold bg-white text-light-violet">JuvoGenesis Logo v2</h3>
                  </li>

                  <li className=" rounded-md h-72 relative border border-white">
                    <img className="h-full object-cover" src={JeromeBanner} alt="" />
                    <h3 className="absolute bottom-0 left-0  p-2 font-semibold bg-white text-light-violet">JuvoGenesis Banner</h3>
                  </li>

                  
                  <li className=" rounded-md h-72 relative border border-white flex items-center justify-center">
                    <img className="h-full w-full" src={Menu} alt="" />
                    <h3 className="absolute bottom-0 left-0  p-2 font-semibold bg-white text-light-violet">Fili-Ko Menu</h3>
                  </li>

                  <li className=" rounded-md h-72 relative border border-white flex items-center justify-center">
                    <img className="h-full w-full" src={Poster} alt="" />
                    <h3 className="absolute bottom-0 left-0  p-2 font-semibold bg-white text-light-violet">CITE Poster Competition</h3>
                  </li>
              </ul>
            ) : null}
          </section>
        </section>
      </main>
      <footer className="text-white text-center font-medium mt-20">
        <p>{`© Alyssa Joy Flores | All Rights Reserved  ${date.getFullYear()}`}</p>
      </footer>
    </div>
  );
}

export default App;
