import React from "react"
import {default as Layout} from "../templates/LayoutDefault"
import {Row, Col, Container, Input,Button} from "reactstrap"
import ThumbnailBook from "../medium/ThumbnailBook"
import AmenitiesDetail from "../small/AmenitiesDetail"
import Carousel from "../medium/Carousel"
import Review from "../medium/Review"

const Topic = ({match}) => {
  const topic = {
    id: match.params.id
  }

  return (<Layout>
    <Row>
      <Col sm={8}>
        <h2>
          <b>Impact Hub Jakarta</b>
        </h2>
        <b>Joined September 2018</b>
        <h4 className="mt-3">
          <b>Overview</b>
        </h4>
        <p className="text-justify">The open air coworking space offers 24/7 access and features a large wooden deck with fans and hotdesks, allowing you to get some work done while also enjoying the warm tropical breeze and surrounding fauna. They also have event and meeting rooms with air conditioning for those who want to chill. The onsite café serves up healthy and delicious food options and tasty beverages. There are also hammocks for when you want to take a break and enjoy some afternoon sun. Kohub has a friendly community vibe and hosts regular social events and workshops which attract start-ups, entrepreneurs, designers, writers, web developers and programmers.</p>
        <h4>
          <b>Amenities</b>
        </h4>
        <Row className="mb-2">
          <AmenitiesDetail/>
          <AmenitiesDetail/>
          <AmenitiesDetail/>
          <AmenitiesDetail/>
          <AmenitiesDetail/>
          <AmenitiesDetail/>
          <AmenitiesDetail/>
          <AmenitiesDetail/>
        </Row>
        <h4>
          <b>Photos</b>
        </h4>
        <Carousel/>
        <Input className="mb-1" type="textarea" name="review" id="review" placeholder="Share your experiences..."/>
        <Button className="mb-3" color="primary" size="sm" block>Submit</Button>

        <h4>
          <b>32 Reviews</b>
        </h4>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
      </Col>
      <Col sm={4}>
        <ThumbnailBook/>
      </Col>

    </Row>

  </Layout>)
}

export default Topic
