import Navbar from "Components/Navbar/navbar";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import * as ROUTES from "Constants/route";
import { NavBackgroundProvider } from "context/navbar-context";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Navbar />", () => {
  const customRender = (ui) => {
    return render(<Router>{ui}</Router>);
  };
  it("should have logo with transparent background", () => {
    const { container, getByText } = customRender(
      <Navbar>
        <Navbar.Container>
          <Navbar.Logo to={ROUTES.HOME}>Some logo here</Navbar.Logo>
          <Navbar.Menu>
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
    const { container } = customRender(
      <Navbar isScrolled={true}>
        <Navbar.Container>
          <Navbar.Logo to={ROUTES.HOME}>Some logo here</Navbar.Logo>
          <Navbar.Menu>
            <Navbar.Item to={ROUTES.ABOUT}>Link one</Navbar.Item>
            <Navbar.Item to={ROUTES.CONTACT}>Link two</Navbar.Item>
            <Navbar.Item to={ROUTES.SERVICES}>Link three</Navbar.Item>
          </Navbar.Menu>
        </Navbar.Container>
      </Navbar>
    );
    expect(container.firstChild).toHaveStyleRule("background-color", "#353535");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should toggle the burger menu in smaller devices", () => {
    const { container, getByTestId } = customRender(
      <Navbar>
        <Navbar.Container>
          <Navbar.Burger>
            <span />
            <span />
            <span />
          </Navbar.Burger>
          <Navbar.Menu></Navbar.Menu>
        </Navbar.Container>
      </Navbar>
    );

    expect(getByTestId("nav-menu")).toHaveStyleRule("max-height", "0px", {
      media: "(max-width: 768px)",
    });
    fireEvent.click(getByTestId("burger"));
    expect(getByTestId("nav-menu")).toHaveStyleRule("max-height", "300px", {
      media: "(max-width: 768px)",
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
