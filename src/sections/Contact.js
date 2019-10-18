import React from 'react'
import LottieComp from '../LottieComp'

import githubAnimation from '../lf30_editor_9oaaSO.json'
import messageAnimation from '../5680-mail-icon.json'
import phoneAnimation from '../1286-phone.json'

import {
    Columns, Container, Heading, Section
} from 'react-bulma-components/full'

import { FaPhone, FaMailBulk, FaGithub } from 'react-icons/fa'

import Zoom from 'react-reveal/Zoom'
import LottieComponent from "../LottieComponent";

const Contact = () => {
    const sectionStyle = {
        boxShadow: '10px 10px 5px',
        backgroundColor: '#F03A47',
        paddingTop: 100
    }

    return (
        <Section style={sectionStyle}>
            <Container style={{marginBottom: 100, textAlign: 'center'}}>
                {heading()}
                {columns()}
            </Container>
        </Section>
    )
}

const columns = () => (
    <Columns style={{marginTop: 50}}>

        <Columns.Column style={{color: 'white'}}>
            <Zoom delay={500}>
            <Heading style={{color: 'white'}}>
                <LottieComponent animation={githubAnimation} height={80}/>
            </Heading>

            <Heading subtitle style={{color: 'white', marginTop: 20}}>
                <a href="github.com/cedrikaagaard" style={{color: 'white'}}>
                github.com/cedrikaagaard
                </a>
            </Heading>
            </Zoom>
        </Columns.Column>

        <Columns.Column>
            <Zoom delay={750}>
            <Heading style={{color: 'white'}}>
                <LottieComponent animation={phoneAnimation} height={100}/>
            </Heading>

            <Heading subtitle style={{color: 'white'}}>
                +46 72 052 1582
            </Heading>
            </Zoom>
        </Columns.Column>

        <Columns.Column>
            <Zoom delay={1000}>
            <Heading style={{color: 'white'}}>
                <LottieComponent animation={messageAnimation} height={100}/>
            </Heading>

            <Heading subtitle style={{color: 'white'}}>
                cedrikaagaard@gmail.com
            </Heading>
            </Zoom>
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

export default Contact
