import type { ApiResponse } from "@shared/types";

export function handleError<T>(
  error: unknown,
  message = "Error interno",
): ApiResponse<T> {
  return {
    success: false,
    message,
    error: error instanceof Error ? error.message : error,
  };
}
