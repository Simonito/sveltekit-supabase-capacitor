import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

export const _userEmailSignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const load = async ({ params, fetch }) => {
  return {
    form: await superValidate(zod(_userEmailSignupSchema))
  };
};
