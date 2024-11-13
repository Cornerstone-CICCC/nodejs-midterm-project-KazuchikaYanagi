export type Daily = {
  id: string;
  date: string;
  image: string;
  // username: string | null;
  title: string;
  content: string;
};

export type InputDaily = {
  title: string;
  content: string;
  image: string;
};
