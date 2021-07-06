import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "..";
import "jest-styled-components";
import { Hamburger, Menu, MenuLink } from "../navbar.styles";
import renderer from "react-test-renderer";

afterEach(cleanup);

const links = [
  { text: "ABOUT", location: "/about" },
  { text: "SERVICES", location: "/services" },
  { text: "CONTACT", location: "/contact" },
];

test("should render navbar component", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const navbarElement = screen.getByTestId("nav");
  expect(navbarElement).toBeInTheDocument();
});

describe("anchor tag", () => {
  test("logo is visible and is linked to home page", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const logo = screen.getByTestId("logo");
    expect(screen.getByText("LOGO")).toBeVisible();
    expect(logo).toHaveAttribute("href", "/");
  });

  test.each(links)("Nav Bar have %s link.", (link) => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const linkDom = screen.getByText(link.text);
    expect(linkDom).toHaveAttribute("href", link.location);
  });
});

describe("in mobile mode", () => {
  test("hamburger value should be hidden", () => {
    const { container } = render(<Hamburger />);
    expect(container.firstChild).toHaveStyleRule("display", "none");
  });

  test("hamburger value should be visible", () => {
    const { container } = render(<Hamburger />);
    expect(container.firstChild).toHaveStyleRule("display", "flex", {
      media: "(max-width: 768px)",
    });
  });
  test("menu links should be hidden", () => {
    const tree = renderer.create(<Menu isOpen />).toJSON();
    expect(tree).not.toHaveStyleRule("max-height", "0px", {
      media: "(max-width: 768px)",
    });
  });

  test("menu links should be visible", () => {
    const tree = renderer.create(<Menu isOpen />).toJSON();
    expect(tree).toHaveStyleRule("max-height", "300px", {
      media: "(max-width: 768px)",
    });
  });
});
