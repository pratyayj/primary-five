import React from 'react'
import './Home.css';


class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <h1>Welcome to my stage, canvas - my playground.</h1>
            </div>
        );
    }

    componentDidMount(){
        const navHeight = document.querySelector("nav").offsetHeight
        document.querySelector(".Home").style.height =`${window.innerHeight-(navHeight)}px`
    }
}

export default Home;