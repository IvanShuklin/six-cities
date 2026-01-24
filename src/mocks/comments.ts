import { Comment } from '../types/comment';

export const comments: Comment[] = [
  {
    id: 1,
    date: '2019-04-24',
    comment:
      'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    rating: 4,
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
  },
  {
    id: 2,
    date: '2019-03-12',
    comment: 'Beautiful apartment, very friendly owner.',
    rating: 5,
    user: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
  },
];
