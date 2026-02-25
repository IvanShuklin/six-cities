import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { State, AddDispatch } from '../types/main-state';

export const useAppDispatch: () => AddDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
