const apiHelper = async (
  endpoint: string,
  method = "GET",
  data?: Record<string, any>,
  headers = {}
) => {
  try {
    const url = "http://localhost:8000/api/web" + endpoint;
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (data && method !== "GET") {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Something went wrong");
    }

    return result;
  } catch (error: any) {
    console.error("API Error:", error.message);
    throw error; // Propagate the error to the caller
  }
};

export default apiHelper;
