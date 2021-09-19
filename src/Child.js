import React from "react";
import { Button } from "semantic-ui-react";
import { Context } from "./context";

class Child extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.context.presentTheme.bgColor,
          height: "100%",
          position: "absolute",
          width: "100%",
        }}
      >
        <p style={{ color: this.context.presentTheme.textColor }}>
          Okos oldal mert meg tudja változtatni a témáját.
        </p>
        <Button
          onClick={this.context.onThemeChange}
          secondary={
            this.context.presentTheme.buttonColor === "secondary" ? true : false
          }
          inverted={
            this.context.presentTheme.buttonColor === "inverted" ? true : false
          }
        >
          Abrakadabra
        </Button>
      </div>
    );
  }
}

Child.contextType = Context;

export default Child;
