import { render } from "@testing-library/react";
import AbstractPhoto from "Components/AbstractPhoto/abstract-photo";
import p1 from "Assets/Images/abstract_img_1.jpg";
import p2 from "Assets/Images/abstract_img_2.jpg";
import p3 from "Assets/Images/abstract_img_3.jpg";
import p4 from "Assets/Images/abstract_img_4.jpg";

describe("<AbstractPhoto />", () => {
  it("should render <AbstractPhoto /> with populated data with image all visible", () => {
    const { container, getByText, queryAllByTestId } = render(
      <AbstractPhoto>
        <AbstractPhoto.LeftBlock>
          <AbstractPhoto.ImageBlockTwo>
            <AbstractPhoto.ImageItem src={p2} show={true} />
            <AbstractPhoto.ImageBlockOne>
              <AbstractPhoto.ImageItem src={p1} show={true} />
            </AbstractPhoto.ImageBlockOne>
            <AbstractPhoto.ImageBlockThree>
              <AbstractPhoto.ImageItem src={p3} show={true} />
            </AbstractPhoto.ImageBlockThree>
          </AbstractPhoto.ImageBlockTwo>
        </AbstractPhoto.LeftBlock>

        <AbstractPhoto.CenterBlock>
          <AbstractPhoto.Title>This is a title</AbstractPhoto.Title>
          <AbstractPhoto.Divider show={true} />
          <AbstractPhoto.Description>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </AbstractPhoto.Description>
        </AbstractPhoto.CenterBlock>

        <AbstractPhoto.RightBlock>
          <AbstractPhoto.ImageItem src={p4} position={"initial"} show={true} />
        </AbstractPhoto.RightBlock>
      </AbstractPhoto>
    );

    expect(getByText("This is a title")).toBeTruthy();
    expect(getByText(/Lorem/i)).toBeTruthy();
    expect(queryAllByTestId("abstract-img")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it("should not render image when show is set to false", () => {
    const { container, queryByTestId } = render(
      <AbstractPhoto.ImageItem show={false} />
    );

    expect(queryByTestId("abstract-img")).toBeFalsy();
    expect(container).toMatchSnapshot();
  });
});
