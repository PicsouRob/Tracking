import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import bg1 from "./img/bg-1.svg";
import Request from './Request';
import Pricing from './Pricing';
import Paging from './Paging';
import Bottom from './Bottom';
import Info from './Info';
import Home from './Home';
import Manager from './Manager';
import TrialProject from './TrialProject';

function App() {
    return (
        <div class="overflow-hidden w-full font-sans bg-gray-900">
            <div class="relative">
                <img class="absolute opacity-70" alt="top-svg" src={bg1} />
                <Parallax pages={2} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={2.5}
                    >
                        <Home />
                    </ParallaxLayer>
                </Parallax>
                <Info />
                <Manager />
                <TrialProject />
                <Paging />
                <Pricing />
                <Request />
                <Bottom />
            </div>
        </div>
    )
}

export default App;