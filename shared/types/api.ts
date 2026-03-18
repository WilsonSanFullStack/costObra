//types para las respuestas 
export interface SuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

export interface ErrorResponse {
  success: false;
  message: string;
  error?: any;
}

export type TApiResponse<T> = SuccessResponse<T> | ErrorResponse;
