import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component/dist-es6'

import { Heading, Section } from 'react-bulma-components/full'
import React from 'react'

import Zoom from 'react-reveal/Zoom'

import {
    FaUniversity, FaSchool, FaAndroid, FaIndustry,
    FaRegFlag, FaCode, FaFileCode, FaLaptopCode
} from 'react-icons/fa'

const Resume = () => {
    const headingStyle = {
        fontFamily: 'Fira Code',
        fontSize: 30,
        textAlign: 'center'
    }

    return (
        <Section style={{boxShadow: '5px 5px 5px', marginTop: 50}}>
            <Heading style={headingStyle}>
                <Zoom cascade top>
                Resume
                </Zoom>
            </Heading>

            <VerticalTimeline>
                {highSchool()}
                {fortnox()}
                {sm()}
                {eterix()}
                {lu()}
                {skillfully()}
                {q2d()}
                {finnmedicin()}
            </VerticalTimeline>
        </Section>
    )
}

const highSchool = () => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014 - 2017"
        iconStyle={{ background: '#5cdb95', color: '#fff' }}
        icon={<FaSchool/>}
    >
        <h3 className="vertical-timeline-element-title">
            High school student
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
            Haganässkolan, Älmhult
        </h4>

        <p>
            High school. The technology program with
            information and media technology orientation.
        </p>
    </VerticalTimelineElement>
)

const fortnox = () => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016"
        iconStyle={{ background: '#05386b', color: '#fff' }}
        icon={<FaAndroid/>}
    >
        <h3 className="vertical-timeline-element-title">
            Intern
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
            Fortnox AB, Växjö
        </h4>

        <p>
            Two week internship in which I developed an Android application.
            Gained experience in Android development, REST api:s and BASE64.
        </p>
    </VerticalTimelineElement>
)

const sm = () => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016"
        iconStyle={{ background: '#5cdb95', color: '#fff' }}
        icon={<FaRegFlag/>}
    >
        <h3 className="vertical-timeline-element-title">
            Finalist
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
            Swedish programming high school olympiad, Stockholm
        </h4>

        <p>
            Reached the final in the Swedish part
            of the high school programming olympiad.
        </p>
    </VerticalTimelineElement>
)

const eterix = () => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017"
        iconStyle={{ background: '#05386b', color: '#fff' }}
        icon={<FaIndustry/>}
    >
        <h3 className="vertical-timeline-element-title">
            Summer employee
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
            Eterix Sweden AB, Delary
        </h4>

        <p>
            Summer employment in which I worked with PLC programming using
            STRUCTURED TEXT as well as the programming of an industrial laser.
            Gained experience in understanding of protocols.
        </p>
    </VerticalTimelineElement>
)

const lu = () => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - present"
        iconStyle={{ background: '#5cdb95', color: '#fff' }}
        icon={<FaUniversity/>}
    >
        <h3 className="vertical-timeline-element-title">
            University student
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
            Lund University, faculty of engineering
        </h4>

        <p>
            Master's of science in engineering
            in computer science program (CSE).
        </p>
    </VerticalTimelineElement>
)

const skillfully = () => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - present"
        iconStyle={{ background: '#05386b', color: '#fff' }}
        icon={<FaCode/>}
    >
        <h3 className="vertical-timeline-element-title">
            Consultant
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
            Skillfully Öresund AB, Lund
        </h4>

        <p>
            Employment as a full stack developer consultant.
        </p>
    </VerticalTimelineElement>
)

const q2d = () => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018"
        iconStyle={{ background: '#5cdb95', color: '#fff' }}
        icon={<FaFileCode/>}
    >
        <h3 className="vertical-timeline-element-title">
            Full stack developer
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
            Q2D Solutions i Lund AB, Lund
        </h4>

        <p>
            Employment for six months in which I worked with web frameworks
            such as Laravel, NodeJS, AngularJS and Bootstrap.
        </p>
    </VerticalTimelineElement>
)

const finnmedicin = () => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019"
        iconStyle={{ background: '#05386b', color: '#fff' }}
        icon={<FaLaptopCode/>}
    >
        <h3 className="vertical-timeline-element-title">
            Full stack developer
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
            Finn Medicinen Scandinavia AB, Malmö
        </h4>

        <p>
            Employment for eight months in which I worked with languages and
            frameworks such as ExpressJS, ReactJS, TypeScript, PassportJS,
            Semantic UI and Bulma css.
        </p>
    </VerticalTimelineElement>
)

export default Resume
