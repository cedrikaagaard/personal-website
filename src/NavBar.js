import React from 'react'
import {Navbar, Level} from "react-bulma-components/full";
import {AwesomeButton} from "react-awesome-button";
import {Icon} from "react-fa";

import Zoom from 'react-reveal/Zoom'


const NavBar = () => {
    return (
        <div/>
    )


    return (
        <Navbar
            active={false}
            transparent={true}
            color='primary'
        >

            <Navbar.Menu active={true}>
                <Navbar.Container>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item
                        href='https://github.com/cedrikaagaard/personal-website'
                    >
                        <Zoom delay={1000}>
                        <AwesomeButton type="primary">
                            <Icon name="github" />
                            <span style={{paddingLeft: 10}}>
                                This website on Github
                            </span>
                        </AwesomeButton>
                        </Zoom>
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Burger>
                    etst
                </Navbar.Burger>
            </Navbar.Menu>
        </Navbar>
    )
}

export default NavBar
