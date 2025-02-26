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
  proposals: Proposal[] | [];
  deadline: string;
  createdAt: string;
  updatedAt: string;
  freelancer?: {
    _id: string;
    name: string;
    avatarUrl: null | string;
  };
}

export interface Proposal {
  _id: string;
  price: number;
  duration: number;
  description: string;
  user?: {
    _id?: string;
    name?: string;
    avatarUrl?: null | string;
  };
  status: 0 | 1 | 2;
  createdAt: string;
  updatedAt: string;
}
