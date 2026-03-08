import MockAdapter from 'axios-mock-adapter';
import { fetchFavorites } from './favorites-slice';
import { createAPI } from '../services/api';
import { Offer } from '../types/offer';

describe('favorites async actions', () => {
  const api = createAPI();
  const mockAxios = new MockAdapter(api);

  it('should dispatch fulfilled when API returns 200', async () => {
    const mockOffers = [{ id: '1' }] as Offer[];

    mockAxios.onGet('/favorite').reply(200, mockOffers);

    const dispatch = vi.fn();
    const thunk = fetchFavorites();

    const result = await thunk(dispatch, () => ({}), api);

    expect(result.type).toBe('favorites/fetchFavorites/fulfilled');
    expect(result.payload).toEqual(mockOffers);
  });

  it('should dispatch rejected when API returns error', async () => {
    mockAxios.onGet('/favorite').reply(500);

    const dispatch = vi.fn();
    const thunk = fetchFavorites();

    const result = await thunk(dispatch, () => ({}), api);

    expect(result.type).toBe('favorites/fetchFavorites/rejected');
    expect(result.payload).toBe('Failed to load favorites');
  });
});
