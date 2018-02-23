import React from "react"
// import PropTypes from "prop-types"
import {Pagination, PaginationItem, PaginationLink} from "reactstrap"

const ListPagination = () => (<Pagination className="mt-2">
  <PaginationItem>
    <PaginationLink previous="previous" href="#"/>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink next="next" href="#"/>
  </PaginationItem>
</Pagination>)

export default ListPagination
