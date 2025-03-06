const apiHelper = async (
  endpoint: string,
  method = "GET",
  data?: Record<string, any> | FormData, // Allow both JSON and FormData
  headers: Record<string, string> = {},
  params?: Record<string, any>
) => {
  try {
    let url = "https://concept-map-kkny.onrender.com/api/web" + endpoint;

    const isFormData = data instanceof FormData; // Check if data is FormData

    const options: RequestInit = {
      method,
      credentials: "include",
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }), 
        ...headers,
      },
    };

    if (data && method !== "GET") {
      options.body = isFormData ? data : JSON.stringify(data); 
    }

    if (params && method === "GET") {
      const queryParams = new URLSearchParams(params).toString();
      url = `${url}?${queryParams}`;
    }

    const response = await fetch(url, options);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(JSON.stringify(result) || "Something went wrong");
    }

    return result;
  } catch (error: any) {
    let errorResponse;
    try {
      errorResponse = JSON.parse(error.message);
    } catch {
      errorResponse = error.message;
    }

    return errorResponse;
  }
};

export default apiHelper;
