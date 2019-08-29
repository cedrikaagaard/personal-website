import React from 'react'

import {
    Columns, Container, Heading, Section
} from 'react-bulma-components/full'

import { Icon } from 'react-fa'
import { AwesomeButton } from 'react-awesome-button'

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';



const CubeRobot = () => {
    const sectionStyle = {
        boxShadow: '10px 10px 5px',
        marginTop: 50,
        paddingBottom: 100,
        textAlign: 'center'
    }

    const containerStyle = {
        marginBottom: 100,
        textAlign: 'center'
    }

    return (
        <Section style={sectionStyle}>
            <Container style={{}}>
                {heading()}
                {columns()}
            </Container>
        </Section>
    )
}

const heading = () => {
    const style = {
        marginBottom: 50,
        fontFamily: 'Fira Code',
        fontSize: 30,
    }

    return (
        <Heading style={style}>
            <Zoom cascade top>
            Cube robot
            </Zoom>

            <Heading subtitle style={{marginTop: 50}}>
                <Fade delay={250}>
                As a high school graduation project (Gymnasiearbete),
                I made a Rubik's cube solving robot using stepper motors
                and an Arduino. The robot uses Thistlethwaite's algorithm
                which I implemented in C++.
                </Fade>
            </Heading>
        </Heading>
    )
}

const columns = () => (
        <Columns style={{marginTop: 100}}>
            {leftColumn()}
            {rightColumn()}
        </Columns>
)

const leftColumn = () => {
    const iframeSource =
        'https://drive.google.com/file/d/1RxIA8QeAKm215K_PmhdyqZlt4S7XzTSv/preview'

    return (
        <Columns.Column>
            <Zoom delay={500}>
            <iframe
                src={iframeSource}
                title='Cube robot'
                width='265'
                height='480'
            />
            </Zoom>
        </Columns.Column>
    )
}

const rightColumn = () => (
    <Columns.Column>
        <Container>
            <Heading>
                <Heading subtitle>
                    <Zoom delay={600}>
                    This project was built using C++ and my implementation of
                        Thistlethwaite's algorithm is available on Github.
                    </Zoom>
                </Heading>
            </Heading>
            <Zoom delay={700}>
            <AwesomeButton
                type="primary"
                href='https://github.com/cedrikaagaard/thistlethwaite'
            >
                <Icon  name="github" />
                <span style={{paddingLeft: 10}}>ThistleThwaite</span>
            </AwesomeButton>
            </Zoom>
        </Container>
    </Columns.Column>
)

export default CubeRobot
