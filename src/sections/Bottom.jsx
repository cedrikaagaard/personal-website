import React from 'react'
import LottieComp from '../LottieComp'

import githubAnimation from '../10475-drawing-a-love.json'
import messageAnimation from '../4418-isometric-cube-preloader.json'
import reactAnimation from '../6610-react-logo-spinning.json'

import {
    Columns, Container, Heading, Section
} from 'react-bulma-components/full'

import { FaPhone, FaMailBulk, FaGithub } from 'react-icons/fa'

import Zoom from 'react-reveal/Zoom'
import LottieComponent from "../LottieComponent";

const Bottom = () => {
    const sectionStyle = {
        backgroundColor: 'white',
    }

    return (
        <Section style={sectionStyle}>
            <Container style={{marginBottom: 100, textAlign: 'center'}}>
                {columns()}
            </Container>
        </Section>
    )
}

const columns = () => (
    <Columns style={{marginTop: 50}}>

        <Columns.Column>
                <Heading style={{color: 'white', marginTop: 25}}>
                    <LottieComponent animation={githubAnimation} height={150}/>
                </Heading>


        </Columns.Column>

        <Columns.Column>
                <Heading style={{color: 'white', marginTop: 25}}>
                    <LottieComponent animation={reactAnimation} height={150}/>
                </Heading>

                <Heading subtitle style={{color: '#2d2d2d', marginTop: 25}}>
                    This website was built using React.
                </Heading>
        </Columns.Column>

        <Columns.Column>
                <Heading style={{color: 'white'}}>
                    <LottieComponent animation={messageAnimation} height={200}/>
                </Heading>

                <Heading subtitle style={{color: 'white'}}>
                    cedrikaagaard@gmail.com
                </Heading>
        </Columns.Column>
    </Columns>
)

const heading = () => {
    const headingStyle = {
        marginBottom: 50,
        fontFamily: 'Fira Code',
        fontSize: 30,
        color: 'white'
    }

    return (
        <Heading style={headingStyle}>
            <Zoom>
                Contact
            </Zoom>
            <Heading subtitle style={{color: 'white'}}>
                <Zoom delay={250}>
                    Feel free to contact me.
                </Zoom>
            </Heading>
        </Heading>
    )
}

export default Bottom
