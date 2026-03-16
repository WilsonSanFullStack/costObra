export {}

declare global {

  interface Window {

    api: {
      invoke: (channel: string, ...args: unknown[]) => Promise<any>

      on: (
        event: string,
        callback: (data: unknown) => void
      ) => void
    }

  }

}