export const apis = {
  //authentication
  register: "/auth/register",
  login: "/auth/login",
  generateOtp: "/auth/otp/generate",
  verifyOtp: "/auth/otp/verify",
  resendOtp: "/auth/otp/resend",

  //user related apis
  getUserDetails: (id: string) => `/user/${id}`,

  //search
  getSearchData: "/search",

  getScriptDetails: (id: string) => `/script/${id}`,
};
