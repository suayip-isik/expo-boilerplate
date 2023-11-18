import { render, waitFor } from "@testing-library/react-native";
import { CatFacts } from "../../../src/components";

describe("CatFacts", () => {

  //
  it("display no cat fact", () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    const { findByText } = render(<CatFacts />);
    const catElement = findByText("No Cat Facts!");

    expect(catElement).toBeTruthy();
  });
});
