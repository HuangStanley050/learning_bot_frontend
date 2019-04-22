import React from "react";
import {Card, CardTitle, CardText, CardBody} from "reactstrap";

const BotResponse = props => {
  let wikiInformation = null;
  if (props.wiki) {
    wikiInformation = (
      <div>
        {props.wiki.map((info, i) => (
          <p key={i}>
            <a
              style={{color: "#82b587", backgroundColor: "black"}}
              rel="noopener noreferrer"
              target="_blank"
              href={info.link}
            >
              {info.title}
            </a>
          </p>
        ))}
      </div>
    );
  }
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
          {wikiInformation}
        </CardBody>
      </Card>
      <br />
    </div>
  );
};

export default BotResponse;
