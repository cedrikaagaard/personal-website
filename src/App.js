import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './button.css';
import {Icon} from 'react-fa'
import { Button, Container, Columns, Title, Heading,
    Section, Level, Navbar, Image, Divider } from 'react-bulma-components/full'

import Welcome from './Welcome'



import Iframe from 'react-iframe'

import './App.sass'


import code from './code.png'

import './index.css'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaUniversity, FaPhone, FaMailBulk, FaGithub, FaTelegramPlane } from 'react-icons/fa';

import Particles from 'react-particles-js';

import Zoom from 'react-reveal/Zoom';
import About from "./About";

function App() {

  return (
      <div className='App'>
              <Navbar
                  active={false}
                  transparent={true}
                  color='primary'
              >

                  <Navbar.Menu active={true}>
                      <Navbar.Container>

                      </Navbar.Container>



                      <Navbar.Container position="end">
                          <Navbar.Item href="#">
                              {Coolbutton()}
                          </Navbar.Item>
                      </Navbar.Container>
                  </Navbar.Menu>
              </Navbar>

          <Welcome/>
          <About/>


          <Section style={{boxShadow: '10px 10px 5px', backgroundColor: '#05386b'}}>
              <Container style={{marginTop: 100, marginBottom: 100, textAlign: 'center'}}>
                  <Heading style={{marginBottom: 50, fontFamily: 'Fira Code', fontSize: 50, color: '#5cdb95'}}>
                      {'Cube Robot'}
                      <Heading subtitle>
                          High school graduation project
                      </Heading>
                  </Heading>

                  <Columns style={{marginTop: 100}}>
                      <Columns.Column>
                          <iframe src="https://drive.google.com/file/d/1RxIA8QeAKm215K_PmhdyqZlt4S7XzTSv/preview" width="265" height="480"></iframe>

                      </Columns.Column>
                      <Columns.Column>
                          <Container>
                              <Heading style={{color: '#5cdb95'}}>
                                  Built using C++
                              </Heading>
                              {Coolbutton()}
                          </Container>
                      </Columns.Column>
                  </Columns>
              </Container>
          </Section>


          <Section style={{backgroundColor: '#2f2f2f', boxShadow: '5px 5px 5px'}} shadow>
              <Container style={{marginTop: 50, marginBottom: 100, textAlign: 'center'}}>
                  <Zoom>
                  <Heading style={{marginBottom: 50, color:'white', fontFamily: 'Fira Code'}}>
                      {'Skills'}
                      <Heading subtitle>
                          I have professional experience in TypeScript, JavaScript, Node express.
                      </Heading>
                  </Heading>
                  </Zoom>

                  <Columns>

                      <Columns.Column>
                          <Zoom delay={250}>
                          <div style={{ width: 100, marginLeft: 'auto', marginRight: 'auto', marginBottom: -200}}>
                              <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'/>
                          </div>
                          </Zoom>
                      </Columns.Column>

                      <Columns.Column>
                          <Zoom delay={500}>
                          test
                          </Zoom>
                      </Columns.Column>
                      <Columns.Column>
                          <Zoom delay={750}>
                          test
                          </Zoom>
                      </Columns.Column>
                      <Columns.Column>
                          <Zoom delay={1000}>
                          test
                          </Zoom>
                      </Columns.Column>
                  </Columns>
              </Container>
          </Section>

          <Section style={{boxShadow: '5px 5px 5px'}}>
              <VerticalTimeline>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2011 - present"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<FaUniversity   />}
                  >
                      <h3 className="vertical-timeline-element-title">Creative Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                      <p>
                          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                      </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2010 - 2011"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  >
                      <h3 className="vertical-timeline-element-title">Art Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                      <p>
                          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                      </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2008 - 2010"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  >
                      <h3 className="vertical-timeline-element-title">Web Designer</h3>
                      <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                      <p>
                          User Experience, Visual Design
                      </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2006 - 2008"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  >
                      <h3 className="vertical-timeline-element-title">Web Designer</h3>
                      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                      <p>
                          User Experience, Visual Design
                      </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="April 2013"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  >
                      <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                      <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                      <p>
                          Strategy, Social Media
                      </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="November 2012"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  >
                      <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                      <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                      <p>
                          Creative Direction, User Experience, Visual Design
                      </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="2002 - 2006"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  >
                      <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                      <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                      <p>
                          Creative Direction, Visual Design
                      </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  />
              </VerticalTimeline>
          </Section>



          <Section style={{marginTop: 50, boxShadow: '10px 10px 5px'}}>
              <Container style={{marginBottom: 100, textAlign: 'center'}}>
                  <Heading style={{marginBottom: 50, fontFamily: 'Fira Code', fontSize: 50}}>
                      {'Contact'}
                      <Heading subtitle>
                          Feel free to contact me
                      </Heading>
                  </Heading>

                  <Columns style={{marginTop: 100}}>

                      <Columns.Column>
                          <Heading> <FaPhone/></Heading>
                          <Heading subtitle>+46 72 052 1582</Heading>
                      </Columns.Column>

                      <Columns.Column>
                          <Heading><FaMailBulk/></Heading>
                          <Heading subtitle>cedrikaagaard@gmail.com</Heading>
                      </Columns.Column>

                      <Columns.Column>
                          <Heading> <FaGithub/></Heading>
                          <Heading subtitle>github.com/cedrikaagaard</Heading>
                      </Columns.Column>
                  </Columns>
              </Container>
          </Section>

          <Section style={{marginTop: 50, boxShadow: '10px 10px 5px'}}>
              <Container style={{marginBottom: 100, textAlign: 'center'}}>
                  <Heading style={{marginBottom: 50, fontFamily: 'Fira Code', fontSize: 50}}>
                      {'About me'}
                      <Heading subtitle>
                          I'm a 20 year old guy from Sweden studying Masters of science in engineering in computer science at Lund University.
                      </Heading>
                  </Heading>

                  <Columns style={{marginTop: 100}}>
                      <Columns.Column width={6}>
                          <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                              <Image src='http://www.kforce.gradjevinans.net/images/LU2.png'/>
                          </div>
                      </Columns.Column>

                      <Columns.Column width={6}>
                          <Heading subtitle style={{fontSize: 20}}>
                              Currently studying for a masters of science in engineering in computer science.
                          </Heading>
                      </Columns.Column>
                  </Columns>

                  <Columns style={{marginTop: 100}}>
                      <Columns.Column width={6}>
                          <Heading subtitle style={{fontSize: 20}}>
                              Currently studying for a masters of science in engineering in computer science.
                          </Heading>
                      </Columns.Column>

                      <Columns.Column width={6}>
                          <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                              <Image src='https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/50229570_2081318298573887_3622989593474760704_n.jpg?_nc_cat=108&_nc_oc=AQmE-rFCD4se0d7yO-MBz4TSXMY12glSHRQmkBEVid4rThRJAdqdi8xgaxLKu8bXpCU&_nc_ht=scontent-amt2-1.xx&oh=f3add597d3dd55af86c52562c5cb2b9e&oe=5E06B4A2'/>
                          </div>
                      </Columns.Column>
                  </Columns>

                  <Columns style={{marginTop: 100}}>
                      <Columns.Column>
                          <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                              <Image src='http://www.kforce.gradjevinans.net/images/LU2.png'/>
                          </div>
                      </Columns.Column>

                      <Columns.Column>
                          <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                              <Image src='https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/50229570_2081318298573887_3622989593474760704_n.jpg?_nc_cat=108&_nc_oc=AQmE-rFCD4se0d7yO-MBz4TSXMY12glSHRQmkBEVid4rThRJAdqdi8xgaxLKu8bXpCU&_nc_ht=scontent-amt2-1.xx&oh=f3add597d3dd55af86c52562c5cb2b9e&oe=5E06B4A2'/>
                          </div>
                      </Columns.Column>

                      <Columns.Column>
                          <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                              <Image src='https://cdn1.iconfinder.com/data/icons/software-development-blue/64/programming-coding-structure-software-development-512.png'/>
                          </div>
                      </Columns.Column>
                  </Columns>
              </Container>
          </Section>

      </div>
  )
}


/*function App() {
  return (
    <div className="App">
        {Button()}
    </div>
  );
}


*/
function Coolbutton() {
  return (
    
    <AwesomeButton type="primary">
<Icon  name="github" />
<span style={{paddingLeft: 10}}>See project on Github</span>
</AwesomeButton>

  );
}

export default App;
