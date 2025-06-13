export type ResourceList<T> = {
  results: T[];
  count: number;
  next: string;
  previous: string;
};
