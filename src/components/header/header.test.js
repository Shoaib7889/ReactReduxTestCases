import React, { useEffect } from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttrr } from "../../../Utils";

const setUP = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setUP();
  });

  it("Should render without errors", () => {
    const component = setUP();
    const wrapper = findByTestAttrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a img logo", () => {
    const component = setUP();
    const logo = findByTestAttrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
