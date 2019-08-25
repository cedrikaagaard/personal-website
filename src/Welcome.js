import React from 'react'
import Particles from 'react-particles-js'
import { Container, Heading, Section } from 'react-bulma-components/full'

const headerText = 'Hello, World | Cedrik Aagaard'
const subHeaderText =
    `Welcome to my website. On here you'll find` +
    ` information about my skills, experience, contact and some projects of mine.`

const Welcome = () => (
    <Section style={{backgroundColor:'#5cdb95', boxShadow: '0px 5px 5px'}}>
        {particles()}
        {container()}
    </Section>
)

const container = () => {
    const containerStyle = {
        marginTop: 0,
        marginBottom: 120,
        textAlign: 'center',
        padding: 25, paddingTop: 50, paddingBottom: 50,
        //backgroundColor: 'rgba(47, 47, 47, 0.75)'
    }

    const headingStyle = {
        fontFamily: 'Fira Code',
        fontSize: 50,
        color: 'white'
    }

    return (
        <Container style={containerStyle}>
            <Heading style={headingStyle}>
                {headerText}
                <Heading subtitle style={{color: '#05386b'}}>{subHeaderText}</Heading>
            </Heading>
        </Container>
    )
}

const particles = () => {
    const height = 500

    const style = {
        backgroundColor: '#5cdb95',
        marginBottom: -(height - 125),
        marginTop: -50,
    }

    const params = {
        particles: {
            number: { value: (window.innerWidth - 250) / 25 },
            size: { value: 3 },

            "color": {
                "value": "#05386b"
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
