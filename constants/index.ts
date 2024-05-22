import { FooterLinks, NavbarLinks, OurTeamProps, SocialLinks } from "@/types";

export const navbarLinks: NavbarLinks[] = [
  {
    route: "#",
    label: "About Us",
    subItems: [
      {
        route: "/about-us",
        label: "Company",
      },
      {
        route: "/events",
        label: "Events",
      },
    ],
  },
  {
    route: "/services",
    label: "Services",
    subItems: [
      {
        route: "/salesforce-consultation",
        label: "Salesforce Consultation & Implementation",
      },
      {
        route: "/software-development",
        label: "Software Development & Solutions",
      },
    ],
  },
  {
    route: "#",
    label: "Resources",
    subItems: [
      {
        route: "/blogs",
        label: "Blogs",
      },
      {
        route: "/case-studies",
        label: "Case Studies",
      },
      {
        route: "/newsletter",
        label: "Newsletter",
      },
    ],
  },
  {
    route: "/careers",
    label: "Careers",
    subItems: [],
  },
];

export const ourTeams: OurTeamProps[] = [
  {
    name: "Shantanu Kumar",
    description: "Director",
    profilePic: "/assets/images/team/shantanu-svg.svg",
    linkdein: "https",
    linkdeinUrl: "https://www.linkedin.com/in/shantanu-kumar-35966618b/",
  },
  {
    name: "Prateek Prasoon",
    description: "CEO",
    profilePic: "/assets/images/team/prateek-svg.svg",
    linkdein: "https",
    linkdeinUrl: "https://www.linkedin.com/in/mrprateek/",
  },
  {
    name: "Manahar Shyam",
    description: "COO",
    profilePic: "/assets/images/team/manhar-svg.svg",
    linkdein: "https",
    linkdeinUrl: "https://www.linkedin.com/in/manahar-shyam-a52201224/",
  },
  {
    name: "Deep Singh",
    description: "CMO",
    profilePic: "/assets/images/team/deep-svg.svg",
    linkdein: "https",
    linkdeinUrl: "https://www.linkedin.com/in/deep-singh00045/",
  },
  {
    name: "Pragati Anjani",
    description: "HR",
    profilePic: "/assets/images/team/pragati-svg.svg",
    linkdein: "https",
    linkdeinUrl: "https://www.linkedin.com/in/pragati-anjani-072896287/",
  },
  {
    name: "Abhishek Yadav",
    description: "Tech lead",
    profilePic: "/assets/images/team/abhishek-svg.svg",
    linkdein: "https",
    linkdeinUrl: "https://www.linkedin.com/in/kumarrabhishek/",
  },
  {
    name: "Swashant Rana",
    description: "Tech lead",
    profilePic: "/assets/images/team/swashant-svg.svg",
    linkdein: "https",
    linkdeinUrl: "https://www.linkedin.com/in/swashant-rana-800066222/",
  },
  {
    name: "Hrushikesh Kshirsagar",
    description: "Digital Marketing Expert",
    profilePic: "/assets/images/team/Hrushkesh.svg",
    linkdein: "https",
    linkdeinUrl: "https://www.linkedin.com/in/hrushikesh-kshirsagar007/",
  },
  {
    name: "Akash Umang",
    description: "UI/UX Designer",
    profilePic: "/assets/images/team-1.svg",
    linkdein: "https",
    linkdeinUrl: "https://www.linkedin.com/in/akash-umang-4714aa1b7/",
  },
  {
    name: "Shalinee Kumari",
    description: "Public Relation",
    profilePic: "/assets/images/team/shalinee.svg",
    linkdein: "https",
    linkdeinUrl:
      "https://www.linkedin.com/in/shalinee-says-%F0%9F%8E%A4%E2%9C%8D%F0%9F%8F%BB-a3076a1b0/",
  },
];

export const successStory = [
  {
    title: "Is Salesforce Outdated",
    imgUrl: "/assets/images/success-story-1.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend. ",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-2.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend. ",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-3.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend. ",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-4.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend. ",
  },
];

export const footerLinks: FooterLinks[] = [
  {
    route: "/about-us",
    label: "About",
  },
  {
    route: "/blogs",
    label: "Blogs",
  },
  {
    route: "/events",
    label: "Events",
  },
  {
    route: "/careers",
    label: "Careers",
  },
];

