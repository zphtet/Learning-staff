"use client";
import { signUp, verifyAccount } from "@/api/query";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const SignUp = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyAccountId, setVerifyAccountId] = useState("");

  const signUpFunction = async () => {
    try {
      setIsLoading(true);
      const result = await signUp({
        data: {
          businessName: "YGN",
          businessType: "pos",
          country: "MMR",
          identifier: "zinpainghtet.215108@gmail.com",
          password: "12345678",
        },
      });

      setVerifyAccountId(result.data.createAccount);
      toast({
        title: "SignUp Success",
        description:
          "Please verify your account with the code sent to your email",
      });
      console.log("SignUp Result", result);
    } catch (err) {
      toast({
        title: "SignUp Failed",
        variant: "destructive",
        description: "You have failed to sign up",
      });
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyFunction = async () => {
    // if (!verifyAccountId) {
    //   toast({
    //     title: "Verification Failed",
    //     variant: "destructive",
    //     description: "Please sign up first",
    //   });
    //   return;
    // }

    try {
      setIsVerifying(true);
      const result = await verifyAccount({
        code: "601002", // Default verification code
        verifyAccountId: "cma810g5g0001axwbmbs3ylee",
      });

      toast({
        title: "Verification Success",
        description: "Your account has been verified successfully",
      });
      console.log("Verification Result", result);
    } catch (err) {
      toast({
        title: "Verification Failed",
        variant: "destructive",
        description: "Invalid verification code",
      });
      console.log(err);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Button
          size="lg"
          className="text-lg"
          onClick={signUpFunction}
          disabled={isLoading}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </Button>

        <Button
          size="lg"
          className="text-lg"
          onClick={verifyFunction}
          disabled={isVerifying}
        >
          {isVerifying ? "Verifying..." : "Verify Account"}
        </Button>

        <Link
          // @ts-ignore
          href="/signin"
          className="text-muted-foreground text-sm hover:underline"
        >
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
