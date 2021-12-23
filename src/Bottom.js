import React from 'react';

import up from "./icons/up.svg";
import down from "./icons/down.svg";

function Bottom() {
    return (
        <div class="">
            <div class="relative py-10 bg-gray-100">
                <div class="relative pt-2 px-8 mx-auto max-w-7xl bg-gray-100">
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
            </div>
            <div class="bg-gray-100">
                <div class="relative pt-2 px-8 mx-auto max-w-7xl">
                    <div class="pb-4">
                        <hr class="border border-gray-300 mb-2" />
                        <div class="flex items-center">
                            <span class="uppercase font-bold">see all similarweb offices</span>
                            <img class="w-6 h-4 pl-2" src={down} alt="" />
                        </div>
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
    )
}

export default Bottom;