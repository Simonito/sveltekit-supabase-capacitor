import { Fail } from "$lib/utils";
import type { RequestEvent } from "./$types";
import { handleEmailSignup } from "./email-strategy";
import { handleOAuthSignup } from "./oauth-strategy";

const strategies: Record<string, Function> = {
  email: handleEmailSignup,
  oauth: handleOAuthSignup
};

export const POST = async (event: RequestEvent) => {
  const signupStrategy = event.url.searchParams.get("strategy") as string;

  const strategy = strategies[signupStrategy];
  if (!strategy) {
    console.log("invalid strthy", strategy);
    return Fail({
      message: "Invalid Signup strategy",
      status: 400,
    });
  }

  return await strategy(event);
};
