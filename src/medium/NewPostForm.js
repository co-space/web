import React from "react"
import { Col } from "reactstrap"
import { Form, FormGroup, FormText, Input } from "reactstrap"

import ActionButton from "../small/ActionButton"

const NewPostForm = ({ submitNewPostData }) => (
  <Form
    className="new post form"
    onSubmit={e => {
      e.preventDefault()
      submitNewPostData()
    }}
  >
    <FormGroup row>
      <Col>
        <Input
          type="text"
          name="postTitle"
          id="postTitle"
          placeholder="Your post title here"
        />
        <FormText color="muted">Example: Hello the world of Internet</FormText>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Col>
        <Input
          type="text"
          name="postImage"
          id="postImage"
          placeholder="Insert JPG/PNG formatted image URL"
        />
        <FormText color="muted">
          Example:
          https://google.co.id/images/branding/logo/googlelogo_color.png
        </FormText>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Col>
        <Input
          type="textarea"
          name="postContent"
          id="postContent"
          placeholder="Write your post story here...."
          rows={12}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Col>
        <ActionButton>Save Post</ActionButton>
      </Col>
    </FormGroup>
  </Form>
)

export default NewPostForm
