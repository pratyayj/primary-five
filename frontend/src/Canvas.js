import './Canvas.css';
import React from 'react'
import p5 from 'p5'

class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.p5Ref = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5(this.Canvas, this.p5Ref.current)
        const navHeight = document.querySelector("nav").offsetHeight
        document.querySelector(".BaseDiv").style.height =`${window.innerHeight-(navHeight)}px`
    }

    Canvas = (p) => {
        var selectedColor = "#225095";
        var piet = ["#d4121a", "#fac901", "#0e2721", "#225095"];
        var pietIndex = 0;

        p.setup = () => {
            p.createCanvas(400,400)
            p.strokeWeight(0);
            p.background(255);
        }

        p.draw = () => {
        }

        p.mouseClicked = () => {
            p.createShape();
        }

        p.createShape = () => {
            p.fill(selectedColor);
            p.quad(p.mouseX, p.mouseY, p.mouseX, p.mouseY+20, p.mouseX+40, p.mouseY+50, p.mouseX+40, p.mouseY+30);
            p.strokeWeight(0);
        }

        p.nextColor = () => {
            selectedColor = piet[pietIndex];
            if (pietIndex + 1 === 4) {
                pietIndex = 0;
            } else {
                pietIndex++;
            }
        }

        p.keyReleased = () => {
            if (p.keyCode === p.RIGHT_ARROW) {
              p.nextColor();
            }
            if (p.keyCode === 83) {
                p.saveCanvas("myCanvas", "jpg");
            }
            return false;
        }

    }

    render() {
        return (
            <div className="BaseDiv">
                <div ref={this.p5Ref} className="Canvas"/>
                <p>Click the right arrow to change color on Piet's palette. Click the 's' key to save.</p>
            </div>
        )
    }
}

export default Canvas