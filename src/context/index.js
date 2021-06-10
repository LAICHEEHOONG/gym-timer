import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
        event.preventDefault();

        if(parseInt(second) < 0) {
            this.notify('Not allow negative number')
            // alert('Not allow number...')
            this.setState({s: 0})
            return;
        }

        if(parseInt(second) === 0) {
            this.notify('Cannot be zero')
            // alert('Not allow number...')
            this.setState({s: 0})
            return;
        }

        this.setState({
            s: Math.floor(second)
        })
        
    }

    runTimer = () => {

        // const notify = () => toast("Wow so easy !");

        // notify()

        if (this.state.s === 0) {
            this.notify('Please set timer...')
            // alert('Please set timer...');
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

    notify = (text) => {
        toast.error(text, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
          });
    }

    render() {

        return (
            <>
             <ToastContainer />
            <GymContext.Provider 
            value={{
                state: this.state,
                setTimer: this.setTimer,
                runTimer: this.runTimer,
                reset: this.reset
            }}>
                {this.props.children}
            </GymContext.Provider>
            </>
        )
    }
}

export {GymContext, GymProvider}