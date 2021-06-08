import React from 'react';

import {GymProvider} from './context'

import GymNav from './Components/gymNav';
import GymCountTimer from './Components/gymCount-body';
import Footer from './Components/footer';




const App = () => {


        return (
            <GymProvider>
                <GymNav/>
                <GymCountTimer/>
                <Footer/> 
            </GymProvider>
        )
    
}

export default React.memo(App);