import React from 'react';
import Image from 'react-bootstrap/Image';

import './InConstruction.css';

import doggo from './images/doggo.jpeg';

class InConstruction extends React.Component {
    render() {
        return (
            <div className="BaseDiv" responsive>
                <br/>
                <Image src={doggo} fluid style={{padding: "10px", maxHeight: "50vh"}}></Image>
                <h3>This page is still under construction... in the meantime, here's a doggo from Vienna!</h3>
            </div>
        );
    }

    componentDidMount(){
        const navHeight = document.querySelector("nav").offsetHeight
        document.querySelector(".BaseDiv").style.height =`${window.innerHeight-(navHeight)}px`
    }
}

export default InConstruction;