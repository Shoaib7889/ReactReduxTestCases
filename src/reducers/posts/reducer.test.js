import { types } from "../../actions/types";
import postReducer from "./reducer";

describe("Post Reducer", () => {
  it("Should return default state", () => {
    let newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return newState if type passes", () => {});
});
