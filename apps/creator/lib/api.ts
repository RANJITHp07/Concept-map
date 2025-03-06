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
  getScriptAllDetails: (userId: string, scriptId: string) =>
    `/script/all/details?userId=${userId}&scriptId=${scriptId}`,

  uploadFile:'/script/upload',
  createScript:'/script'
};
