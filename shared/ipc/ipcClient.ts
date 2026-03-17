import type { TIpcMap } from "../types";

type Channels = Extract<keyof TIpcMap, string>;

export function invoke<T extends Channels>(
  channel: T,
  ...args: TIpcMap[T]["req"] extends void
    ? []
    : [data: TIpcMap[T]["req"]]
): Promise<TIpcMap[T]["res"]> {
  return window.api.invoke(channel, args[0]);
}