import Navbar from "Components/Navbar/navbar";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import { NavBackgroundProvider } from "context/navbar-context";

describe("<Navbar />", () => {
  const customRender = (ui, { providerProps }) => {
    return render(
      <NavBackgroundProvider {...providerProps}>{ui}</NavBackgroundProvider>
    );
  };
  it("should have logo with transparent background", () => {
    const providerProps = {
      value: {
        navBackground: false,
      },
    };
    const { container, getByText } = customRender(
      <Navbar>
        <Navbar.Container>
          <Navbar.Logo>Some logo here</Navbar.Logo>
          <Navbar.Menu>
            <Navbar.Item>Link one</Navbar.Item>
            <Navbar.Item>Link two</Navbar.Item>
            <Navbar.Item>Link three</Navbar.Item>
          </Navbar.Menu>
        </Navbar.Container>
      </Navbar>,
      { providerProps }
    );

    expect(getByText("Some logo here")).toBeTruthy();
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "transparent"
    );
    expect(getByText("Link one")).toBeTruthy();
    expect(getByText("Link two")).toBeTruthy();
    expect(getByText("Link three")).toBeTruthy();
  });

  it("should toggle the burger menu in smaller devices", () => {
    const providerProps = {
      value: {
        navBackground: false,
      },
    };
    const { container, getByText, getByTestId, queryByTestId, debug } =
      customRender(
        <Navbar>
          <Navbar.Container>
            <Navbar.Burger>
              <span />
              <span />
              <span />
            </Navbar.Burger>
            <Navbar.Menu></Navbar.Menu>
          </Navbar.Container>
        </Navbar>,
        { providerProps }
      );

    expect(getByTestId("nav-menu")).toHaveStyleRule("max-height", "0px", {
      media: "(max-width: 768px)",
    });
    fireEvent.click(getByTestId("burger"));
    expect(getByTestId("nav-menu")).toHaveStyleRule("max-height", "300px", {
      media: "(max-width: 768px)",
    });
  });
});
