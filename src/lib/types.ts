export interface DescriptionProps {
  children: {
    text: string;
    _key: string;
  }[];
  _key: string;
}
export interface DataProps {
  title: string;
  description: DescriptionProps[];
  link?: string;
}
export interface ProjectDataProps {
  description: DescriptionProps[];
  link: string;
  title: string;
  github_link: string;
  external_link: string;
}
