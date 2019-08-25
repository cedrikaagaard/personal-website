import React from 'react'

import {
    Columns,
    Container,
    Heading,
    Image,
    Section
} from "react-bulma-components/full";

import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll'
import RubberBand from "react-reveal/RubberBand";


const About = () => {
    return (
        <Section style={{marginTop: 50, boxShadow: '10px 10px 5px'}}>
            <Container style={{marginBottom: 100, textAlign: 'center'}}>


                {heading()}

                {firstRow()}

                {secondRow()}

                {thirdRow()}
            </Container>
        </Section>
    )
}

const heading = () => {
    return (
        <Heading style={{marginBottom: 50, fontFamily: 'Fira Code', fontSize: 50}}>
            <Zoom> About me </Zoom>


        </Heading>
    )
}

const firstRow = () => {
    return (
        <Columns style={{marginTop: 100}}>
            <Columns.Column width={6}>
                <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                    <RubberBand>
                    <Image src='http://www.kforce.gradjevinans.net/images/LU2.png'/>
                    </RubberBand>
                </div>
            </Columns.Column>

            <Columns.Column width={6}>
                <Heading subtitle style={{fontSize: 20}}>
                    <Zoom delay={0}>
                    I'm currently in the master of science in engineering
                    in computer science program at the faculty of engineering
                    at Lund University. I'm expected to finish by 2022.
                    </Zoom>
                </Heading>
            </Columns.Column>
        </Columns>
    )
}

const secondRow = () => {
    return (
        <Columns style={{marginTop: 100}}>
            <Columns.Column width={6}>
                <Heading subtitle style={{fontSize: 20}}>
                    <Zoom delay={0}>
                    I'm currently living in Lund, Sweden.
                    Originally from a small village in Småland.
                    </Zoom>
                </Heading>
            </Columns.Column>

            <Columns.Column width={6}>
                <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                    <RubberBand>
                    <Image src='https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/50229570_2081318298573887_3622989593474760704_n.jpg?_nc_cat=108&_nc_oc=AQmE-rFCD4se0d7yO-MBz4TSXMY12glSHRQmkBEVid4rThRJAdqdi8xgaxLKu8bXpCU&_nc_ht=scontent-amt2-1.xx&oh=f3add597d3dd55af86c52562c5cb2b9e&oe=5E06B4A2'/>
                    </RubberBand>
                    </div>
            </Columns.Column>
        </Columns>
    )
}

const thirdRow = () => {
    return (
        <Columns style={{marginTop: 100}}>
            <Columns.Column width={6}>
                <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                    <RubberBand>
                        <Image src='https://cdn1.iconfinder.com/data/icons/seo-search-engine-optimize-1/512/Development-seo-coding-web-development-programming-512.png'/>
                    </RubberBand>
                </div>
            </Columns.Column>

            <Columns.Column width={6}>
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
}

export default About