import React from 'react'

import {
    Columns, Container, Heading, Image, Section
} from 'react-bulma-components/full'

import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'

const About = () => {
    const sectionStyle = {
        marginTop: 50,
        paddingBottom: 100,
        boxShadow: '10px 10px 5px white',
    }

    const containerStyle = {
        textAlign: 'center'
    }

    return (
        <Section style={sectionStyle}>
            <Container style={containerStyle}>

                {heading()}
                {luRow()}
                {personalRow()}
                {programmingRow()}

            </Container>
        </Section>
    )
}

const heading = () => {
    const headingStyle = {
        fontFamily: 'Fira Code',
        fontSize: 30
    }

    return (
        <Heading style={headingStyle}>
            <Zoom>
                About me
            </Zoom>
        </Heading>
    )
}

const imageDiv = src => (
    <div style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
        <Image src={src}/>
    </div>
)

const luRow = () => (
    <Columns style={{marginTop: 100}}>
        <Columns.Column>
            {imageDiv('images/lu.png')}
        </Columns.Column>
        <Columns.Column>
            <Heading subtitle style={{fontSize: 20}}>
                <Zoom>
                    I'm currently pursuing a master's degree in CSE at the
                    faculty of engineering at Lund University, which I am
                    expecting to finish by 2022.
                </Zoom>
            </Heading>
        </Columns.Column>
    </Columns>
)

const personalSrc =
    'images/self.jpg'

const personalRow = () => (
    <Columns style={{marginTop: 100}}>
        <Columns.Column>
            <Heading subtitle style={{fontSize: 20}}>
                <Zoom>
                    I'm 20 years old and currently living in Lund.
                    I'm originally from a small village in småland.
                </Zoom>
            </Heading>
        </Columns.Column>
        <Columns.Column>
            {imageDiv(personalSrc)}
        </Columns.Column>
    </Columns>
)

const programmingSrc =
    'images/code.png'

const programmingRow = () => (
    <Columns style={{marginTop: 100}}>
        <Columns.Column>
            {imageDiv(programmingSrc)}
        </Columns.Column>
        <Columns.Column>
            <Heading subtitle style={{fontSize: 20}}>
                <Zoom>
                    I've been programming for about 4 years now.
                    I'm the most comfortable with back-end/middle-end
                    development. I have experience within different parts
                    of the development, such as website, server, mobile
                    and arduino.
                </Zoom>
            </Heading>
        </Columns.Column>
    </Columns>
)

export default About
