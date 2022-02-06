import React from 'react';
import './TechStack.css';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import pnf from './images/pnf.gif';
import logo_netlify from './images/logo-netlify.png';

class TechStack extends React.Component {
    render() {
        return (
            <div className="BaseDiv">
                <Image src={pnf} fluid style={{padding: "10px", maxHeight: "50vh"}}></Image>
                <h2>primary five was made with the following components:</h2>
                <Container>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>tool</th>
                            <th>what it's used for</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Image src={logo_netlify} fluid style={{padding: "10px", maxHeight: "50px"}}></Image></td>
                            <td>Netlify automates the deployment of the React frontend</td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
            </div>
        );
    }

    componentDidMount() {
        const navHeight = document.querySelector("nav").offsetHeight
        document.querySelector(".BaseDiv").style.height = `${window.innerHeight - (navHeight)}px`
    }
}

export default TechStack;