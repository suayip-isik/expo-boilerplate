import React from "react";
import { MyCamera } from "../../../src/components";
import { render, act } from "@testing-library/react-native";

describe("PhotoCamera Tests", () => {
  it("renders correctly", () => {
    const wrapper = render(<MyCamera />);
    expect(wrapper).toMatchSnapshot();
  });
});
