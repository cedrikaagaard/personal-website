// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'

class LottieComponent extends Component {


    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: this.props.animation,
            rendererSettings: {

            },
        };

        return(
            <div>
                <Lottie
                    options={defaultOptions}
                    width={this.props.width || undefined}
                    height={this.props.height || undefined}
                />
            </div>
        )
    }
}

export default LottieComponent