declare namespace Express {
  interface Request {
    metadata?: {
      account?: {
        id: string | undefined;
        role: 'ADMIN' | 'USER';
      };
    };
  }
}
