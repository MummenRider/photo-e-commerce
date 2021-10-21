import React from "react";
import { render, cleanup } from "@testing-library/react";
import Divider from "Components/Divider/divider";

afterEach(cleanup);

describe("<Divider />", () => {
  it("should render <Divider /> with data included", () => {
    const { container, getByText } = render(
      <Divider show={true}>
        <Divider.TextContainer>
          <Divider.Title>Some title here</Divider.Title>
          <Divider.Subtitle>
            This is subtitle included in divider component
          </Divider.Subtitle>
        </Divider.TextContainer>
      </Divider>
    );
    expect(getByText("Some title here")).toBeTruthy();
    expect(
      getByText("This is subtitle included in divider component")
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render <Divider /> with just title", () => {
    const { container, getByText, queryByText } = render(
      <Divider show={true}>
        <Divider.Title>Some title here</Divider.Title>
      </Divider>
    );
    expect(getByText("Some title here")).toBeTruthy();
    expect(
      queryByText("This is subtitle included in divider component")
    ).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should not render <Divider /> when show is set to false", () => {
    const { container, queryByTestId } = render(
      <Divider show={false}>
        <Divider.Title>Some title here</Divider.Title>
      </Divider>
    );

    expect(queryByTestId("divider")).toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
});