export const usefullLinks: FooterLinks[] = [
  {
    label: "Salesforce Consultation & Implementation",
    route: "/salesforce-consultation",
  },
  {
    label: "Software Development & Solutions",
    route: "/software-development",
  },
  {
    label: "Case Studies",
    route: "/case-studies",
  },
];

export const socialLinks: SocialLinks[] = [
  {
    href: "https://www.linkedin.com/company/cloudprism-solutions/mycompany/",
    title: "Linkdein",
    icon: "/assets/icons/linkdein.svg",
  },
  {
    href: "https://twitter.com/_CloudPrism_",
    title: "Twitter",
    icon: "/assets/icons/twitter.svg",
  },
  {
    href: "https://www.facebook.com/Cloudprism",
    title: "Facebook",
    icon: "/assets/icons/facebook.svg",
  },
  {
    href: "https://www.instagram.com/cloudprism.in",
    title: "Instagram",
    icon: "/assets/icons/instagram.svg",
  },
];

export const technologPartners = [
  {
    title: "Salesforce",
    imgUrl: "/assets/images/technology-partner-1.svg",
  },
  {
    title: "Docusign",
    imgUrl: "/assets/images/technology-partner-2.svg",
  },
  {
    title: "Conga",
    imgUrl: "/assets/images/technology-partner-3.svg",
  },
  {
    title: "Snowflake",
    imgUrl: "/assets/images/technology-partner-4.svg",
  },
];

export const certifiedDevelopers = [
  {
    id: 1,
    imgUrl: "/assets/images/certificates/certificate-1.svg",
    title: "Certified developer 1",
  },
  {
    id: 2,
    imgUrl: "/assets/images/certificates/certificate-2.svg",
    title: "Certified developer 1",
  },
  {
    id: 3,
    imgUrl: "/assets/images/certificates/certificate-3.svg",
    title: "Certified developer 1",
  },
  {
    id: 4,
    imgUrl: "/assets/images/certificates/certificate-4.svg",
    title: "Certified developer 1",
  },
  {
    id: 5,
    imgUrl: "/assets/images/certificates/certificate-5.svg",
    title: "Certified developer 1",
  },
  {
    id: 6,
    imgUrl: "/assets/images/certificates/certificate-6.svg",
    title: "Certified developer 1",
  },
  {
    id: 7,
    imgUrl: "/assets/images/certificates/certificate-7.svg",
    title: "Certified developer 1",
  },
  {
    id: 8,
    imgUrl: "/assets/images/certificates/certificate-8.svg",
    title: "Certified developer 1",
  },
  {
    id: 9,
    imgUrl: "/assets/images/certificates/certificate-9.svg",
    title: "Certified developer 1",
  },
  {
    id: 10,
    imgUrl: "/assets/images/certificates/certificate-10.svg",
    title: "Certified developer 1",
  },
  {
    id: 11,
    imgUrl: "/assets/images/certificates/certificate-11.svg",
    title: "Certified developer 1",
  },
  {
    id: 12,
    imgUrl: "/assets/images/certificates/certificate-12.svg",
    title: "Certified developer 1",
  },
  {
    id: 13,
    imgUrl: "/assets/images/certificates/certificate-13.svg",
    title: "Certified developer 1",
  },
  {
    id: 14,
    imgUrl: "/assets/images/certificates/certificate-14.svg",
    title: "Certified developer 1",
  },
];

export const whyStandOut = [
  {
    title: "Explore Our IT Consulting & Solutions Team",
    description:
      "Our pride lies in assembling a top-notch team of skilled IT Consultants committed to delivering exceptional results.",
  },
  {
    title: "Experience our Swift Turnaround Time",
    description:
      "Experience a rapid and efficient project cycle with CloudPrism, ensuring timely delivery of high-quality solutions. ",
  },
  {
    title: "Dedicated teams who are ready to tackle any challenge",
    description:
      "Your project deserves undivided attention. CloudPrism provides a committed team that works exclusively on your requirements, ensuring personalized service.",
  },
  {
    title: "Experience Smooth Communication",
    description:
      "Communication is key. CloudPrism ensures flawless and transparent communication throughout the project lifecycle, keeping you informed every step of the way.",
  },
  {
    title: "We Provide Free Expert IT Consulting & Solutions",
    description:
      "Explore the possibilities with CloudPrism through our complimentary Expert IT consulting & Solutions helping you make informed decisions for your IT projects.",
  },
];

