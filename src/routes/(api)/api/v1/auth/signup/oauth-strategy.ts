import type { RequestEvent } from "./$types"
import { Fail } from "$lib/utils";
import type { Provider } from "@supabase/supabase-js";

export async function handleOAuthSignup(event: RequestEvent) {
  try {
    const formData = await event.request.formData();
    const provider = formData.get('provider') as Provider;
    const { data, error } = await event.locals.supabase.auth.signInWithOAuth({ 
      provider,
      options: {
        redirectTo: `${event.url.origin}/api/v1/auth/callback?next=/app`
      }
    });

    if (error) {
      return Fail(error);
    }

    if (data.url) {
      return new Response(JSON.stringify({ url: data.url }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return Fail({
      message: "No URL returned from Supabase",
      status: 500
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message as string : String(error);
    return Fail({
      message: "OAuth signup failed" + `error: ${errMsg}`,
      status: 500
    });
  }
}
