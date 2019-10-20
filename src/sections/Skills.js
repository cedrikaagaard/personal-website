import React from 'react'

import {
    Columns, Container, Heading, Image, Section
} from 'react-bulma-components/full'

import Zoom from 'react-reveal/Zoom'

import Fade from 'react-reveal/Fade'

const Skills = () => {
    const sectionStyle = {
        backgroundColor: '#0d0d0d',
        paddingTop: 100,
        paddingBottom: isSmallScreen() ? 125 : 200,
    }

    return (
        <Section style={sectionStyle}>
            <Container style={{textAlign: 'center'}}>
                {heading()}
                {firstRow()}
                {secondRow()}
            </Container>
        </Section>
    )
}

const isSmallScreen = () => window.innerWidth < 768

const heading = () => {
    const headingStyle = {
        marginBottom: 30,
        color:'white',
        fontFamily: 'Fira Code'
    }

    return (
        <Heading style={headingStyle}>
            <Fade bottom>Skills</Fade>
            <Heading subtitle style={{color: '#00ff00'}}>

                <br/>

                <Fade bottom delay={0}>
                    I have professional experience with languages and
                    frameworks such as JavaScript, TypeScript,
                    NodeJS, ExpressJS, ReactJS, AngularJS, SQL, PHP,
                    Laravel and PassportJS.
                </Fade>

                <br/>
                <br/>

                <Fade bottom delay={250}>
                    And non-professional experience with, for example,
                    C++, Java, Scala, Python, OpenCV and Android.
                </Fade>

            </Heading>
        </Heading>
    )
}

const column = (src, delay) => {
    const divStyle = {
        width: isSmallScreen() ? 50 : 100,
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    return (
        <Columns.Column>
            <Zoom delay={delay}>
                <div style={divStyle}>
                    <Image src={src}/>
                </div>
            </Zoom>
        </Columns.Column>
    )
}

const firstRow = () => (
    <Columns className='is-mobile' style={{marginTop: 50}}>
        {column(
            'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
            500
        )}

        {column(
            'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
            750
        )}

        {column(
            'https://rancorstudios.com/wp-content/uploads/2018/11/php.png',
            1000
        )}

        {column(
            'https://cdn.worldvectorlogo.com/logos/react.svg',
            1250
        )}
    </Columns>
)

const secondRow = () => (
    <Columns className='is-mobile' style={{marginTop: 50}}>
        {column(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
            750
        )}

        {column(
            'https://image.flaticon.com/icons/png/512/226/226777.png',
            1000
        )}

        {column(
            'https://sphere.it/wp-content/uploads/2019/07/scala-1.png',
            1250
        )}

        {column(
            'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/android-512.png',
            1500
        )}
    </Columns>
)

export default Skills
