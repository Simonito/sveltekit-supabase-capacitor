
export const POST = async ({ locals: { supabase }}) => {
  await supabase.auth.signOut();
  return new Response();
};
