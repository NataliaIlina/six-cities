import {TypedUseSelectorHook, useSelector as useReduxSelector} from 'react-redux';
import type {TRootState} from 'src/store';

const useSelector: TypedUseSelectorHook<TRootState> = useReduxSelector;

export default useSelector;
