import React from 'react';

function Request() {
    return (
        <div class="flex flex-col justify-center items-center overflow-hidden font-sans bg-gray-900 pb-24 px-10">
            <div class="flex flex-col justify-center items-center w-full md:max-w-4xl">
                <h1 class="relative z-10 pt-10 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl text-center">
                    Ready to Get Started? Start Your Free Trial
                </h1>
                <span class="flex gap-x-4 py-4 text-gray-200">
                    <span class="">Ready for 30 days trial</span>
                    <p class="">|</p>
                    <span class="">Exclusive support</span>
                    <p class="">|</p>
                    <span class="">No fees</span>
                </span>
                <form class="my-4 w-full md:w-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                        <input type="text" class="bg-gray-700 border border-gray-600 rounded-lg py-2 text-gray-200 placeholder:text-teal-50 px-3" 
                            placeholder="Full Name"
                        />
                        <input type="text" class="bg-gray-700 border border-gray-600 rounded-lg py-2 text-gray-200 placeholder:text-teal-50 px-3" 
                            placeholder="Last Name"
                        />
                    </div>
                    <input type="text" class="w-full my-5 bg-gray-700 border border-gray-600 rounded-lg py-2 text-gray-200 placeholder:text-teal-50 px-3" 
                        placeholder="Email"
                    />
                </form>
                <button class="font-bold py-3 md:py-4  px-8 bg-teal-200 hover:bg-teal-300 rounded-lg">
                    Request Trial
                </button>
            </div>
        </div>
    )
}

export default Request;