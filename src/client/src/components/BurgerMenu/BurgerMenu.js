import React, { Component } from 'react'
import './BurgerMenu.css'

export default class BurgerMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open:false
        };
    }

    clickHandler(event) {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        return (
            <div className={this.state.open ? 'menu-expanded' : 'menu-collapsed'}>
                <div className="bar" onClick={this.clickHandler.bind(this)}></div>
                <nav>
                    <ul>
                        <li><a href="#">Destekçilerimiz</a></li>
                        <li><a href="#">Hikayeler</a></li>
                        <li><a href="#">İletişim</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}