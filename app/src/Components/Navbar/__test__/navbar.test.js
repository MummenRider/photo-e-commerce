import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "jest-styled-components";
import { Hamburger, Menu, Header } from "Components/Navbar/navbar.styles.js";
import renderer from "react-test-renderer";
import Navbar from "Components/Navbar/navbar.js";
import {
  NavBackgroundProvider,
  NavBackgroundContext,
} from "context/navbar-context";
afterEach(cleanup);

const links = [
  { text: "ABOUT", location: "/about" },
  { text: "SERVICES", location: "/services" },
  { text: "CONTACT", location: "/contact" },
];

it("should render navbar component", () => {
  const { container } = render(
    <NavBackgroundProvider>
      <Router>
        <Navbar />
      </Router>
    </NavBackgroundProvider>
  );

  expect(container.firstChild).toMatchSnapshot();
});

describe("<NavBackgroundContext.Provider />", () => {
  const customRender = (ui, { providerProps }) => {
    return render(
      <NavBackgroundContext.Provider {...providerProps}>
        {ui}
      </NavBackgroundContext.Provider>
    );
  };

  it("should have transparent background initially", () => {
    const providerProps = {
      value: {
        navBackground: false,
      },
    };
    customRender(
      <Router>
        <Navbar />
      </Router>,
      { providerProps }
    );

    expect(screen.getByTestId("nav-header")).toHaveStyleRule(
      "background-color",
      "transparent"
    );
  });

  it("should have #353535 background color", () => {
    const providerProps = {
      value: {
        navBackground: true,
      },
    };
    customRender(
      <Router>
        <Navbar />
      </Router>,
      { providerProps }
    );

    expect(screen.getByTestId("nav-header")).toHaveStyleRule(
      "background-color",
      "#353535"
    );
  });
});

describe("in mobile mode", () => {
  it("hamburger value should be hidden", () => {
    const { container } = render(<Hamburger />);
    expect(container.firstChild).toHaveStyleRule("display", "none");
  });

  it("hamburger value should be visible", () => {
    const { container } = render(<Hamburger />);
    expect(container.firstChild).toHaveStyleRule("display", "flex", {
      media: "(max-width: 768px)",
    });
  });

  it("menu links should be hidden", () => {
    const tree = renderer.create(<Menu isOpen />).toJSON();
    expect(tree).not.toHaveStyleRule("max-height", "0px", {
      media: "(max-width: 768px)",
    });
  });

  it("menu links should be visible", () => {
    const tree = renderer.create(<Menu isOpen />).toJSON();
    expect(tree).toHaveStyleRule("max-height", "300px", {
      media: "(max-width: 768px)",
    });
  });
});
