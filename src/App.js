import React from "react"
import Router from './router'
//引入全局css
import "./assets/css/reset.css"
import Nav from "./components/nav/nav"

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <Nav></Nav> */}
        <Router />
      </div>

    );
  }
}

export default App