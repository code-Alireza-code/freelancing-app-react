import { ChangeUserStatusFormDataType } from "../features/admin/users/ChangeUserStatusForm";
import { CompleteProfileFormDataType } from "../features/authentication/CompleteProfileForm";
import http from "./httpService";

export async function getOtpAPI(data: { phoneNumber: string }) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export async function checkOtpAPI(data: { phoneNumber: string; otp: string }) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export async function completeProfileAPI(data: CompleteProfileFormDataType) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export async function getUserProfileAPI() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export async function logoutUserAPI() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

export async function getAllUsersAPI() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

type ChangeUserStausAPIPropsType = {
  data: ChangeUserStatusFormDataType;
  userId: string;
};
export async function changeUserStausAPI({
  data,
  userId,
}: ChangeUserStausAPIPropsType) {
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}
