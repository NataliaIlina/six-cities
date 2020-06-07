import type { EStatus } from 'src/constants';

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: string;
  location: TLocation;
};

export type TOffer = {
  id: number;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  description: string;
  host: {
    id: number;
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  location: TLocation;
  city: TCity;
};

export type TOffersStore = {
  currentCity: TCity | null;
  offers: TOffer[];
  cities: TCity[];
  sortingValue: string;
  activeOffer: TOffer | null;
  status: EStatus;
};
