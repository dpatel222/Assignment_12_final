import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom/extend-expect";

test("Button is disabled when the disabled prop is true", () => {
  render(<Button data-testid="test-button" label="Click" disabled={true} />);
  const buttonElement = screen.getByTestId("test-button");
  expect(buttonElement).toBeDisabled();
});

test("Button is not disabled when the disabled prop is false", () => {
  render(<Button data-testid="test-button" label="Click" disabled={false} />);
  const buttonElement = screen.getByTestId("test-button");
  expect(buttonElement).not.toBeDisabled();
});
test("Button is visible", () => {
  render(<Button data-testid="test-button" label="Click" />);
  const buttonElement = screen.getByTestId("test-button");
  expect(buttonElement).toBeVisible();
});