import React, { Component } from 'react';

import Icon from 'react-icons-kit';
import {angleDoubleRight} from 'react-icons-kit/fa/angleDoubleRight'

class ArrowIcon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div 
                style={{
                    width: 36, 
                    height: 36,
                    color: "Tomato",

                    /* let it stay on top layout*/
                    zIndex: 999999,
                    position: "fixed",
                    
                    /* left_center the arrow */
                    top: 0, 
                    bottom: 0, 
                    marginTop: "auto", 
                    marginBottom: "auto", 
                }}

                onMouseOver={() => {
                    this.props.onMouseOver()
                }}
            >
                <Icon 
                    icon={angleDoubleRight}
                    size={'100%'} 
                />
            </div>
        )
    }
}

class Body extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div
                style={{
                    display: 'flex',  
                    justifyContent:'left', 
                    alignItems:'left', 

                    height: '100vh',
                    width: '10vw',

                    backgroundColor: "#C0C0C0",
                    overflowX: "hidden",
                }}

                onMouseOut={() => {
                    this.props.onMouseOut()
                }}
            > 
                <div
                    style={{
                        display: 'flex',  
                        justifyContent:'center', 
                        alignItems:'center', 
                    }}
                >
                    hi
                </div>
            </div>
        )
    }
}

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show_arrow: true,
            show_body: false,
        }
    }

    render() {
        return (
            <div
                style={{
                    zIndex: 999999, 
                    position: "fixed", 

                    display: 'flex',  
                    justifyContent:'left', 
                    alignItems:'left', 

                    height: '100vh',
                    width: '10vw',

                    backgroundColor: "#C0C0C0",
                    overflowX: "hidden",
                }}
                onMouseOver={() => {
                    console.log('in')
                }}
                onMouseOut={() => {
                    console.log('out')
                }}
            >
                <button
                    onClick={() => {
                        send_msg_to_background("say hi")
                    }}
                >hi</button>
            </div>
        )
    }
}

function send_msg_to_background(msg_for_sending) {
    chrome.runtime.sendMessage({
        msg: msg_for_sending
    }, function(response) {});
}

export default Navigation;