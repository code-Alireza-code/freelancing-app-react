export interface UserType {
  _id: string;
  biography: null | string;
  phoneNumber: string | null;
  resetLink: null;
  isVerifiedPhoneNumber: boolean;
  isActive: boolean;
  status: 0 | 1 | 2;
  role: "ADMIN" | "FREELANCER" | "OWNER";
  createdAt: string;
  updatedAt: string;
  __v: unknown;
  email: string | null;
  name: string;
  avatarUrl: null | string;
}
