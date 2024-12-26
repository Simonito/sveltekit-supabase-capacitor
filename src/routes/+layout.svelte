<script lang="ts">
  import { goto, invalidate } from '$app/navigation'
  import { PUBLIC_SERVER_URL } from '$env/static/public';

  let { data, children } = $props()
  let { supabase, session } = $state(data)

  $effect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => subscription.unsubscribe()
  });

  async function handleSignout(event: SubmitEvent) {
    event.preventDefault();
    console.log("submititngh");
    try {
      const response = await fetch(`${PUBLIC_SERVER_URL}/api/v1/auth/signout`, {
        method: "POST",
      });
      
      if (response.ok) {
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Signout error:', error);
    }
  }
</script>

<nav style="border: solid; border-width: 0 0 2px; padding-bottom: 5px;">
  <a href="/">Home</a>
  {#if session}
    <a href="/app">App</a>
    <a href="/self">Self</a>
    <img style="width: 32px; height: 32px; border-radius: 9999px;" src={session.user.user_metadata.avatar_url ?? 'https://api.dicebear.com/8.x/fun-emoji/svg'} alt="person_avatar">
    <form method="POST" onsubmit={handleSignout}>
      <button type="submit">Logout</button>
    </form>
  {:else}
    <a href='/auth'>Login</a>
  {/if}
</nav>

{@render children?.()}
