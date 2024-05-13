import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blogs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    meta: {
      type: "string",
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    desc: {
      type: "string",
    },
    image: { type: "string" },
    isPublished: {
      type: "boolean",
      default: false,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => {
        // Replace '/blogs/' with '/blog/' in the URL
        const path = doc._raw.flattenedPath.replace("blogs/", "");
        return `/blog/${path}`;
      },
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

const News = defineDocumentType(() => ({
  name: "News",
  filePathPattern: "news/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    meta: {
      type: "string",
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    desc: {
      type: "string",
    },
    image: { type: "string" },
    isPublished: {
      type: "boolean",
      default: false,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => {
        // Replace '/blogs/' with '/blog/' in the URL
        const path = doc._raw.flattenedPath.replace("news/", "");
        return `/news/${path}`;
      },
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

export default makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [Blog, News],
});
