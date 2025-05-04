type ThemeColors = "Zinc" | "Rose" | "Blue" | "Green" | "Orange";
interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}

type SignInResponse = {
  errors?: {
    message: string;
  }[];
  data: {
    signIn: {
      token: string;
      tokenType: string;
      refreshToken: string;
      expiresIn: string;
    };
  };
};
