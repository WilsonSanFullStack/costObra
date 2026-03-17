export function toPlain<T>(data: any[]): T[];
export function toPlain<T>(data: any): T;
export function toPlain<T>(data: any): T | T[] {
  if (Array.isArray(data)) {
    return data.map((item) => item.get({ plain: true }));
  }
  return data?.get({ plain: true });
}