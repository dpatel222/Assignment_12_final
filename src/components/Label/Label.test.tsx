import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Label from "./Label";

test("Label has correct styles when the disabled prop is true", () => {
  render(<Label data-testid="test-label" text="Test Label" disabled={true} />);
  const labelElement = screen.getByTestId("test-label");
  expect(labelElement).toHaveStyle(`background-color: grey`);
  expect(labelElement).toHaveStyle(`cursor: not-allowed`);
});

test("Label has correct styles when the disabled prop is false", () => {
  render(<Label data-testid="test-label" text="Test Label" disabled={false} />);
  const labelElement = screen.getByTestId("test-label");
  expect(labelElement).toHaveStyle(`background-color: green`);
  expect(labelElement).toHaveStyle(`cursor: default`);
});
test("Label is visible", () => {
  render(<Label data-testid="test-label" text="Test Label" />);
  const labelElement = screen.getByTestId("test-label");
  expect(labelElement).toBeVisible();
});
