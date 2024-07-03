import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Text from "./Text";

test("Text is disabled when the disabled prop is true", () => {
  render(<Text disabled={true}>This is an h1 tag for the text component</Text>);
  const textElement = screen.getByText(
    "This is an h1 tag for the text component"
  );

  fireEvent.mouseOver(textElement);
  expect(textElement).toHaveStyle("cursor: not-allowed");
  expect(textElement).toHaveStyle("background-color: grey");
});

test("Text is enabled and changes color to darkgrey when the disabled prop is false", () => {
  render(
    <Text disabled={false}>This is an h1 tag for the text component</Text>
  );
  const textElement = screen.getByText(
    "This is an h1 tag for the text component"
  );

  fireEvent.mouseOver(textElement);
  expect(textElement).toHaveStyle("cursor: pointer");
  expect(textElement).toHaveStyle("background-color: blue");
});

test("Text is visible", () => {
  render(<Text>This is an h1 tag for the text component</Text>);
  const textElement = screen.getByText(
    "This is an h1 tag for the text component"
  );
  expect(textElement).toBeVisible();
});
