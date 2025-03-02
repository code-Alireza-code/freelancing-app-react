export interface ProposalType {
  _id: string;
  price: number;
  duration: number;
  description: string;
  user: string;
  status: 0 | 1 | 2;
  createdAt: string;
  updatedAt: string;
}
