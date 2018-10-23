import React from 'react'
//import { Link } from 'gatsby'
import logo from '../images/sandvine-white.png'
import './css/header.css'
import DropDown from './dropDown'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shownDropDown1: '',
            displayBool: false,
        }
        this.toggleDropDown = this.toggleDropDown.bind(this)
    }
    toggleDropDown(shownDropDown) {
        return e => {
            e.preventDefault()
            this.setState({
                shownDropDown1: shownDropDown,
                displayBool: !this.state.displayBool,
            })
        }
    }
    render() {
        return (
            <>
                <header className={`header`}>
                    <div id="navTop">
                        <a href="/#home">
                            <img id="logo" src={logo} />
                        </a>
                        <div id={`navIcons`}>
                            <a href="#mail"
                                onClick={this.toggleDropDown("mail")}>
                                <i className={`demoIcon iconMail`}>&#xe802;</i>
                            </a>
                            <a href="#help"
                                onClick={this.toggleDropDown("help")}>
                                <i className={`demoIcon iconQuestionCircleO`}>
                                    &#xf29c;
                                </i>
                            </a>
                            <a
                                href="#profile"
                                onClick={this.toggleDropDown("profile")}
                            >
                                <i className={`demoIcon iconUserCircleO`}>
                                    &#xf2be;
                                </i>
                            </a>
                        </div>
                    </div>
                </header>
                <nav id="mainNav">
                    <a href="#">|||</a>
                    <a href="#1">Operational Data</a>
                    <a href="#2">Deep insights</a>
                    <a href="#3">Elements</a>
                    <a href="#4">Customer Care</a>
                    <a href="#5">Regulatory Compliance</a>
                </nav>
                <DropDown
                    whichDropDown={this.state.shownDropDown1}
                    displayToggle={this.state.displayBool}
                />
            </>
        )
    }
}
export default Header
