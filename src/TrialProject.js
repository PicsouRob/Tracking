import React from 'react';

import img from "./img/hero.png";
import icon from './icons/check.svg';
import play from './icons/play2.svg';

function TrialProject() {
    return (
        <div class="relative flex flex-col md:flex-row max-w-7xl px-8 py-10 gap-12 mb-16 z-10 items-center justify-center mx-auto">
            <div class="w-full md:w-1/2 flex items-start flex-col">
                <h1 class="relative z-10 text-5xl font-bold leading-tight text-white lg:text-6xl pt-4">
                    Deep market insights at your fingertips
                </h1>
                <p class="py-4 text-xl tracking-wide leading-relaxed text-gray-300">Praesent tristique magma sit amet purus gravida quis blandit turpis. Enim nunc faucibus a pellentesque sit amet portitor eget. Enim lobortis scelerisque fermentum dui.</p>
                <div class="py-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Quisque egestas</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Velit sed ullamcorper</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Adipiscing vitae</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Lobortis mattis aliquam</span>
                    </div>
                    <div class="flex gap-x-4 items-center gap-y-6">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Montes nascetue ridiculs</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Maecenas pharetra convallis</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Dignissim tincidut</span>
                    </div>
                    <div class="flex gap-x-4 items-center">
                        <img class="w-4 h-4" src={icon} alt="" />
                        <span class="text-white font-medium text-xl">Posuere urna</span>
                    </div>
                </div>
                <div class="flex gap-x-6 items-center mt-6">
                    <button class="bg-white rounded-lg px-2 md:px-6 py-3 text-black font-semibold hover:bg-teal-200 items-end cursor-pointer shadow-md">
                        Get Trial Project
                    </button>
                    <button class="flex gap-x-2 items-center px-2 md:px-6 py-3 font-medium tracking-wide text-gray-300 hover:text-gray-200 border border-gray-600 rounded-lg cursor-pointer shadow-md">
                        <img src={play} alt="" class="w-6 h-6 stroke-current" />
                        <span class="">Watch Demo</span>
                    </button>
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <img class="" src={img} alt="" />
            </div>
        </div>
    )
}

export default TrialProject;