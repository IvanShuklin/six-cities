export type Comment = {
  id: number;
  date: string;
  comment: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
};
