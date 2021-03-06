import React from "react";
import { render } from "react-dom";
import MyComponent, {MyNamedComponent} from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <MyComponent color="brown">Wow what a button</MyComponent>
      <MyNamedComponent>My name is Mariusz Sygnowski</MyNamedComponent>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
