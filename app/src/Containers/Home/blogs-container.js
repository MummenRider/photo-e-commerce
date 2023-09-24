import Blog from "Components/Blogs/blogs";
import { BlogItems } from "Components/Blogs/blogs.data";
import Card from "Components/Card/card";
import Layout from "Components/Layout/layout";
import Text from "Components/Text/text";

export function BlogsContainer() {
  return (
    <Layout>
      <Blog>
        <Text.Small>Recent stories</Text.Small>
        <Text.Medium paddingBlock="0.3em">
          Explore Latest Stories: Stay Up-To-Date <br />
          With The Newest Content!
        </Text.Medium>

        <Blog.CardContainer>
          {BlogItems.map((blog, index) => (
            <Card key={index} item={blog} />
          ))}
        </Blog.CardContainer>
      </Blog>
    </Layout>
  );
}

// import Blogs from "Components/Blogs/blogs";
// import { BlogItems } from "Components/Blogs/blogs.data";
// import { BlogItem } from "Components/Blogs/blogs.item";

// export function BlogsContainer() {
//   return (
//     <Blogs>
//       <Blogs.Inner>
//         <Blogs.Title>RECENT STORIES</Blogs.Title>
//         {BlogItems.map((blogItem, index) => (
//           <BlogItem key={index} blogItem={blogItem} />
//         ))}
//       </Blogs.Inner>
//     </Blogs>
//   );
// }
