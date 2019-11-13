import React, { Component } from 'react'
import backArrow from "./img/back-arrow.png";
import { NavLink } from "react-router-dom";
export default class back extends Component {
    render() {
        return (
            <div>
              <NavLink to="/"><img src={backArrow} alt="back" className="back" width="35" height="35"/> </NavLink>
            </div>
        )
    }
}
