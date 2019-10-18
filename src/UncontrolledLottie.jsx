// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './8306-programming-animation.json'

class UncontrolledLottie extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            background: "#ffff00",
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return(
            <div>
                <Lottie options={defaultOptions}
                />
            </div>
        )
    }
}

export default UncontrolledLottie