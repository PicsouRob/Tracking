import React from 'react';

import { price, pricePlan } from './data';
import bg1 from "./img/bg-1.svg";
import check from "./icons/check.svg";

function Pricing() {
    return (
        <div class="relative min-h-screen items-center mx-auto bg-gray-900">
            <img class="absolute opacity-70" alt="top-svg" src={bg1} />
            <div class="flex flex-col justify-center items-center pt-10">
                <div class="max-w-2xl flex flex-col justify-center items-center pt-10">
                    <h1 class="relative z-10 pt-10 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                        Pricing Plans
                    </h1>
                    <p class="text-gray-300 my-3 leading-relaxed z-10 text-center px-10">
                        Et ultrices neque ornare aenean euismod elementum nisi. Blandit aliquam etiam erat velit scelerisque in dictum non. 
                    </p>
                </div>
            </div>
            <div class="relative max-w-7xl mx-auto px-8 pb-10">
                <div class="flex flex-col justify-center items-center">
                    <div class="py-8 w-full mx-auto">
                        <div class="flex justify-center items-center gap-x-8">
                            <span class="font-medium text-white px-4 border-b-4 border-b-white pb-5 text-center">
                                Monthly Pricing
                            </span>
                            <span class="font-medium text-gray-300 mb-4 px-4 text-center">
                                Annual Pricing(Save up to $99)
                            </span>
                            <span class="text-center font-medium text-gray-300 mb-4 px-4">
                                Company Plan
                            </span>
                        </div>
                    </div>
                    <hr class="border-2 border-gray-800 -mt-3 md:-mt-1" />
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 my-8">
                        {pricePlan.map((item, index) => (
                            <div class="group bg-gray-800 shadow-md py-10 px-6 my-4 rounded-lg h-autot hover:translate-y-4 transition duration-300 ease-ou hover:bg-white">
                                <h3 class="text-center text-2xl mb-4 text-white font-bold group-hover:text-black">{price.title}</h3>
                                <h1 class="text-center text-3xl md:text-5xl py-4 text-white font-bold group-hover:text-black">{price.price}</h1>
                                <div class="flex gap-x-3 py-1">
                                    <img class="w-4 h-4 mt-1" src={check} alt="" />
                                    <span class="text-white font-medium group-hover:text-black">{price.text1}</span>
                                </div>
                                <div class="flex gap-x-3 py-1">
                                    <img class="w-4 h-4 mt-1" src={check} alt="" />
                                    <span class="text-white font-medium group-hover:text-black">{price.text2}</span>
                                </div>
                                <div class="flex gap-x-3 py-1">
                                    <img class="w-4 h-4 mt-1" src={check} alt="" />
                                    <span class="text-white font-medium group-hover:text-black">{price.text3}</span>
                                </div>
                                <div class="flex gap-x-3 py-1">
                                    <img class="w-4 h-4 mt-1" src={check} alt="" />
                                    <span class="text-white font-medium group-hover:text-black">{price.text4}</span>
                                </div>
                                <div class="flex gap-x-3 py-1">
                                    <img class="w-4 h-4 mt-1" src={check} alt="" />
                                    <span class="text-white font-medium group-hover:text-black">{price.text5}</span>
                                </div>
                                <div class="flex items-center justify-center pt-6">
                                    <button class="border-2 border-gray-600 px-4 py-2 rounded-lg text-white group-hover:text-black font-medium cursor-pointer group-hover:border-0 group-hover:bg-teal-200 hover:bg-gray-800 hover:text-white">
                                        Join This Plan
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;