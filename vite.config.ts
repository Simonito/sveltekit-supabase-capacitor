import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
    cors: true,
		host: '0.0.0.0',
    port: 5173,
  },
});
