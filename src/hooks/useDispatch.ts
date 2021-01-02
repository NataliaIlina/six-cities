import { useDispatch as useReduxDispatch } from 'react-redux';
import type { TAppDispatch } from 'src/store';

const useDispatch = () => useReduxDispatch<TAppDispatch>();

export default useDispatch;
