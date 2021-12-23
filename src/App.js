import React from 'react';

import bg1 from "./img/bg-1.svg";
import Request from './Request';
import Pricing from './Pricing';
import Paging from './Paging';
import Bottom from './Bottom';
import Info from './Info';
import Home from './Home';

function App() {
    return (
        <div class="overflow-hidden w-full font-sans bg-gray-900">
            <div class="relative">
                <img class="absolute opacity-70" alt="top-svg" src={bg1} />
                <Home />
                <Info />
                <Paging />
                <Pricing />
                <Request />
                <Bottom />
            </div>
        </div>
    )
}

export default App;