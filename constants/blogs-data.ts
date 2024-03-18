export const readBlogs = [
  {
    imgUrl: "/assets/images/blog-1.svg",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
    createdAt: "10 march 2024",
  },
  {
    imgUrl: "/assets/images/blog-1.svg",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
    createdAt: "1 march 2024",
  },
  {
    imgUrl: "/assets/images/blog-1.svg",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
    createdAt: "4 march 2024",
  },
  {
    imgUrl: "/assets/images/blog-1.svg",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
    createdAt: "3 march 2024",
  },

  {
    imgUrl: "/assets/images/blog-1.svg",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
    createdAt: "6 march 2024",
  },
  {
    imgUrl: "/assets/images/blog-1.svg",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
    createdAt: "8 march 2024",
  },
  {
    imgUrl: "/assets/images/blog-1.svg",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
    createdAt: "11 march 2024",
  },
  {
    imgUrl: "/assets/images/blog-1.svg",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
    createdAt: "13 march 2024",
  },
];

interface BlogSummary {
  content: string;
}

interface ContentSection {
  content: string;
  imgUrl?: string;
}

interface Section {
  id: number;
  title: string;
  contentSections: ContentSection[];
}

export interface BlogData {
  title: string;
  readTime: string;
  postDate: string;
  featuredImage: string;
  intro: string;
  summary: BlogSummary[];
  sections: Section[];
}

export const BlogsData: BlogData[] = [
  {
    title: "How talent leaders can help capitalize on generative AI ",
    readTime: "5-MINUTE READ",
    postDate: "10 MARCH",
    featuredImage: "/assets/images/blog-1-picture-1.svg",
    intro:
      "Sustainability is top of mind for today’s travelers. And yet, travel companies face several “say-do” gaps. Here are six ways to close them.",
    summary: [
      {
        content:
          "Generative AI has been making headlines across the world as individuals and business leaders explore the possibilities created by this powerful new tool. Public services are no exception. The technology is poised to reinvent many of the ways public service organizations serve citizen needs and get work done.",
      },
      {
        content:
          "One recent Accenture study estimated that as much as three-quarters (74%) of public service employees’ working hours are spent on tasks that involve the use of language to some extent – across both front-line and back-office work, as well as interactions across different channels (voice, email, digital apps, and so on). Generative AI creates numerous opportunities for automating, augmenting and optimizing these language-based tasks. This includes everything from generating automated case summaries for social workers to providing intelligent multi-language chatbots for public services to performing proactive threat analysis in areas like public safety",
      },
    ],

    sections: [
      {
        id: 1,
        title: "A timely arrival",
        contentSections: [
          {
            content:
              "Generative AI has been making headlines across the world as individuals and business leaders explore the possibilities created by this powerful new tool. Public services are no exception. The technology is poised to reinvent many of the ways public service organizations serve citizen needs and get work done.",
            imgUrl: "",
          },
          {
            content:
              "One recent Accenture study estimated that as much as three-quarters (74%) of public service employees’ working hours are spent on tasks that involve the use of language to some extent – across both front-line and back-office work, as well as interactions across different channels (voice, email, digital apps, and so on). Generative AI creates numerous opportunities for automating, augmenting and optimizing these language-based tasks. This includes everything from generating automated case summaries for social workers to providing intelligent multi-language chatbots for public services to performing proactive threat analysis in areas like public safety.",
            imgUrl: "/assets/images/blog-1-picture-1.svg",
          },
          {
            content:
              "Generative AI has been making headlines across the world as individuals and business leaders explore the possibilities created by this powerful new tool. Public services are no exception. The technology is poised to reinvent many of the ways public service organizations serve citizen needs and get work done.",
            imgUrl: "",
          },
          {
            content:
              "One recent Accenture study estimated that as much as three-quarters (74%) of public service employees’ working hours are spent on tasks that involve the use of language to some extent – across both front-line and back-office work, as well as interactions across different channels (voice, email, digital apps, and so on). Generative AI creates numerous opportunities for automating, augmenting and optimizing these language-based tasks. This includes everything from generating automated case summaries for social workers to providing intelligent multi-language chatbots for public services to performing proactive threat analysis in areas like public safety.",
            imgUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "Title of Second Blog",
    readTime: "3-MINUTE READ",
    postDate: "20 FEBRUARY",
    featuredImage: "/assets/images/blog-1-picture-1.svg",
    intro:
      "Sustainability is top of mind for today’s travelers. And yet, travel companies face several “say-do” gaps. Here are six ways to close them.",
    summary: [
      {
        content:
          "Summary of the second blog goes here. This blog discusses various aspects related to...",
      },
      {
        content:
          "More details about the topics discussed in the second blog...",
      },
    ],
    sections: [
      {
        id: 1,
        title: "First Section of Second Blog",
        contentSections: [
          {
            content: "Content of the first section of the second blog...",
            imgUrl: "/assets/images/blog-2-picture-1.svg",
          },
          {
            content: "More content of the first section of the second blog...",
            imgUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "Title of Third Blog",
    readTime: "4-MINUTE READ",
    postDate: "25 FEBRUARY",
    featuredImage: "/assets/images/blog-1-picture-1.svg",
    intro:
      "Sustainability is top of mind for today’s travelers. And yet, travel companies face several “say-do” gaps. Here are six ways to close them.",
    summary: [
      {
        content:
          "Summary of the third blog goes here. This blog discusses various aspects related to...",
      },
      {
        content: "More details about the topics discussed in the third blog...",
      },
    ],
    sections: [
      {
        id: 1,
        title: "First Section of Third Blog",
        contentSections: [
          {
            content: "Content of the first section of the third blog...",
            imgUrl: "/assets/images/blog-3-picture-1.svg",
          },
          {
            content: "More content of the first section of the third blog...",
            imgUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "Title of Fourth Blog",
    readTime: "6-MINUTE READ",
    postDate: "28 FEBRUARY",
    featuredImage: "/assets/images/blog-1-picture-1.svg",
    intro:
      "Sustainability is top of mind for today’s travelers. And yet, travel companies face several “say-do” gaps. Here are six ways to close them.",
    summary: [
      {
        content:
          "Summary of the fourth blog goes here. This blog discusses various aspects related to...",
      },
      {
        content:
          "More details about the topics discussed in the fourth blog...",
      },
    ],
    sections: [
      {
        id: 1,
        title: "First Section of Fourth Blog",
        contentSections: [
          {
            content: "Content of the first section of the fourth blog...",
            imgUrl: "/assets/images/blog-4-picture-1.svg",
          },
          {
            content: "More content of the first section of the fourth blog...",
            imgUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "Title of Fifth Blog",
    readTime: "7-MINUTE READ",
    postDate: "5 MARCH",
    featuredImage: "/assets/images/blog-1-picture-1.svg",
    intro:
      "Sustainability is top of mind for today’s travelers. And yet, travel companies face several “say-do” gaps. Here are six ways to close them.",
    summary: [
      {
        content:
          "Summary of the fifth blog goes here. This blog discusses various aspects related to...",
      },
      {
        content: "More details about the topics discussed in the fifth blog...",
      },
    ],
    sections: [
      {
        id: 1,
        title: "First Section of Fifth Blog",
        contentSections: [
          {
            content: "Content of the first section of the fifth blog...",
            imgUrl: "/assets/images/blog-5-picture-1.svg",
          },
          {
            content: "More content of the first section of the fifth blog...",
            imgUrl: "",
          },
        ],
      },
    ],
  },
];
