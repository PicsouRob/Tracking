import React from 'react';

import PlayIcon from "./icons/play.svg";
// import GoogleLogo from "./icons/google.svg";
// import FacebookLogo from "./icons/facebook.svg";
// import LogitechLogo from "./icons/logitech.svg";
// import TokopediaLogo from "./icons/tokopedia.svg";
// import PullAndBearLogo from "./icons/pull-and-bear.svg";
import bg1 from "./img/bg-1.svg";
import hero from "./img/hero.png";
import { menu } from './data';

function App() {
    return (
        <div class="overflow-hidden w-full min-h-screen font-sans bg-gray-900">
            <div class="relative">
                <img class="absolute opacity-70" alt="top-svg" src={bg1} />
                <div class="relative py-6 px-8 mx-auto max-w-7xl">
                    <nav class="flex justify-between items-center">
                        <span class="text-2xl font-semibold text-white cursor-pointer">Liondo</span>
                        <ul class="hidden md:items-center md:tracking-wide md:text-gray-300 md:gap-8 lg:gap-x-16 md:flex">
                            {menu.map((item, index) => (
                                <li class="cursor-pointer">
                                    <span class="transition hover:text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button class="hidden py-3 px-6 font-medium tracking-wide leading-5 text-white rounded-md border-2 border-gray-800 transition md:inline-block hover:bg-teal-300 hover:text-gray-900 hover:shadow-lg">
                            Get Started
                        </button>
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
            </div>
        </div>
    )
}

export default App;