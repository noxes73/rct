import React from "react";
import Child from "./Child";
import { Context } from "./context";

class App extends React.Component {
  state = {
    contextStore: {
      theme: "light",
      onThemeChange: () => this.onThemeChange(),
      lightTheme: {
        buttonColor: "secondary",
        textColor: "black",
        bgColor: "white",
      },
      darkTheme: {
        buttonColor: "inverted",
        textColor: "white",
        bgColor: "black",
      },
      presentTheme: {
        buttonColor: "secondary",
        textColor: "black",
        bgColor: "white",
      },
    },
  };

  onThemeChange = () => {
    this.setState((prevState) => {
      if (prevState.contextStore.theme === "white") {
        prevState.contextStore.theme = "dark";
        prevState.contextStore.presentTheme = prevState.contextStore.darkTheme;
      } else {
        prevState.contextStore.theme = "white";
        prevState.contextStore.presentTheme = prevState.contextStore.lightTheme;
      }
      return prevState;
    });
  };
  render() {
    return (
      <div>
        <Context.Provider value={this.state.contextStore}>
          <Child></Child>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
