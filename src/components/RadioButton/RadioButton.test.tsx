import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";
import "@testing-library/jest-dom/extend-expect";

test("RadioButton is disabled when the disabled prop is true", () => {
  render(<RadioButton disabled={true} />);
  const radioElement = screen.getByRole("radio");
  expect(radioElement).toBeDisabled();
  expect(radioElement).toHaveStyle("cursor: not-allowed");

  const labelElement = screen.getByText("Radio Button");
  fireEvent.mouseOver(labelElement);
  expect(labelElement).toHaveStyle("cursor: not-allowed");
  expect(labelElement).toHaveStyle("background-color: grey");
});

test("RadioButton is enabled and changes color to green when the disabled prop is false", () => {
  render(<RadioButton disabled={false}  />);
  const radioElement = screen.getByRole("radio");
  expect(radioElement).not.toBeDisabled();
  expect(radioElement).toHaveStyle("cursor: pointer");

  const labelElement = screen.getByText("Radio Button");
  fireEvent.mouseOver(labelElement);
  expect(labelElement).toHaveStyle("cursor: pointer");
  expect(labelElement).toHaveStyle("background-color: green");
});
test("RadioButton is visible", () => {
  render(<RadioButton />);
  const radioElement = screen.getByRole("radio");
  expect(radioElement).toBeVisible();
});