import React, { useEffect } from "react";
import { shallow } from "enzyme";

import Headline from ".";
import { findByTestAttrr, checkProps } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking prop types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const parent = findByTestAttrr(wrapper, "HeadlineComponent");
      expect(parent.length).toBe(1);
    });
    it("Should render a H1", () => {
      const h1 = findByTestAttrr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findByTestAttrr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAttrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
