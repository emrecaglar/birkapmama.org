import React, { Component } from 'react'
import './BackgroundVideo.css'

export default class BackgroundVideo extends Component {
    render() {
        return (
            <div id="bg-video">
                <video autoPlay loop id="video-background" muted plays-inline><source src={this.props.src} type="video/mp4" /></video>
            </div>
        );
    }
}