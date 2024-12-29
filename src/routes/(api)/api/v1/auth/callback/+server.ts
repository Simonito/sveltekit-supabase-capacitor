import { redirect } from '@sveltejs/kit'

export const GET = async ({ url, locals: { supabase } }) => {
  // const code = url.searchParams.get('code') as string
  // const next = url.searchParams.get('next') ?? '/'

  // if (code) {
  //   const { error } = await supabase.auth.exchangeCodeForSession(code)
  //   if (!error) {
  //     return redirect(303, `/${next.slice(1)}`)
  //   }
  // }

  // /* Return the user to an error page with instructions */
  // return redirect(303, '/')
  const code = url.searchParams.get('code')
  
  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    console.log({data, error});
    if (data?.session) {
      // Store session data that can be passed back to app
      return new Response(`
        <script>
          window.localStorage.setItem('supabase-auth', '${JSON.stringify(data.session)}');
          window.close();
        </script>
      `, {
        headers: { 'Content-Type': 'text/html' },
      })
    }
  }
  return new Response('Auth failed', { status: 400 })
};
