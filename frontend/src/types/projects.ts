export interface ProjectType {
  _id: string;
  title: string;
  description: string;
  status: "OPEN" | "CLOSED";
  category: {
    _id: string;
    title: string;
    englishTitle: string;
  };
  owner: {
    _id: string;
    name: string;
    avatarUrl: null | string;
  };
  budget: number;
  tags: string[] | [];
  proposals: string[] | [];
  deadline: string;
  createdAt: string;
  updatedAt: string;
  freelancer?: {
    _id: string;
    name: string;
    avatarUrl: null | string;
  };
}
