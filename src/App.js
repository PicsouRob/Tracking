import React from 'react';

import PlayIcon from "./icons/play.svg";
import GoogleLogo from "./icons/google.svg";
import FacebookLogo from "./icons/facebook.svg";
import LogitechLogo from "./icons/logitech.svg";
import TokopediaLogo from "./icons/tokopedia.svg";
import PullAndBearLogo from "./icons/pull-and-bear.svg";
import menuLogo from "./icons/menu.svg";
import up from "./icons/up.svg";
import down from "./icons/down.svg";
import bg1 from "./img/bg-1.svg";
import bg2 from "./img/bg-2.svg";
import hero from "./img/hero.png";
import { menu, features } from './data';

function App() {
    return (
        <div class="overflow-hidden w-full font-sans bg-gray-900">
            <div class="relative">
                <img class="absolute opacity-70" alt="top-svg" src={bg1} />
                <div class="relative py-6 px-8 mx-auto max-w-7xl">
                    <nav class="flex justify-between items-center">
                        <span class="text-2xl font-semibold text-white cursor-pointer">Liondo</span>
                        <ul class="hidden md:items-center md:tracking-wide md:text-gray-300 md:gap-8 lg:gap-x-16 md:flex">
                            {menu.map((item, index) => (
                                <li class="cursor-pointer" key={index}>
                                    <span class="transition hover:text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button class="hidden py-3 px-6 font-medium tracking-wide leading-5 text-white rounded-md border-2 border-gray-800 transition md:inline-block hover:bg-teal-300 hover:text-gray-900 hover:shadow-lg">
                            Get Started
                        </button>
                        <img class="inline-block md:hidden w-6 h-6 cursor-pointer fill-white stroke-white" src={menuLogo} alt="" />
                    </nav>
                </div>
                <div class="relative py-10 px-8 mx-auto max-w-7xl">
                    <div class="flex flex-col gap-y-12 md:flex-row">
                        <div class="md:w-1/2">
                            <h1 class="relative z-10 pt-10 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl break-words">
                                Tracking User 
                                <span class="relative after:bottom-2 after:left-0 after:bg-gradient-to-l after:from-teal-300 after:absolute after:w-80 after:h-5 after:-z-10 px-4">
                                    Movements 
                                </span>
                                Around the world
                            </h1>
                            <p class="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-gray-300">
                                Whether it's your family or your business, we want to help you take care of
                                the things that matter the most.
                            </p>
                            <div class="flex gap-x-6 items-center pt-12">
                                <button class="px-6 py-4 font-medium tracking-wide bg-teal-200 rounded-lg shadow-md transition hover:bg-teal-300">
                                    Get Trial Project
                                </button>
                                <button class="flex gap-x-2 items-center px-6 py-4 font-medium tracking-wide text-gray-300 transition hover:text-teal-300">
                                    <img src={PlayIcon} alt="" class="w-8 h-8 stroke-current" />
                                    <span class="">Watch Demo</span>
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center md:justify-center md:w-1/2">
                            <img class="drop-shadow-2xl" alt="" src={hero} />
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img class="absolute opacity-70" src={bg2} alt="" />
                    <div class="relative py-16 px-8 mx-auto max-w-7xl">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-10">
                            <span class="font-semibold tracking-wide text-white uppercase whitespace-nowrap">Trusted by global brands</span>
                            <div class="flex flex-wrap gap-y-4 gap-x-14 items-center pt-6 -mx-2 lg:flex-nowrap md:pt-0 md:mx-0">
                                <img class="w-auto h-16 fill-white transition cursor-pointer hover:text-white" src={GoogleLogo} alt="" />
                                <img class="w-auto h-20 fill-gray-400 transition cursor-pointer hover:fill-white" src={FacebookLogo} alt="" />
                                <img class="w-auto h-16 text-gray-400 transition cursor-pointer fill-current hover:text-white" src={LogitechLogo} alt="" />
                                <img class="w-auto h-20 text-gray-400 transition cursor-pointer fill-current hover:text-white" src={TokopediaLogo} alt="" />
                                <img class="w-auto h-20 text-gray-400 transition cursor-pointer fill-current hover:text-white" src={PullAndBearLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative py-16 px-8 mx-auto max-w-7xl">
                    <div class="flex flex-col gap-x-8 justify-between md:flex-row">
                        <div class="md:w-1/2">
                            <h2 class="text-5xl font-bold leading-tight text-white">
                                Must-Have to Win Your Online Market
                            </h2>
                        </div>
                        <div class="md:w-1/2">
                            <p class="pt-6 text-xl leading-relaxed text-gray-300">
                                Found something that works for you? Request a quote from our site or call an
                                agent and we'll get back to you as soon as possible.
                            </p>
                            <button class="py-4 px-8 mt-8 font-medium tracking-wide bg-teal-200 rounded-lg transition hover:bg-teal-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 items-start py-16 w-full md:grid-cols-4 md:gap-x-8">
                        {features.map((item, index) => (
                            <div class="flex overflow-hidden relative flex-col items-start p-6 bg-gray-800 rounded-lg duration-300 transition cursor-pointer group hover:bg-white" key={index}>
                                <span class="absolute top-0 right-0 w-24 h-24 bg-teal-200 transition-transform ease-out rotate-45 translate-x-20 -translate-y-20 group-hover:translate-x-14 group-hover:-translate-y-14" >rrr</span>
                                <div class="p-2 bg-gray-900 rounded-md transition duration-300 group-hover:bg-teal-200">
                                    <img class="w-6 h-6 text-white transition duration-300 group-hover:text-gray-800" 
                                        src={item.icon} alt="" 
                                    />
                                </div>
                                <span class="inline-block pt-6 text-2xl font-medium tracking-wide text-white transition duration-300 group-hover:text-gray-800">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="relative py-10 px-8 mx-auto max-w-7xl bg-white">
                    <div class="grid grid-cols-2 gap-x-10 gap-y-4 md:grid-cols-4">
                        <div class="">
                            <img class="w-10 h-8 mb-4" src={up} alt="" />
                            <span class="font-semibold text-2xl">Sed vulptate mi sit amet mauris commodo quis imperdiet convallis</span>
                        </div>
                        <div class="flex flex-col leading-relaxed">
                            <span class="mb-4 text-gray-500 cursor-pointer">Ranking</span>
                            <span class="font-medium text-gray-900 cursor-pointer py-1">Top Wesites</span>
                            <span class="font-medium text-gray-900 cursor-pointer py-1">Top Android Apps</span>
                            <span class="font-medium text-gray-900 cursor-pointer py-1">Top IOS Apps</span>
                            <span class="font-medium text-gray-900 cursor-pointer py-1">Digital 100</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="mb-4 text-gray-500 cursor-pointer">Solutions</span>
                            <span class="font-medium text-gray-900 cursor-pointer py-1">Shopper Intelligence</span>
                            <span class="font-medium text-gray-900 cursor-pointer py-1">Sales Intelligence</span>
                            <span class="font-medium text-gray-900 cursor-pointer py-1">Investor Intelligence</span>
                            <span class="font-medium text-gray-900 cursor-pointer py-1">Advisor Service</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="mb-4 text-gray-500 cursor-pointer">Contact Us</span>
                            <span class="font-medium text-gray-900 cursor-pointer py-1">hello@lindo.com</span>
                        </div>
                    </div>
                </div>
                <div class="relative pt-2 px-8 mx-auto max-w-7xl bg-white">
                    <div class="pb-4">
                        <hr class="border border-gray-200 mb-2" />
                        <div class="flex items-center">
                            <span class="uppercase font-bold">see all similarweb offices</span>
                            <img class="w-6 h-4 pl-2" src={down} alt="" />
                        </div>
                    </div>
                </div>
                <div class="relative py-6 px-8 mx-auto max-w-7xl">
                    <div class="flex flex-col leading-relaxed md:flex-row justify-between items-center">
                        <div class="flex items-center">
                            <span class="text-gray-200 flex font-medium">&#169; Liondo 2021 All Right Reserved</span>
                        </div>
                        <div class="flex gap-x-8">
                            <span class="text-gray-200 cursor-pointer hover:text-gray-300">Privicy Policy</span>
                            <span class="text-gray-200 cursor-pointer hover:text-gray-300">Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;