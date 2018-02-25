import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const defaultReview = {
  _account: "",
  review: "",
  id: ""
}

const Review = ({name, photo, review, date}) => {

  return (<div className="mb-3">
    <Card>
      <CardBody>
        <div className="d-flex">
          <img className="avatar mr-3" src={photo} alt="avatar"/>
          <div>
            <CardTitle className="mb-1">{name}</CardTitle>
            <CardSubtitle className="text-muted">
              <small>{date}</small>
            </CardSubtitle>
          </div>
        </div>
        <hr/>
        <div className="text-justify">
          {review}
        </div>
      </CardBody>
    </Card>
  </div>);
};

export default Review;
