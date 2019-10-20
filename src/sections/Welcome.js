import React from 'react'
import Particles from 'react-particles-js'
import { Container, Heading, Section, Level } from 'react-bulma-components/full'

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import {AwesomeButton} from "react-awesome-button";
import {Icon} from "react-fa";


const subHeadingText =
    "Welcome to my website. Here you'll find information " +
    "about my skills, experience, contact and some projects of mine."


const Welcome = () => (
    <Section style={{backgroundColor:'#0d0d0d'}}>
        {particles()}
        {container()}
    </Section>
)

const container = () => {
    const containerStyle = {
        marginTop: 100,
        marginBottom: 140,
        textAlign: 'center',
    }

    const headingStyle = {
        fontFamily: 'Fira Code',
        fontSize: 30,
        color: 'white'
    }

    return (
        <Container style={containerStyle}>
            <Heading style={headingStyle}>
                <Level style={{textAlign: 'right'}}>
                    <Level.Item>
                        <Zoom cascade style={{textAlign: 'right'}}>
                        Hello, World
                        </Zoom>
                    </Level.Item>

                    <Level.Item>
                        <Zoom cascade style={{textAlign: 'right'}}>
                            ||
                        </Zoom>
                    </Level.Item>
                    <Level.Item style={{textAlign: 'left'}}>
                        <Fade bottom delay={500} style={{textAlign: 'left'}}>
                        Cedrik Aagaard
                        </Fade>
                    </Level.Item>
                </Level>

                <Heading subtitle style={{color: 'white'}}>
                    <Zoom delay={250}>
                    {subHeadingText}
                    </Zoom>

                    <Fade bottom delay={1000}>
                        <AwesomeButton
                            type="primary"
                            href='https://github.com/cedrikaagaard/personal-website'
                            style={{marginTop: 50}}
                        >
                            <Icon name="github" />
                            <span style={{paddingLeft: 10}}>
                                {'this.source() $'}
                            </span>
                        </AwesomeButton>
                    </Fade>
                </Heading>
            </Heading>
        </Container>
    )
}

const particles = () => {
    const height = 500

    const style = {
        backgroundColor: '#0d0d0d',
        marginBottom: -(height - 50),
        //marginTop: -50,
    }

    const params = {
        particles: {
            number: { value: (window.innerWidth) / 30 },
            size: { value: 3 },

            "color": {
                "value": "#00ff00"
            },
        },

        interactivity: {
            events: {
                onhover: { enable: true, mode: 'repulse' }
            }
        }
    }

    return <Particles style={style} height={height} params={params}/>
}

export default Welcome
