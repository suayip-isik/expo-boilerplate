import { render } from "@testing-library/react-native";
import { HelloText } from "../../../src/components";
import renderer from "react-test-renderer";

describe("HelloText", () => {
  it("display Bonjour in French", () => {
    const { getByText } = render(<HelloText language="fr" name="Şuayip" />);
    expect(getByText("Bonjour Şuayip")).toBeTruthy();
  });

  it("display Hello in English", () => {
    const { getByText } = render(<HelloText language="en" name="Şuayip" />);
    expect(getByText("Welcome Şuayip")).toBeTruthy();
  });

  it("display Merhaba in Turkish", () => {
    const { getByText } = render(<HelloText language="tr" name="Şuayip" />);
    expect(getByText("Hoş geldin Şuayip")).toBeTruthy();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<HelloText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
