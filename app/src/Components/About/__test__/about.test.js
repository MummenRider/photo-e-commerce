import React from "react";
import { cleanup, render } from "@testing-library/react";
import AboutSection from "../about";

afterEach(cleanup);

it("should render about component", () => {
  const { container } = render(<AboutSection />);

  expect(container.firstChild).toMatchSnapshot();
});
