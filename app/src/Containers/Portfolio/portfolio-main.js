import Gallery from "Components/Gallery/gallery";
import { GalleryImages } from "Components/Gallery/gallery.data";
import {
  GallerImage,
  GallerItem,
  GalleryContainer,
} from "Components/Gallery/galley.styles";
import Layout from "Components/Layout/layout";
import Text from "Components/Text/text";
import { NavbarContainer } from "Containers/Home/navbar-container";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfoloMainContainer = () => {
  const [selectedItem, setSelectedItem] = useState("All");
  const [images, setImages] = useState(GalleryImages);
  const listItems = ["All", "Couples", "Portraits", "Family", "Maternity"];
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const filterImage = (item) => {
    const filteredImages =
      item === "All"
        ? GalleryImages
        : GalleryImages.filter((val) => val.category === item);
    setImages(filteredImages);
    setSelectedItem(item);
  };

  console.log(selectedItem);
  return (
    <Layout isBlockPadded={false} isInlinePadded={true}>
      <Layout.Frame paddingBlock="2em">
        <Text.Button textDecoration="none" link={goBack}>
          Go back
        </Text.Button>
      </Layout.Frame>
      <Layout.Frame alignItems="center" paddingBlock="2.5em 5em">
        <Text.SemiLarge>My Portfolio</Text.SemiLarge>
        <Layout.List flexDirection="row">
          {listItems.map((item) => (
            <Layout.ListItem
              key={item}
              selected={selectedItem === item}
              onClick={() => filterImage(item)}
            >
              {item}
            </Layout.ListItem>
          ))}
        </Layout.List>
      </Layout.Frame>

      <Gallery>
        {images.map((img) => (
          <Gallery.Item gridColumn={img.gridColumn} gridRow={img.gridRow} >
            <Gallery.Image
              key={img.id}
              src={require(`Assets/Images/${img.imageSrc}`)}
            />
          </Gallery.Item>
        ))}
      </Gallery>
    </Layout>
  );
};

export default PortfoloMainContainer;
