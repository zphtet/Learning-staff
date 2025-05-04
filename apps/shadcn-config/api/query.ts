export const SINGIN_QUERY = `
  mutation SignIn($credentials: String!, $scope: String!, $type: AuthType!) {
    signIn(credentials: $credentials, scope: $scope, type: $type) {
      token
      tokenType
      refreshToken
      expiresIn
    }
  }
`;

export const SIGNUP_QUERY = `
mutation CreateAccount($data: AccountCreateArgs!) {
  createAccount(data: $data)
}
`;

export const VERIFY_ACCOUNT = `
mutation VerifyAccount($code: String!, $verifyAccountId: String!) {
  verifyAccount(code: $code, id: $verifyAccountId)
}
`;

export interface SignUpData {
  identifier: string | null;
  businessName: string | null;
  businessType: string | null;
  country: string | null;
  password: string | null;
}

export interface SignUpVariables {
  data: SignUpData;
}

const API_ENDPOINT = "http://localhost:4000/account";

export const signUp = async (variables: SignUpVariables) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: SIGNUP_QUERY,
        variables,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export interface SignInVariables {
  credentials: string | null;
  scope: string | null;
  type: string | null;
}

export const signIn = async (variables: SignInVariables) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: SINGIN_QUERY,
        variables,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Signin error:", error);
    throw error;
  }
};

export interface VerifyAccountVariables {
  code: string | null;
  verifyAccountId: string | null;
}

export const verifyAccount = async (variables: VerifyAccountVariables) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: VERIFY_ACCOUNT,
        variables,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Verify account error:", error);
    throw error;
  }
};

const REFRESH_TOKEN_MUTATION = `
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      token
      tokenType
      refreshToken
      expiresIn
    }
  }
`;

export interface RefreshTokenVariables {
  refreshToken: string | null;
}

export const generateRefreshToken = async (variables: RefreshTokenVariables) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: REFRESH_TOKEN_MUTATION,
        variables,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Refresh token error:", error);
    throw error;
  }
};
