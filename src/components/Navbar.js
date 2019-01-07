import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import{
    NavLink
} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <NavLink to="/" id="logogroup">
                    <div id="logoimage"></div>
                    <div id="logotext">Vastestness</div>
                </NavLink>
                <div id="exploregroup">
                    <UncontrolledDropdown id="uncontrolleddropdown" nav inNavbar>
                        <DropdownToggle id="explorebutton" nav caret>
                            EXPLORE
                </DropdownToggle>
                        <DropdownMenu left="true">
                            <NavLink to="/post/art" className="exploreoptions">
                                Art
                            </NavLink>
                            <NavLink to="/post/music" className="exploreoptions">
                                Music
                            </NavLink>
                            
                            <NavLink to="/post/code" className="exploreoptions">
                                Code
                            </NavLink>
                            
                            <DropdownItem className="exploreoptions" divider />
                            <NavLink to="/tools" className="exploreoptions">
                                Tools
                            </NavLink>
                            
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
                <div id="searchgroup">
                    <form id="searchform">
                        <input type="text" placeholder="Search"></input>
                        <button id="searchbutton"></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Navbar;
