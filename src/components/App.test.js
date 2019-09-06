import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import { italic } from "ansi-colors";

const app = shallow(<App />);

it("renders without crashing ", () => {
  let div = document.createElement("div");
  expect(app).toMatchSnapshot();
});
