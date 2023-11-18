import React from "react";
import renderer from "react-test-renderer";
import { MyButton } from "../../../src/components";
import { render, fireEvent } from "@testing-library/react-native";

describe("MyButton", () => {
  it("has one child", () => {
    const tree = renderer.create(<MyButton />).toJSON();
    expect(tree?.children?.length).toBe(1);
  });

  it("calls onPress function when the button is pressed", () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<MyButton onPress={mockOnPress} />);
    const pressMeButton = getByTestId("MyButton:Click:ClickMe");
    fireEvent.press(pressMeButton);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<MyButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
