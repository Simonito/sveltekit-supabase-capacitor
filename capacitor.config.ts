import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sajbo.sksupacap',
  appName: 'sveltekit-supabase-capacitor',
  webDir: 'build-static',
  server: {
    url: 'http://127.0.0.1:5173',
  },
};

export default config;
