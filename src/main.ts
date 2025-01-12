import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { SplashScreen } from '@capacitor/splash-screen';

SplashScreen.hide();

// Inicializace tmavého/světlého režimu podle uložené hodnoty
function initializeDarkMode() {
  // Získání uložené hodnoty z Local Storage
  const savedTheme = localStorage.getItem('dark-mode');

  // Pokud je něco uloženo, použij to, jinak se řiď systémovým nastavením
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkMode = savedTheme === 'true' ? true : (savedTheme === 'false' ? false : prefersDark.matches);

  document.documentElement.classList.toggle('ion-palette-dark', isDarkMode);

  // Sleduj změny systémového nastavení, pokud uživatel nezvolil vlastní volbu
  if (savedTheme === null) {
    prefersDark.addEventListener('change', (mediaQuery) => {
      document.documentElement.classList.toggle('ion-palette-dark', mediaQuery.matches);
    });
  }
}

// Spuštění nastavení režimu před načtením aplikace
initializeDarkMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
