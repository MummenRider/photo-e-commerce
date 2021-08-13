import AbstractPhoto from "Components/AbstractPhoto/abstract-photo";
import p1 from "Assets/Images/abstract_img_1.jpg";
import p2 from "Assets/Images/abstract_img_2.jpg";
import p3 from "Assets/Images/abstract_img_3.jpg";
import p4 from "Assets/Images/abstract_img_4.jpg";
import { useMediaQuery } from "react-responsive";

export function AbstractPhotoContainer() {
  const isBigDevice = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <AbstractPhoto>
      <AbstractPhoto.LeftBlock>
        <AbstractPhoto.ImageBlockTwo>
          <AbstractPhoto.ImageItem
            src={p2}
            padTop={`${isBigDevice ? 145 : (749 / 599) * 100}%`}
            show={true}
          />
          <AbstractPhoto.ImageBlockOne>
            <AbstractPhoto.ImageItem
              src={p1}
              padTop={` ${(486 / 322) * 100}%`}
              show={isBigDevice}
            />
          </AbstractPhoto.ImageBlockOne>
          <AbstractPhoto.ImageBlockThree>
            <AbstractPhoto.ImageItem
              src={p3}
              padTop={`${(374 / 299) * 100}%`}
              show={isBigDevice}
            />
          </AbstractPhoto.ImageBlockThree>
        </AbstractPhoto.ImageBlockTwo>
      </AbstractPhoto.LeftBlock>

      <AbstractPhoto.CenterBlock>
        <AbstractPhoto.Title>Adam & Eve</AbstractPhoto.Title>
        <AbstractPhoto.Divider show={isBigDevice} />
        <AbstractPhoto.Description>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </AbstractPhoto.Description>
      </AbstractPhoto.CenterBlock>

      <AbstractPhoto.RightBlock>
        <AbstractPhoto.ImageItem
          src={p4}
          padTop={`${isBigDevice ? 120 : 100}%`}
          position={"initial"}
          show={true}
        />
      </AbstractPhoto.RightBlock>
    </AbstractPhoto>
  );
}
