import React from 'react'

import {
    Columns, Container, Heading, Section
} from 'react-bulma-components/full'

import { Icon } from 'react-fa'
import { AwesomeButton } from 'react-awesome-button'
import Fade from 'react-reveal/Zoom'

const CubeRobot = () => {
    const sectionStyle = {
        textAlign: 'center',
        color: '#9FB9A7',
        backgroundColor: '#2d2d2d',
        paddingTop: 100
    }

    const containerStyle = {
        textAlign: 'center',
        marginBottom: 100
    }

    return (
        <Section style={sectionStyle}>
            <Container style={containerStyle}>
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
        color: 'white'
    }

    return (
        <Heading style={style}>
            Cube robot

            <Heading subtitle style={{marginTop: 50, color: '#00ff00'}}>
                As a high school graduation project (Gymnasiearbete),
                I made a Rubik's cube solving robot using stepper motors
                and an Arduino. The robot uses Thistlethwaite's algorithm
                which I implemented in C++.
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
            <iframe
                src={iframeSource}
                title='Cube robot'
                width='265'
                height='480'
            />
        </Columns.Column>
    )
}

const rightColumn = () => (
    <Columns.Column>
        <Container>
            <Heading>
                <Heading subtitle style={{color: '#00ff00'}}>
                    This project was built using C++ and my implementation of
                        Thistlethwaite's algorithm is available on Github.
                </Heading>
            </Heading>
            <AwesomeButton
                type="primary"
                href='https://github.com/cedrikaagaard/thistlethwaite'
            >
                <Icon  name="github" />
                <span style={{paddingLeft: 10}}>ThistleThwaite</span>
            </AwesomeButton>
        </Container>
    </Columns.Column>
)

export default CubeRobot
