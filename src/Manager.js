import React from 'react';

import img from "./img/hero.png";
import icon from './icons/check.svg';

function Manager() {
    return (
        <div class="relative flex flex-col md:flex-row max-w-7xl px-8 py-10 gap-12 mb-16 z-10 items-center justify-center mx-auto">
            <div class="w-full md:w-1/2">
                <img class="" src={img} alt="" />
            </div>
            <div class="w-full md:w-1/2 flex items-start flex-col">
                <h1 class="relative z-10 text-5xl font-bold leading-tight text-white lg:text-6xl">Try Free Traffic Manager for Your Browser</h1>
                <p class="py-4 text-gray-300 leading-normal text-xl">Et ultrices neque ornare aenean euismod elementum nisi. Blandit aliquam etiam erat velit scelerisque in dictum non.</p>
                <div class="py-2 grid grid-cols-2 md:grid-cols-3 gap-4 items-center w-full">
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Website</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Product SKUs</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Categories</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Searc Terms</span>
                    </div>
                    <div class="flex gap-x-4 items-center gap-y-6">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Display Ads</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Content Pages</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Apps</span>
                    </div>
                </div>
                <button class="bg-white rounded-lg px-6 py-4 text-black font-semibold hover:bg-teal-200 items-end mt-6 cursor-pointer shadow-md">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Manager;