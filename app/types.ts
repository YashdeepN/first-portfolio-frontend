import type { Url } from "url";

export type imageType = {
  id: string;
  name: string;
  documentId: string;
  url: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
  documentId: string;
};

export type PostMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiProject = {
  id: string;
  title: string;
  description: string;
  image?: imageType;
  url: string;
  date: string;
  category: string;
  featured: boolean;
  documentId: string;
};
