import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Divider from "Components/Divider/divider";
import flower from "Assets/Images/flower.png";

afterEach(cleanup);

describe("<Divider />", () => {
  it("should render <Divider /> with button", () => {
    const handleClick = jest.fn();
    const { container, getByText } = render(
      <Divider>
        <Divider.Title>Some title here</Divider.Title>
        <Divider.Button destination={handleClick}>
          <Divider.ButtonText>Click me</Divider.ButtonText>
          <Divider.ButtonIcon>
            <Divider.ButtonIconPath />
          </Divider.ButtonIcon>
        </Divider.Button>
      </Divider>
    );
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render <Divider /> with data included", () => {
    const { container, getByText, getByAltText } = render(
      <Divider>
        <Divider.Title>Some title here</Divider.Title>
        <Divider.Subtitle>
          This is subtitle included in divider component
        </Divider.Subtitle>
        <Divider.ImageContent src={flower} alt="divider image" />
      </Divider>
    );
    expect(getByText("Some title here")).toBeTruthy();
    expect(
      getByText("This is subtitle included in divider component")
    ).toBeTruthy();
    expect(getByAltText("divider image")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render <Divider /> with just title", () => {
    const { container, getByText, queryByText } = render(
      <Divider>
        <Divider.Title>Some title here</Divider.Title>
      </Divider>
    );
    expect(getByText("Some title here")).toBeTruthy();
    expect(
      queryByText("This is subtitle included in divider component")
    ).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
