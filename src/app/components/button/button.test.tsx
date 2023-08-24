import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import { Button } from ".";

test("button", () => {
  render(<Button />);
  const button = within(screen.getByRole("button"));
  expect(button).toBeDefined();
});
