import React from 'react'
import p5 from 'p5'

class Playground extends React.Component {
    constructor(props) {
        super(props)
        this.p5Ref = React.createRef()
    }

    Playground = (p) => {
        var selectedColor = "#ffffff";
        var piet = ["#225095", "#d4121a", "#fac901", "#0e2721", "#ffffff"];
        var pietIndex = 0;

        p.setup = () => {
            p.createCanvas(400,400)

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
            if (pietIndex + 1 === 5) {
                pietIndex = 0;
            } else {
                pietIndex++;
            }
        }

        p.keyReleased = () => {
            if (p.keyCode === p.RIGHT_ARROW) {
              p.nextColor();
            }
            return false;
          }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Playground, this.p5Ref.current)
    }

    render() {
        return (
            <div ref={this.p5Ref} />
        )
    }
}

export default Playground