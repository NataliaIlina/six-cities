export enum EStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type TAsyncData<T> =
  | {
      data: T | null;
      status: EStatus.IDLE | EStatus.LOADING | EStatus.ERROR;
    }
  | { data: T; status: EStatus.SUCCESS };
