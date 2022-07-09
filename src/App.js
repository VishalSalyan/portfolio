import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./component/Navbars";
import AboutMe from "./component/AboutMe";
import Skills from "./component/Skills";
import Portfolio from "./component/Portfolio";
import ContactMe from "./component/ContactMe";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
  
    this.state = {
      skillData:{
        heading:["Android Develpment","Front End Web Development"],
        content:[
          ["Core Java","Kotlin","Sqlite","Shared Preference","Firebase Realtime Database",
          "Firebase Analytics","Google Maps SDK","Google Geocoder","Mapbox","HERE","BlockChain",
          "Retrofit Library","Volley Library","Gson Library","Animation"],
        ["HTML5","CSS3","JavaScript","Node.js","React Js"]
      ]
      }
    };
  }
  render() {
    return (
      <>
        <div>
          <Navbars />
        </div>
        <div style={{ marginTop: "56px" }}>
          <AboutMe />
          <Skills 
          skillData={this.state.skillData}
          />
          <Portfolio />
          <ContactMe />
        </div>
      </>
    );
  }
}
export default App;
