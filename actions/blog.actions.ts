import { BlogsData } from "@/constants/blogs-data";
import { createSlug } from "@/utils/cn";

export const latestBlogs = () => {
  const sortBlogs = BlogsData.sort((a, b) => {
    const dateA = new Date(a.postDate);
    const dateB = new Date(b.postDate);
    return dateB.getTime() - dateA.getTime();
  });

  const blogs = sortBlogs.slice(0, 2);
  return blogs;
};

export const findBlogBySlug = (slug: string) => {
  const targetSlug = slug.toLowerCase();

  for (const blog of BlogsData) {
    const blogSlug = createSlug(blog.title);
    if (blogSlug === targetSlug) {
      return blog;
    }
  }

  return null;
};

export const readBlogs = () => {
  const data = BlogsData.slice(0, 4);

  const blogs = data.map((blog) => ({
    imgUrl: blog.featuredImage,
    title: blog.title,
    description: blog.intro,
    read_time: blog.readTime,
  }));

  return blogs;
};
