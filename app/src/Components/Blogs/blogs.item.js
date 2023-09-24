import React from "react";
import Blogs from "./blogs";

export const BlogItem = ({ blogItem }) => {
  return (
    <Blogs.Item>
      <Blogs.ImageContainer direction={blogItem.direction}>
        <Blogs.Image
          src={require(`./../../Assets/Images/${blogItem.imageSource}`)}
        />
      </Blogs.ImageContainer>
      <Blogs.Content direction={blogItem.direction}>
        <Blogs.SubTitle>{blogItem.subTitle}</Blogs.SubTitle>
        <Blogs.Description>{blogItem.description}</Blogs.Description>
        <Blogs.ReadMoreLink to={blogItem.link}>
          {blogItem.buttonLink}
        </Blogs.ReadMoreLink>
      </Blogs.Content>
    </Blogs.Item>
  );
};
