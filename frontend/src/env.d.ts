/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export interface DissertationType {
  author: string[];
  title: string;
  school: string;
  year: string;
}

export interface JournalType {
  authors: string[];
  title: string;
  journal: string;
  year: string;
  IF?: string;
}

export interface BookType {
  authors: string[];
  title: string;
  year: string;
}

interface ImportMetaEnv {
  readonly SENDGRID_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
