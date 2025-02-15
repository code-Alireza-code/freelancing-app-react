import http from "./httpService";

export async function getOtpAPI(data: { phoneNumber: string }) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export async function checkOtpAPI(data: { phoneNumber: string; otp: string }) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
