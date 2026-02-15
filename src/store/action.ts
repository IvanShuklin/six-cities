import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const cityChanged = createAction<City>('main/cityChanged');
export const offersLoaded = createAction<Offer[]>('main/offersLoaded');
