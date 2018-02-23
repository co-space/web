import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const Review = (props) => {
  return (<div className="mb-3">
    <Card>
      <CardBody>
        <div className="d-flex">
          <img className="avatar mr-3" src={`${process.env.REACT_APP_API_URL}/images/avatars/mhaidarh.jpg`} alt="avatar"/>
          <div>
            <CardTitle className="mb-1">Username</CardTitle>
            <CardSubtitle className="text-muted">
              <small>12 January 2018</small>
            </CardSubtitle>
          </div>
        </div>
        <hr/>
        <div className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing . Reprehenderit quam hic excepturi, aut expedita, doloremque nostrum incidunt corporis nihil dicta minus repellat blanditiis ex deleniti voluptas voluptatum. Necessitatibus, reprehenderit, repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio praesentium a officiis, sed fugiat non debitis reprehenderit voluptatem. Necessitatibus culpa inventore quod dolorum veniam, eius ratione fuga, ad vel fugit.
          </div>
      </CardBody>
    </Card>
  </div>);
};

export default Review;
