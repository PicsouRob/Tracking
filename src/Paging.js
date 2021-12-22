import React from 'react';

function Paging() {
    return (
        <div class="relative flex justify-center items-center gap-x-6 py-4 bg-gray-800">
            <div class="flex gap-x-4 items-center">
                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 font-medium text-sm">
                    <span class="text-white">01</span>
                </div>
                <span class="text-gray-300">In metus vulptate</span>
                <div class="flex gap-x-1">
                    <hr class="bg-gray-500 border-0 w-2 h-2 rounded-full" />
                    <hr class="bg-gray-400 border-0 w-2 h-2 rounded-full" />
                    <hr class="bg-white border-0 w-2 h-2 rounded-full" />
                </div>
            </div>
            <div class="flex gap-x-4 items-center">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white font-medium text-sm border-0">
                    <span class="">02</span>
                </div>
                <span class="text-white font-medium">Et ultrices neque ornare</span>
                <div class="flex gap-x-1">
                    <hr class="bg-gray-500 border-0 w-2 h-2 rounded-full" />
                    <hr class="bg-gray-400 border-0 w-2 h-2 rounded-full" />
                    <hr class="bg-white border-0 w-2 h-2 rounded-full" />
                </div>
            </div>
            <div class="flex gap-x-4 items-center">
                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 font-medium text-sm">
                    <span class="text-white">03</span>
                </div>
                <span class="text-gray-300">Tellus in hac habitasse</span>
            </div>
        </div>
    )
}

export default Paging;