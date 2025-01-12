import type { CapacitorConfig } from '@capacitor/cli';

const config = {
  appId: 'io.ionic.starter',
  appName: 'Movie Explorer',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      iosSplashResourceName: 'splash',
      showSpinner: true,
      spinnerColor: '#999999'
    }
  }
};

export default config;
