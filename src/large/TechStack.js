import React, {Component} from "react"

import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"
import PageTitle from "../medium/PageTitle"


const TechStack = props => (
  <Row id="SegmentLogin" className="center text-center fade-in-top" xs={12} md={8}>
    <div>
        <PageTitle>Tech Stack</PageTitle>
        <div >
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/react.png`} alt="Reactsrap"/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/redux.png`} alt="Redux"/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/reactstrap.png`} alt="Express"/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/filestack.png`} alt="Node JS"/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/github.png`} alt=""/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/heroku.png`} alt="Reactsrap"/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/netlify.png`} alt="Redux"/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/mongo.png`} alt="Express"/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/mongoose.jpg`} alt="Node JS"/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/nodejs.png`} alt=""/>
          <img className="cta" src={`${process.env.REACT_APP_API_URL}/images/stack/express.png`} alt=""/>
        </div>
    </div>
  </Row>
)

export default TechStack
