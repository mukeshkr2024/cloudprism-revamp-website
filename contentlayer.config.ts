import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
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
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
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
  documentTypes: [Blog],
});
