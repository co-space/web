import React from 'react'
import {Row, Col, Container} from 'reactstrap'
import { default as Layout } from "../templates/LayoutDefault"
import InfoMenu from '../medium/InfoMenu'


const Details = props => (

  <Layout>
    <Container>
      <Row>
        <Col xs="8">
          <InfoMenu/>
        </Col>
        <Col xs="4">
        </Col>
      </Row>
    </Container>
  </Layout>

)

export default Details
