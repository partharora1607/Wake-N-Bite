import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

test("Testing the Header component rendering", () => {
  // render on js - dom
  render(<Header />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
