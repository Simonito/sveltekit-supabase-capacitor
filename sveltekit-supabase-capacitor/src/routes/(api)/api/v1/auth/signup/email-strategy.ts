import { Fail } from "$lib/utils";
import { redirect } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

export async function handleEmailSignup(event: RequestEvent): Promise<Response> {
  const formData = await event.request.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return Fail(
      { message: 'Please enter an email and password' }, 
      { email }
    );
  }
  
  const { error } = await event.locals.supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return Fail(error, { email });
  }

  return redirect(303, '/app');
}
