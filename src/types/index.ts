export type PostType = {
  cursor: string;
  node: {
    name: string;
    tagline: string;
    votesCount: number;
    url: string;
    thumbnail?: {
      url: string;
    };
  };
};