export const readOurBlogs = [
  {
    imgUrl: "/assets/images/blog-1.png",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
  },
  {
    imgUrl: "/assets/images/blog-1.png",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
  },
  {
    imgUrl: "/assets/images/blog-1.png",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
  },
  {
    imgUrl: "/assets/images/blog-1.png",
    title: "Is Salesforce Outdated",
    description:
      "SalesForce Implementation- Don't get lost in the sea of CRM, get your business onboard with Salesforce ",
    read_time: "2-Minute ",
  },
];

export const salesForcePartners = [
  {
    id: 1,
    imgUrl: "/assets/images/partners/partner-1.svg",
  },
  {
    id: 2,
    imgUrl: "/assets/images/partners/partner-2.svg",
  },
  {
    id: 3,
    imgUrl: "/assets/images/partners/partner-3.svg",
  },
  {
    id: 4,
    imgUrl: "/assets/images/partners/partner-4.svg",
  },
  {
    id: 5,
    imgUrl: "/assets/images/partners/partner-5.svg",
  },
  {
    id: 6,
    imgUrl: "/assets/images/partners/partner-6.svg",
  },
  {
    id: 7,
    imgUrl: "/assets/images/partners/partner-7.svg",
  },
  {
    id: 8,
    imgUrl: "/assets/images/partners/partner-8.svg",
  },
  {
    id: 9,
    imgUrl: "/assets/images/partners/partner-10.svg",
  },
  {
    id: 10,
    imgUrl: "/assets/images/partners/partner-11.svg",
  },
  {
    id: 11,
    imgUrl: "/assets/images/partners/partner-12.svg",
  },
  {
    id: 12,
    imgUrl: "/assets/images/partners/partner-13.svg",
  },
  {
    id: 13,
    imgUrl: "/assets/images/partners/partner-14.svg",
  },
  {
    id: 14,
    imgUrl: "/assets/images/partners/partner-15.svg",
  },
  {
    id: 15,
    imgUrl: "/assets/images/partners/partner-16.svg",
  },
  {
    id: 16,
    imgUrl: "/assets/images/partners/partner-17.svg",
  },
];

export const clientSays = [
  {
    name: "Michel",
    description: [
      {
        content:
          "Pleasure to work with Prateek and CloudPrism team, will continue working with his team in future. ",
      },
      {
        content:
          "Excellent service, great attention to detail and quick efficient turnaround time.",
      },
    ],
    profilePic: "/assets/icons/client-1.png",
  },
  {
    name: "Paul fedar",
    description: [
      {
        content:
          "Cloudprism team is very easy to work with and understood our requirements and expectations quickly and accurately. Team work was excellent and timely. They are always willing to go above and beyond and are able to pivot seamlessly on changes to the project.",
      },
      {
        content:
          "I would highly recommend Cloudprism Solutions not only for their technical skills and guidance, but also for their work ethic, communication skills and ease of working with them. Great job!!",
      },
    ],
    profilePic: "/assets/icons/client-2.png",
  },
  {
    name: "Saul fernandez",
    description: [
      {
        content:
          "CloudPrism solutions knowledge of salesforce helped guide our decision making and streamlined the processes we were building out.",
      },
      {
        content: "Team attention to detail made the job quicker than expected.",
      },
    ],
    profilePic: "/assets/icons/client-3.png",
  },
  {
    name: "Max gates",
    description: [
      {
        content:
          "Cloud Prism solutions delivered excellent quality work with a very quick turnaround time.",
      },
      {
        content: "It was a pleasure working with CloudPrism Solution.",
      },
    ],
    profilePic: "/assets/icons/client-4.png",
  },
  {
    name: "Kshitij Chawla",
    description: [
      {
        content: "Great quality work, delivered on time and on budget.",
      },
      {
        content: "Will reach out again for future projects.",
      },
    ],
    profilePic: "/assets/icons/client-5.png",
  },
];

export const recentWorks = [
  {
    title: "Is Salesforce Outdated",
    imgUrl: "/assets/images/success-story-1.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-2.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-3.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-4.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-1.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-2.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-3.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend",
  },
  {
    title: "Reinvention in the age of generative AI",
    imgUrl: "/assets/images/success-story-4.svg",
    description:
      "In this digital kingdom, isolation, and niche is not an option. Growing together with other CRM software, systems, or applications is the new trend",
  },
];

