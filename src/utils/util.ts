import { Offer } from '../types/offer';

export const getFavoritesCount = (offers: Offer[]): number => offers.filter((offer) => offer.isFavorite).length;

export const formatReviewDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

export const pluralize = (count: number, singular: string, plural: string) => count === 1 ? singular : plural;
