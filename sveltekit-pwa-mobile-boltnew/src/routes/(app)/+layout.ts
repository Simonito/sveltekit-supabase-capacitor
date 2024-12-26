import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent }) => {
  const { session } = await parent();
  
  if (!session) {
    throw redirect(303, '/signin');
  }

  return { session };
};