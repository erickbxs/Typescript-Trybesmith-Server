export type SuccessStatus = 'CREATED' | 'SUCCESS';
export type ErrorStatus = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';

export type SuccessResponse<T> = {
  status: SuccessStatus;
  data: T;
};

export type ErrorResponse<T = string> = {
  status: ErrorStatus;
  data: {
    message: T;
  };
};

export type Response<T, E = string> = SuccessResponse<T> | ErrorResponse<E>;
