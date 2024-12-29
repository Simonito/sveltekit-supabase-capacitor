<script lang="ts">
  import { PUBLIC_SERVER_URL } from '$env/static/public';
  import type { SupabaseClient } from '@supabase/supabase-js';
  import { Browser } from '@capacitor/browser';
  import { invalidate } from '$app/navigation';

  const OAUTH_SIGNUP_URL = `${PUBLIC_SERVER_URL}/api/v1/auth/signup?strategy=oauth`;

  const {
    supabase
  }: {
    supabase: SupabaseClient
  } = $props();

  async function handleGoogleSignup(event: SubmitEvent) {
    event.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${PUBLIC_SERVER_URL}/api/v1/auth/callback?next=/app`,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          skipBrowserRedirect: true,
        }
      });

      if (error) throw error;
      if (!data.url) return;

      await Browser.open({ url: data.url });
      
      // Listen for the callback
      Browser.addListener('browserFinished', async () => {
        await Browser.close();
        await invalidate('supabase:auth');
        window.location.href = '/app';
      });

    } catch (error) {
      console.error('OAuth error:', error);
    }
  }
</script>


<form
  method="POST"
  onsubmit="{handleGoogleSignup}"
>
  <input type="hidden" name="provider" value="google"/>
  <button type="submit">Signup /w Google</button>
</form>
