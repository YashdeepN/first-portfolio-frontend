import type { Url } from "url";

export type imageType = {
  id: string;
  name: string;
  documentId: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: imageType;
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
