// __tests__/test.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("renders hello message", () => {
  render(<Home />);
  const helloElement = screen.getByText(/hello, next.js/i);
  expect(helloElement).toBeInTheDocument();
});