export const historyData = [
  {
    year: 2016,
    description:
      "Since 2016, CloudPrism has led the charge in pioneering IT excellence, consistently delivering innovative solutions tailored to meet the evolving needs of tomorrow's digital landscape.",
  },
  {
    year: 2018,
    description:
      "With the inauguration of our inaugural office in Pune, CloudPrism embarks on a new chapter, symbolizing the commencement of our journey towards greater expansion and success.",
  },
  {
    year: 2020,
    description:
      "In 2020, CloudPrism proudly clinched the esteemed Startup of the Year Award, a testament to our relentless innovation and significant impact within the industry.",
  },
  {
    year: 2021,
    description:
      "In 2021, CloudPrism expanded its footprint with the inauguration of our Patna office, reaffirming our dedication to fostering regional growth and accessibility.",
  },
  {
    year: 2022,
    description:
      "In 2022, CloudPrism marked a significant milestone with the launch of our Austin, TX office, expanding our global footprint and reinforcing our commitment to growth.",
  },
  {
    year: 2023,
    description:
      "In 2023, CloudPrism proudly attained the esteemed Company of the Year award, a testament to our unwavering commitment to excellence and industry leadership.",
  },
];

export const salesforceBuisnessPoints = [
  {
    id: 1,
    content: "Customized Salesforce Solutions ",
  },
  {
    id: 2,
    content: "Experts Just for You.",
  },
  {
    id: 3,
    content: " Proven Tracked Record of Success.",
  },
  {
    id: 4,
    content: "Comprehensive Support and Service  ",
  },
  {
    id: 5,
    content: "Our Clients Love Us",
  },
];

export const salesforceBuisnessData = [
  {
    total: "420",
    description: "Projects Delivered",
  },
  {
    total: "100",
    description: "Salesforce-certified developers",
  },
  {
    total: "20",
    description: "Countries Served",
  },
];

export const fullstackBuisnessPoints = [
  {
    id: 1,
    content: "Integrating frontend and backend development seamlessly.",
  },
  {
    id: 2,
    content:
      "Offers Software Development expertise across multiple languages, frameworks",
  },
  {
    id: 3,
    content: "Clients receive support from concept to deployment.",
  },
  {
    id: 4,
    content: "Ensuring projects benefit from the latest innovations.",
  },
  {
    id: 5,
    content: "Clients gain access to top-tier talent and unlock Flexibility.",
  },
];

export const fullStackbuisnessData = [
  {
    total: "420",
    description: "Projects Delivered",
  },
  {
    total: "100",
    description: "Salesforce-certified developers",
  },
  {
    total: "20",
    description: "Countries Served",
  },
];

export const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer",
    employmentType: "Full-time",
    experience: "2+ Years",
    location: "Pune",
    description:
      "Join our team as a frontend developer and work on cutting-edge projects.",
    linkdeinUrl: "https://www.linkedin.com/company/cloudprism-solutions/jobs/",
  },
  {
    id: 2,
    title: "Data Scientist",
    employmentType: "Remote",
    experience: "5+ Years",
    location: "Pune",
    description:
      "We're looking for an experienced data scientist to join our data analytics team.",
    linkdeinUrl: "https://www.linkedin.com/company/cloudprism-solutions/jobs/",
  },
  {
    id: 3,
    title: "Product Manager",
    employmentType: "Contract",
    experience: "3+ Years",
    location: "Patna",
    description:
      "Seeking a talented product manager to lead our product development efforts.",
    linkdeinUrl: "https://www.linkedin.com/company/cloudprism-solutions/jobs/",
  },
  {
    id: 4,
    title: "Backend Developer",
    employmentType: "Full-time",
    experience: "3+ Years",
    location: "Pune",
    description:
      "Join our backend development team to build scalable and efficient server-side systems.",
    linkdeinUrl: "https://www.linkedin.com/company/cloudprism-solutions/jobs/",
  },
  {
    id: 5,
    title: "UX Designer",
    employmentType: "Part-time",
    experience: "2+ Years",
    location: "Pune",
    description:
      "Looking for a creative UX designer to enhance user experience across our platforms.",
    linkdeinUrl: "https://www.linkedin.com/company/cloudprism-solutions/jobs/",
  },
  {
    id: 6,
    title: "Software Engineer",
    employmentType: "Full-time",
    experience: "4+ Years",
    location: "Patna",
    description:
      "Join our engineering team to develop innovative software solutions for our clients.",
    linkdeinUrl: "https://www.linkedin.com/company/cloudprism-solutions/jobs/",
  },
];
