type Payload = {
  category?: string;
  limit?: number;
};

function isValidPayload(payload: any): payload is Payload {
  return (
    typeof payload === "object" &&
    (payload.category === undefined || typeof payload.category === "string") &&
    (payload.limit === undefined || typeof payload.limit === "number")
  );
}

export async function getAllProducts(payload: unknown, token: string) {
  // Simulated token error checks
  if (token === "unauthorized") {
    // console.error("Unauthorized: Token is invalid");
    const error = new Error("Unauthorized: Token is invalid");
    (error as any).status = 401;
    throw error;
  }

  if (token === "expired") {
    // console.error("Forbidden: Token has expired");
    const error = new Error("Forbidden: Token has expired");
    (error as any).status = 403;
    throw error;
  }

  // Payload validation
  if (!isValidPayload(payload)) {
    // console.error("Bad Request: Payload is not valid");
    const error = new Error("Bad Request: Payload is not valid");
    (error as any).status = 400;
    throw error;
  }

  // Simulate a successful response
  return {
    data: [
      { id: 1, name: "Product A", category: payload.category || "general" },
      { id: 2, name: "Product B", category: payload.category || "general" },
    ],
    meta: {
      total: 2,
      limit: payload.limit || 10,
    },
  };
}

type RetryOptions = {
  retries: number;
  delayMs: number;
};

export async function fetchWithRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = { retries: 3, delayMs: 500 },
): Promise<T> {
  let attempt = 0;

  while (attempt <= options.retries) {
    try {
      return await fn();
    } catch (error: any) {
      console.log("Error CODE", error?.status);
      const status = error?.status;
      const isRetryable = status !== 400 && status !== 401;

      console.warn(`Attempt ${attempt + 1} failed:`, error.message);

      if (status === 403) {
        console.log("Login In Again");
        throw error;
      }

      if (!isRetryable || attempt === options.retries) {
        throw error; // Stop retrying for hard errors or after max attempts
      }

      attempt++;
      await new Promise((res) => setTimeout(res, options.delayMs));
    }
  }

  throw new Error("Unknown failure");
}
