import React from "react";
import { cleanup, render } from "@testing-library/react";
import { NavBackgroundProvider } from "context/navbar-context.js";
import AboutComponent from "Components/about/about";
import "react-intersection-observer/test-utils";

afterEach(cleanup);

it("should render about component", () => {
  const { container } = render(
    <NavBackgroundProvider>
      <AboutComponent />
    </NavBackgroundProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
