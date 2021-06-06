import React, { Component } from 'react';

import GymNav from './Components/gymNav';
import GymCountTimer from './Components/gymCount-body';
import Footer from './Components/footer';

import sound from './Components/done.mp3';


class App extends Component {

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

            console.log(this.state.ms)

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
            <div>
                <GymNav s={this.state.s} setTimer={this.setTimer} />
                <GymCountTimer timer={this.state} />
                <Footer run={this.runTimer}
                    reset={this.reset}
                    percent={this.state.percent}
                    display={this.state.display}
                />
            </div>
        )
    }
}

export default React.memo(App);