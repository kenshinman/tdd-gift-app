import React from "react";
import { shallow } from "enzyme";
import App from "../App";

const app = shallow(<App />);

it("renders without crashing ", () => {
  let div = document.createElement("div");
  expect(app).toMatchSnapshot();
});

it("initializes the `state` with empty gifts array", () => {
  expect(app.state().gifts).toEqual([]);
});

it("add gift to list", () => {
  app.find(".btn-add").simulate("click");
  expect(app.state().gifts).toEqual([{ id: 1 }]);
});
