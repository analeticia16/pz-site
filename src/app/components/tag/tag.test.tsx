import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import Tag from "./tag";

test("button", () => {
  render(<Tag> Tag test </Tag>);
  const tag = within(screen.getByText("Tag test"));
  expect(tag).toBeDefined();
});
