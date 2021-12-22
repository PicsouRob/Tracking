import React from 'react';

import bg1 from "./img/bg-1.svg";

function Pricing() {
    return (
        <div class="relative min-h-screen items-center bg-gray-900">
            <img class="absolute opacity-70" alt="top-svg" src={bg1} />
            <div class="flex flex-col justify-center items-center pt-10">
                <h1 class="relative z-10 pt-10 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                    Pricing Plans
                </h1>
                <p class="text-gray-300 my-3 leading-relaxed text-center">
                    Et ultrices neque ornare aenean euismod elementum nisi. Blandit <br /> aliquam etiam erat velit scelerisque in dictum non. 
                </p>
            </div>
        </div>
    )
}

export default Pricing;