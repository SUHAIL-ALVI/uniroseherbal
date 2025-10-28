    declare namespace NodeJS {
  interface ProcessEnv {
    RESEND_API_KEY: string;
    RECEIVER_EMAIL: string;
    FROM_EMAIL: string;
  }
}
