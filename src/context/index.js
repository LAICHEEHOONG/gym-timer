import React, { Component } from 'react';

import sound from '../Components/done.mp3';

const GymContext = React.createContext();

class GymProvider extends Component {

    state = {
        s: 0,
        ms: 0,
        count: 0,
        percent: 100,
        display: 'inline-block'
    }

    setTimer = (event, second) => {

        this.setState({
            s: Math.floor(second)
        })
        event.preventDefault();
    }

    runTimer = () => {
        if (this.state.s === 0) {
            alert('Please set timer...');
            return;
        }

        this.setState({ percent: 100, display: 'none' })

        let setNum = this.state.s;

        let timerInterval = setInterval(() => {
            this.setState({ ms: this.state.ms + 1 })

     

            if (this.state.ms > 9) {
                this.setState({ ms: 0 })
                this.setState({
                    s: this.state.s - 1,
                    percent: this.state.percent - 100 / setNum

                })

             

            }

            if (this.state.s === 0) {
                let audio = new Audio(sound)
                audio.play();
                clearInterval(timerInterval)
                this.setState({
                    s: setNum,
                    count: this.state.count + 1,
                    display: 'inline-block'
                })
            }

        }, 100)

    }

    reset = () => {
        this.setState({
            s: 0,
            ms: 0,
            count: 0,
            percent: 100
        })
    }

    render() {
        return (
            <GymContext.Provider 
            value={{
                state: this.state,
                setTimer: this.setTimer,
                runTimer: this.runTimer,
                reset: this.reset
            }}>
                {this.props.children}
            </GymContext.Provider>
        )
    }
}

export {GymContext, GymProvider}