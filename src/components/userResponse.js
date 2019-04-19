import React from "react";
import {Card, CardTitle, CardText, CardBody} from "reactstrap";

const UserResponse = props => {
  return (
    <div style={{position: "relative", width: "90%"}}>
      <Card body inverse color="danger">
        <CardBody>
          <CardTitle>
            <span style={{color: "blue"}}>You</span>
          </CardTitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
      <br />
    </div>
  );
};

export default UserResponse;
