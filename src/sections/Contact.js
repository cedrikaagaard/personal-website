import React from 'react'

import {
    Columns, Container, Heading, Section
} from 'react-bulma-components/full'

import { FaPhone, FaMailBulk, FaGithub } from 'react-icons/fa'

import Zoom from 'react-reveal/Zoom'

const Contact = () => {
    const sectionStyle = {
        boxShadow: '10px 10px 5px',
        backgroundColor: '#05386b',
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
                <FaPhone/>
            </Heading>

            <Heading subtitle style={{color: 'white'}}>
                    +46 72 052 1582
            </Heading>
            </Zoom>
        </Columns.Column>

        <Columns.Column>
            <Zoom delay={750}>
            <Heading style={{color: 'white'}}>
                <FaMailBulk/>
            </Heading>

            <Heading subtitle style={{color: 'white'}}>
                cedrikaagaard@gmail.com
            </Heading>
            </Zoom>
        </Columns.Column>

        <Columns.Column>
            <Zoom delay={1000}>
            <Heading style={{color: 'white'}}>
                <FaGithub/>
            </Heading>

            <Heading subtitle style={{color: 'white'}}>
                github.com/cedrikaagaard
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
        color: '#5cdb95'
    }

    return (
        <Heading style={headingStyle}>
            <Zoom>
            Contact
            </Zoom>
            <Heading subtitle style={{color: '#5cdb95'}}>
                <Zoom delay={250}>
                Feel free to contact me.
                </Zoom>
            </Heading>
        </Heading>
    )
}

export default Contact
