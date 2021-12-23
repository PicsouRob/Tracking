import React from 'react';

import GoogleLogo from "./icons/google.svg";
import FacebookLogo from "./icons/facebook.svg";
import LogitechLogo from "./icons/logitech.svg";
import TokopediaLogo from "./icons/tokopedia.svg";
import PullAndBearLogo from "./icons/pull-and-bear.svg";
import { menu, features } from './data';
import bg2 from "./img/bg-2.svg";

function Info() {
    return (
        <div>
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
        </div>
    )
}

export default Info;