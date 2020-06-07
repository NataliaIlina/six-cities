import type { TAsyncData } from 'src/models/common';
import type { TOffer } from 'src/ducks/hotels/hotelsModels';

export type TFavoriteStore = { hotels: TAsyncData<TOffer[]> };
