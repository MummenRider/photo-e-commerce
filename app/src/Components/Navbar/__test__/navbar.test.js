import Navbar from "Components/Navbar/navbar";
import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import * as ROUTES from "Constants/route";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Navbar />", () => {
  const customRender = (ui) => {
    return render(<Router>{ui}</Router>);
  };

  it("should have logo, nav links with transparent background", () => {
    const { container, getByText } = customRender(
      <Navbar>
        <Navbar.Container>
          <Navbar.Logo to={ROUTES.HOME}>Some logo here</Navbar.Logo>
          <Navbar.Menu isBigDevice={true}>
            <Navbar.Item to={ROUTES.ABOUT}>Link one</Navbar.Item>
            <Navbar.Item to={ROUTES.CONTACT}>Link two</Navbar.Item>
            <Navbar.Item to={ROUTES.SERVICES}>Link three</Navbar.Item>
          </Navbar.Menu>
        </Navbar.Container>
      </Navbar>
    );

    expect(getByText("Some logo here")).toBeTruthy();
    expect(getByText("Link one")).toBeTruthy();
    expect(getByText("Link two")).toBeTruthy();
    expect(getByText("Link three")).toBeTruthy();
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "transparent"
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should have colored background", () => {
    const { container } = customRender(<Navbar isScrolled={true} />);
    expect(container.firstChild).toHaveStyleRule("background-color", "#353535");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should not render burger icon", () => {
    const { container, debug, queryByTestId } = render(
      <Navbar.Button isBigDevice={true}>hi</Navbar.Button>
    );
    expect(screen.queryByTestId("menu-icon")).toBeFalsy();
  });

  it("should render burger icon", () => {
    const { container, debug, queryByTestId } = render(
      <Navbar.Button isBigDevice={false}>hi</Navbar.Button>
    );
    expect(queryByTestId("menu-icon")).toBeTruthy();
  });
});
