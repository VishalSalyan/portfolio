import React from "react";
import "../App.css";
// import skillsBackground from './skillsBackground.png'

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillData: {
        heading: [],
        content: [[], []],
      },
    };
  }

  render() {
    return (
      <div className="skills" id="skills">
        {/* <img style={{height:100, width:100, zIndex:-1}} src={{skillsBackground}} alt='skillsBackground'/> */}
        <div className="skills-text">
          <div style={{ marginRight: 100 }}>
            <h4 className="skills-heading">
              {this.props.skillData.heading[0]}
            </h4>
            <ul className="">
              {this.props.skillData.content[0].map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="skills-heading">
              {this.props.skillData.heading[1]}
            </h4>
            <ul className="">
              {this.props.skillData.content[1].map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
