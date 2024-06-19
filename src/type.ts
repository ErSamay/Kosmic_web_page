interface TurnstileInstance {
  render: (
    selector: string,
    options: {
      sitekey: string;
      callback: () => void;
    }
  ) => void;
}

export declare const turnstile: TurnstileInstance;
