<script lang="ts">
  import { PUBLIC_SERVER_URL } from '$env/static/public';

  const OAUTH_SIGNUP_URL = `${PUBLIC_SERVER_URL}/api/v1/auth/signup?strategy=oauth`;

  async function handleGoogleSignup(event: SubmitEvent) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    
    try {
      const response = await fetch(OAUTH_SIGNUP_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
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
