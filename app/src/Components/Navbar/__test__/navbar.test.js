import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "jest-styled-components";
import { Hamburger, Menu } from "Components/Navbar/navbar.styles.js";
import renderer from "react-test-renderer";
import Navbar from "Components/Navbar/navbar.js";
import { act } from "react-dom/test-utils";
import { useInView } from "react-intersection-observer";
import {
  mockAllIsIntersecting,
  mockIsIntersecting,
} from "react-intersection-observer/test-utils";
import styled from "styled-components";
afterEach(cleanup);

const links = [
  { text: "ABOUT", location: "/about" },
  { text: "SERVICES", location: "/services" },
  { text: "CONTACT", location: "/contact" },
];

it("should render navbar component", () => {
  const { container } = render(
    <Router>
      <Navbar />
    </Router>
  );

  expect(container.firstChild).toMatchSnapshot();
});

describe("intersection observer in Navbar", () => {
  const Header = styled.header`
    background-color: ${(props) =>
      props.isScrolled ? "black" : "transparent"};
  `;

  const HeroSection = styled.section``;
  const MockNavbar = () => {
    const { ref, inView } = useInView();
    return (
      <Header isScrolled={inView}>
        {inView.toString()}
        <HeroSection ref={ref} />
      </Header>
    );
  };

  it("should create a hook inView", () => {
    render(<MockNavbar />);

    mockAllIsIntersecting(false);
    screen.getByText("false");

    mockAllIsIntersecting(true);
    screen.getByText("true");
  });

  it("should have transparent background initially", () => {
    const { container } = render(<MockNavbar />);

    mockAllIsIntersecting(true);
    expect(container.firstChild).toHaveStyleRule("background-color", "black");
  });

  it("should change the color when scrolled down", () => {
    const { container } = render(<MockNavbar />);

    mockAllIsIntersecting(false);
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "transparent"
    );
  });
});

describe("anchor tag", () => {
  it("logo is visible and is linked to home page", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const logo = screen.getByTestId("logo");
    expect(screen.getByText("LOGO")).toBeVisible();
    expect(logo).toHaveAttribute("href", "/");
  });

  it.each(links)("Nav Bar have %s link.", (link) => {
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
