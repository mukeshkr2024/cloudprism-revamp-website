export interface NavbarLinks {
  route: string;
  label: string;
  subItems?: {
    route: string;
    label: string;
  }[];
}
export interface OurTeamProps {
  name: string;
  description: string;
  profilePic: string;
  linkdein: string;
  linkdeinUrl: string;
  portfolio?: string;
}

export interface SucessStory {
  tittle: string;
  imgUrl: string;
}

export interface FooterLinks {
  route: string;
  label: string;
}

export interface SocialLinks {
  href: string;
  title?: string;
  icon: string;
}

export interface ImageProps {
  filePath: string;
  relativeFilePath: string;
  format: string;
  height: number;
  width: number;
  aspectRatio: number;
  blurhashDataUrl: string;
}
