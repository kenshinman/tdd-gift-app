import React from "react";
import { shallow } from "enzyme";
import App from "../App";

const app = shallow(<App />);

describe("App", () => {
  it("renders without crashing", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes the `state` with empty gifts array", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking add button", () => {
    const id = 1;
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });
    //when clicking add button, adds new gift to state
    it("adds a new gift to `state`", () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });
    //when clicking add button, add new item to the list in dom
    it("adds a new gift to the rendered list", () => {
      expect(app.find(".gift-list").children().length).toEqual(id);
    });

    it("Creates a gift component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

    describe("and the user wants to remove the added gift", () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it("removes the gift from `state`", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
