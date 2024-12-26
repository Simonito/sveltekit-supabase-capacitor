<script lang="ts">
  import { setError, superForm } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import { _userEmailSignupSchema } from './+page.js';
  import { PUBLIC_SERVER_URL } from '$env/static/public';
  import { goto } from '$app/navigation';
    import GoogleSignup from './forms/GoogleSignup.svelte';

  const EMAIL_SIGNUP_URL = `${PUBLIC_SERVER_URL}/api/v1/auth/signup?strategy=email`;
  const { data } = $props();

  let emailFormErr = $state("");

  const { form: emailSignupForm, enhance, errors } = superForm(data.form, {
    SPA: true,
    resetForm: true,
    validators: zod(_userEmailSignupSchema),
    async onUpdate({ form }) {
      if (!form.valid) {
        emailFormErr = "Some fields are not valid";
        return;
      }
      try {
        const formData = new FormData();
        formData.append('email', form.data.email);
        formData.append('password', form.data.password);

        const loginRes = await fetch(EMAIL_SIGNUP_URL, {
          method: "POST",
          body: formData,
        });

        const result = await loginRes.json();

        if (!loginRes.ok) {
          console.log(result.message);
          emailFormErr = result.message;
          return;
        }

        console.log('Signup success', result);
        goto('/app');
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  });
</script>

<h1>Sveltekit use:form action demo</h1>

{#if emailFormErr}
  <p>{emailFormErr}</p>
{/if}

<form
  method="POST"
  use:enhance
>
  <!-- Email -->
  <label>
    email<br />
    <input
      aria-invalid={$errors.email ? "true" : undefined}
      name="email"
      type="email"
      bind:value={$emailSignupForm.email}
    />
  </label>
  {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
  <br />
  <!-- Password -->

  <label>
    password<br />
    <input
      aria-invalid={$errors.password ? "true" : undefined}
      name="password"
      type="password"
      bind:value={$emailSignupForm.password}
    />
  </label>
  {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
  <br />

  <button type="submit">submit</button>
</form>

<br>
<GoogleSignup />
