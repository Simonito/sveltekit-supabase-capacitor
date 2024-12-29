import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sajbo.sksupacap',
  appName: 'sveltekit-supabase-capacitor',
  webDir: 'build-static',
  server: {
    url: "http://172.22.112.1:5173",
    // cleartext: true,
  },
  // android: {
  //   webContentsDebuggingEnabled: true,
  // }
};

export default config;
