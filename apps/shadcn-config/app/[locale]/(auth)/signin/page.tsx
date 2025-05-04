"use client";
// import { signIn } from "@/api/query";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { ToastContainer, toast as toastify } from "react-toastify";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const locale = useLocale();
  const signInFunction = async () => {
    try {
      setIsLoading(true);

      const result = await signIn("credentials", {
        // credentials: btoa(`zinpainghtet.215108@gmail.com:12345678`),
        redirect: false,
        credentials: btoa(`zinpainghtet.215108@gmail.com:12345678`),
        scope: "BACKOFFICE.all",
        type: "jwt",
      });

      if (result.error) {
        console.log("Should Toast");
        toastify(result.error);
      }

      if (result.ok) {
        toastify("success");
        router.push(`/${locale}/`);
      }
      console.log("Sign in result:", result);
    } catch (error) {
      console.error("Sign in error:", error);
      toast({
        title: "Sign in failed",
        variant: "destructive",
        // @ts-ignore
        description: error?.message,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Button
          size="lg"
          disabled={isLoading}
          className="text-lg"
          onClick={signInFunction}
        >
          {isLoading ? "Signing In..." : "Sign In"}
          {/* @ts-ignore */}
        </Button>
        <Link
          // @ts-ignore
          href="/signup"
          className="text-muted-foreground text-sm hover:underline"
        >
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
