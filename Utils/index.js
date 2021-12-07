import checkPropTypes from "check-prop-types";

export const checkProps = (component, expectedprops) => {
  const propErr = checkPropTypes(
    component.propTypes,
    expectedprops,
    "props",
    component.name
  );
  return propErr;
};

export const findByTestAttrr = (component, attr) => {
  const componentt = component.find(`[data-test='${attr}']`);
  return componentt;
};
