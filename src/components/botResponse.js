import React from "react";
import {Card, CardTitle, CardText, CardBody} from "reactstrap";

const BotResponse = props => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        transform: "translateX(10%)"
      }}
    >
      <Card body inverse color="info">
        <CardBody>
          <CardTitle>
            <span style={{color: "red"}}>Bot</span>
          </CardTitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
      <br />
    </div>
  );
};

export default BotResponse;
