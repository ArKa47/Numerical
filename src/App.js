import React,{Component} from "react";
import ReactDOM from "react-dom";


class App extends Component {
  something = () =>{
    document.getElementById("pop").innerHTML = "YOLO" ;
  }
  componentDidMount() {
    const script = document.createElement("script");    script.async = true;    script.src = "./script/script_main.js";    this.div.appendChild(script);  }
  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>        <h1 id="pop" onClick={this.something}>Hello react</h1>
        {/* Script is inserted here */}
      </div>
    );
  }
}

export default App;