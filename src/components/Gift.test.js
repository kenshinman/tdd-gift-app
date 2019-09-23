import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes a person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: "", gift: "" });
  });

  describe("when typing into person input", () => {
    const personString = "Uncle";
    const giftString = "bike";
    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: personString } });
    });

    it("updates the person in state", () => {
      expect(gift.state().person).toEqual(personString);
    });
  });
  describe("when typing into gift input", () => {
    const giftString = "bike";
    beforeEach(() => {
      gift
        .find(".input-gift")
        .simulate("change", { target: { value: giftString } });
    });

    it("updates the gift in state", () => {
      expect(gift.state().gift).toEqual(giftString);
    });

    it("when clicking the `remove gift` button", () => {
      beforeEach(() => {
        gift.find(".btn-remove").simulate("click");
      });
    });
  });
  describe("when clicking `Remove Gift` button", () => {
    beforeEach(() => {
      gift.find(".btn-remove").simulate("click");
    });

    it("calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
