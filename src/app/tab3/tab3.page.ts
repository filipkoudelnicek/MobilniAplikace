import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab3Page {

  paletteToggle = false;

  ngOnInit() {
    // Načtení uložené volby z Local Storage
    const savedTheme = localStorage.getItem('dark-mode');
    console.log('Načtená hodnota z Local Storage:', savedTheme);

    // Nastavení přepínače podle uložené hodnoty
    this.paletteToggle = savedTheme === 'true';

    // Aplikace režimu
    this.toggleDarkPalette(this.paletteToggle);
  }

  // Uložení volby při změně přepínače
  toggleChange(ev: any) {
    this.paletteToggle = ev.detail.checked;
    console.log('Přepínač změněn na:', this.paletteToggle);

    // Uložení hodnoty do Local Storage
    localStorage.setItem('dark-mode', this.paletteToggle.toString());
    console.log('Uloženo do Local Storage:', localStorage.getItem('dark-mode'));

    // Přepnutí režimu
    this.toggleDarkPalette(this.paletteToggle);
  }

  // Přepínání tmavého/světlého režimu
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
}
