import React from "react";
import logos from "../../public/logo.svg";
import Hero from "../../public/hero.png";
import lap from "../../public/globe.jpg";
import world from "../../public/laptop.jpg";

export default function Header() {
  return (
    <div className="w-full mx-auto bg-white">
      {/* Navbar */}

      <div className="flex flex-row justify-between py-5 bg-gradient-to-r from-[#D53469] to-[#DAAC51]">
        <div className="md:flex flex-row hidden ml-8">
          <img src={logos} alt="logo" className="h-8" />
          <p className="text-2xl font-bold ml-1">Landing</p>
        </div>
        <div className="md:flex flex-row gap-8 mr-8 hidden">
          <a
            href=""
            className="my-3 text-black hover:text-slate-800 transition-all"
          >
            Link1
          </a>
          <a
            href=""
            className="my-3 text-black hover:text-slate-800 transition-all"
          >
            link2
          </a>
          <a
            href=""
            className="my-3 text-black hover:text-slate-800 transition-all"
          >
            Link3
          </a>
          <a
            href=""
            className="font-semibold bg-[#F6E9D4] hover:underline px-6 py-3 rounded-full"
          >
            Action
          </a>
        </div>
        <div className="flex flex-row xs:gap-10 gap-20 backdrop-blur-md border-none px-10 py-3 rounded-full fixed top-[90%] left-1/2 -translate-x-1/2 md:hidden">
          <a
            href=""
            className="my-3 text-black hover:text-slate-800 transition-all"
          >
            Link1
          </a>
          <a
            href=""
            className="my-3 text-black hover:text-slate-800 transition-all"
          >
            link2
          </a>
          <a
            href=""
            className="my-3 text-black hover:text-slate-800 transition-all"
          >
            Link3
          </a>
          <a
            href=""
            className="font-semibold bg-[#F6E9D4] hover:underline px-6 py-3 rounded-full"
          >
            Action
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#D53469] to-[#DAAC51]">
        <div className="justify-center md:justify-start flex-col p-4 text-white ml-8">
          <p className="uppercase text-base my-4 text-center md:text-start">
            What business are you?
          </p>
          <h1 className="text-4xl font-bold my-4 text-center md:text-start">
            Main Hero Message to sell Product!
          </h1>
          <h2 className="text-xl font-semibold my-4 text-center md:text-start">
            Sub Hero Message, Not too long Not too short. Make it just Right.
          </h2>
          <button className="px-6 py-3 rounded-full my-8 hover:underline ml-[50%] -translate-x-[50%] md:ml-14 bg-white text-black font-semibold">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center md:justify-end w-2/3">
          <img src={Hero} alt="hero" className="" />
        </div>
      </div>

      <div className="flex flex-col items-center w-full my-20">
        <h2 className="text-5xl font-extrabold">Title</h2>
        <div className="h-1 w-56 mt-3 bg-gradient-to-r from-[#F4CDD9] to-[#F6EAD4]"></div>
      </div>
      <div className="flex flex-col md:flex-row my-10 w-4/5 mx-auto">
        <div className="w-10/12 md:w-1/2 self-center">
          <h3 className="text-2xl text-center font-bold">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-center capitalize mr-14 ml-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </div>
        <div className="mx-auto w-2/4">
          <img src={lap} alt="laptop" className="w-full rounded-xl mx-auto" />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-4/5 mx-auto ">
        <div className="mx-auto w-2/4 my-10">
          <img src={world} alt="globe" className="w-full rounded-xl mr-[50%]" />
        </div>
        <div className="w-10/12 md:w-1/2  self-center">
          <h3 className="text-2xl text-center mx-auto font-bold">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-center capitalize mr-14 ml-14">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            consequatur neque nisi corporis voluptates porro.
          </p>
        </div>
      </div>

      <hr />

      <div className="flex flex-col items-center w-full my-20">
        <h2 className="text-5xl font-extrabold">Title</h2>
        <div className="h-1 w-56 mt-3 bg-gradient-to-r from-[#F4CDD9] to-[#F6EAD4]"></div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-28 container mx-auto">
        <div className="shadow-xl px-10">
          <p className="text-start mb-16 font-thin pt-3">Getting Started</p>
          <h3 className="text-xl font-bold">Lorem ipsum dolor sit.</h3>
          <p className="mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ex
            tempore sapiente officia in culpa ipsa quae consectetur ab!
          </p>
          <div className="flex items-center justify-start">
            <a
              href=""
              className="mb-10 bg-gradient-to-r from-[#D53469] to-[#DAAC51] text-white font-semibold px-6 py-3 rounded-2xl"
            >
              Action
            </a>
          </div>
        </div>
        <div className="shadow-xl px-10">
          <p className="text-start mb-16 font-thin pt-3">Getting Started</p>
          <h3 className="text-xl font-bold">Lorem ipsum dolor sit.</h3>
          <p className="mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ex
            tempore sapiente officia in culpa ipsa quae consectetur ab!
          </p>
          <div className="flex items-center justify-center">
            <a
              href=""
              className="mb-10 bg-gradient-to-r from-[#D53469] to-[#DAAC51] text-white font-semibold px-6 py-3 rounded-2xl"
            >
              Action
            </a>
          </div>
        </div>
        <div className="shadow-xl px-10">
          <p className="text-start mb-16 font-thin pt-3">Getting Started</p>
          <h3 className="text-xl font-bold">Lorem ipsum dolor sit.</h3>
          <p className="mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ex
            tempore sapiente officia in culpa ipsa quae consectetur ab!
          </p>
          <div className="flex items-center justify-end">
            <a
              href=""
              className="mb-10 bg-gradient-to-r from-[#D53469] to-[#DAAC51] text-white font-semibold px-6 py-3 rounded-2xl"
            >
              Action
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center w-full my-16">
          <h2 className="text-5xl font-extrabold">Pricing</h2>
          <div className="h-1 w-56 mt-3 bg-gradient-to-r from-[#F4CDD9] to-[#F6EAD4]"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="text-center md:w-[20%] border my-auto">
            <div className="text-3xl font-bold p-8 border-b-4">Free</div>
            <li className="list-none border-b py-4">Things</li>
            <li className="list-none border-b py-4">Things</li>
            <li className="list-none border-b py-4">Things</li>
            <div className="flex-none rounded-b rounded-t-none shadow p-6 overflow-hidden mt-auto">
              <div className="pt-6 w-full text-3xl text-gray-600 font-bold">
                £0 <span className="text-base">For one user</span>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href=""
                  className="bg-gradient-to-r from-[#D53469] to-[#DAAC51] mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full px-8 py-4 my-6 shadow-lg"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <div className="text-center md:w-[35%] border">
            <div className="text-3xl font-bold p-8 border-b-4 mb-12">Basic</div>
            <div className="h-1 w-full my-0 py-0 rounded-t bg-gradient-to-r from-[#D53469] to-[#DAAC51] md:relative md:-top-[3.25rem]"></div>
            <li className="list-none border-b py-4">Things</li>
            <li className="list-none border-b py-4">Things</li>
            <li className="list-none border-b py-4">Things</li>
            <div className="flex-none rounded-b rounded-t-none shadow p-6 overflow-hidden mt-auto">
              <div className="pt-6 w-full text-3xl text-gray-600 font-bold">
                £x.99 <span className="text-base">/ per year</span>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href=""
                  className="bg-gradient-to-r from-[#D53469] to-[#DAAC51] mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full px-8 py-4 my-6 shadow-lg"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <div className="text-center md:w-[20%] border my-auto">
            <div className="text-3xl font-bold p-8 border-b-4">Pro</div>
            <li className="list-none border-b py-4">Things</li>
            <li className="list-none border-b py-4">Things</li>
            <li className="list-none border-b py-4">Things</li>
            <div className="flex-none rounded-b rounded-t-none shadow p-6 overflow-hidden mt-auto">
              <div className="pt-6 w-full text-3xl text-gray-600 font-bold">
                £x.99 <span className="text-base">/ per year</span>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href=""
                  className="bg-gradient-to-r from-[#D53469] to-[#DAAC51] mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full px-8 py-4 my-6 shadow-lg"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center bg-gradient-to-r from-[#D53469] to-[#DAAC51] py-20 my-20">
          <h2 className="text-5xl font-extrabold text-white text-center">Call to Action</h2>
          <div className="h-1 w-56 mt-3 bg-gradient-to-r from-[#F4CDD9] mx-auto to-[#F6EAD4]"></div>
        <p className="text-3xl text-white my-10 text-center">
          Main Hero Message to sell product!
        </p>
        <a
            href=""
            className="font-semibold mx-auto bg-white hover:underline px-6 py-3 items-center rounded-full"
          >
            Action!
          </a>
      </div>


      <footer className="w-full mx-auto">
        <div className="flex flex-col md:flex-row md:justify-around justify-start ml-5">
          <div className="flex flex-row mb-5">
          <img src={logos} alt="logo" className="h-8" />
          <p className="text-2xl font-bold ml-1">Landing</p>
        </div>
          
          <div className="flex flex-col my-2">
            <div className="uppercase font-thin mb-2">Links</div>
            <div className="flex flex-row gap-4 md:flex-col">
            <a href="">FAQ</a>
            <a href="">Help</a>
            <a href="">Support</a>
            </div>
          </div>
          <div className="flex flex-col my-2">
            <div className="uppercase font-thin mb-2">Legal</div>
            <div className="flex flex-row gap-4 md:flex-col">
            <a href="">Terrms</a>
            <a href="">Privacy</a>
            </div>
          </div>
          <div className="flex flex-col my-2">
            <div className="uppercase font-thin mb-2">Social</div>
            <div className="flex flex-row gap-4 md:flex-col">
            <a href="">Faebook</a>
            <a href="">Linkdin</a>
            <a href="">Twitter</a>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="uppercase font-thin my-2">Company</div>
            <div className="flex flex-row gap-4 md:flex-col">
            <a href="">Offical Blog</a>
            <a href="">About Us</a>
            <a href="">Contact</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center md:mt-3 md:mb-0 my-20 bg-gradient-to-r from-[#D53469] to-[#DAAC51] text-white">
          &copy; Copyright Reserved
        </div>

      </footer>

    </div>
  );
}
