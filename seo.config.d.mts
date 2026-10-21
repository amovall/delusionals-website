export const siteUrl: URL;
export const isIndexable: boolean;
export const sitePages: Record<'/' | '/privacy' | '/cookies' | '/terms', {
  title: string;
  description: string;
  index: boolean;
}>;
