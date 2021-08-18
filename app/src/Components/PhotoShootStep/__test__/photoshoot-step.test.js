import { render } from "@testing-library/react";

describe("<PhotoShootStep />", () => {
  it("should render <PhotoShootStep /> with data populated", () => {
    const { getByText } = render(
      <PhotoShootStep>
        <PhotoShootStep.Left>
          <PhotoShootStep.Title>This block is a title</PhotoShootStep.Title>
          <PhotoShootStep.Subtitle>Subtitle here</PhotoShootStep.Subtitle>
          <PhotoShootStep.List>
            <PhotoShootStep.Item>First step</PhotoShootStep.Item>
          </PhotoShootStep.List>
          <PhotoShootStep.ContactBtn />
        </PhotoShootStep.Left>

        <PhotoShootStep.Right>
          <PhotoShootStep.Image />
        </PhotoShootStep.Right>
      </PhotoShootStep>
    );

    expect(getByText("This block is a title")).toBeTruthy();
    expect(getByText("Subtitle here")).toBeTruthy();
    expect(getByText("First step")).toBeTruthy();
  });
});
