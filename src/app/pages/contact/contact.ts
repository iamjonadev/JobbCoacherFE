import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Navbar,
    Footer
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {
  isOpen: boolean = false;
  contactForm: FormGroup;

  kommuner: string[] = [    "Ale", "Alingsås", "Alvesta", "Aneby", "Arboga", "Arjeplog", "Arvidsjaur", "Arvika",
    "Askersund", "Avesta", "Bengtsfors", "Berg", "Bjurholm", "Bjuv", "Boden", "Bollebygd",
    "Bollnäs", "Borgholm", "Borlänge", "Borås", "Botkyrka", "Boxholm", "Bromölla", "Bräcke",
    "Burlöv", "Båstad", "Dals-Ed", "Danderyd", "Degerfors", "Dorotea", "Eda", "Ekerö",
    "Eksjö", "Emmaboda", "Enköping", "Eskilstuna", "Eslöv", "Essunga", "Fagersta", "Falkenberg",
    "Falköping", "Falun", "Filipstad", "Finspång", "Flen", "Forshaga", "Färgelanda", "Gagnef",
    "Gislaved", "Gnesta", "Gnosjö", "Gotland", "Grums", "Grästorp", "Gullspång", "Gällivare",
    "Gävle", "Göteborg", "Götene", "Habo", "Hagfors", "Hallsberg", "Hallstahammar", "Halmstad",
    "Hammarö", "Haninge", "Haparanda", "Heby", "Hedemora", "Helsingborg", "Herrljunga", "Hjo",
    "Hofors", "Huddinge", "Hudiksvall", "Hultsfred", "Hylte", "Håbo", "Hällefors", "Härjedalen",
    "Härnösand", "Härryda", "Hässleholm", "Höganäs", "Högsby", "Hörby", "Höör", "Jokkmokk",
    "Järfälla", "Jönköping", "Kalix", "Kalmar", "Karlsborg", "Karlshamn", "Karlskoga", "Karlskrona",
    "Karlstad", "Katrineholm", "Kil", "Kinda", "Kiruna", "Klippan", "Knivsta", "Kramfors",
    "Kristianstad", "Kristinehamn", "Krokom", "Kumla", "Kungsbacka", "Kungsör", "Kungälv", "Kävlinge",
    "Köping", "Laholm", "Landskrona", "Laxå", "Lekeberg", "Leksand", "Lerum", "Lessebo",
    "Lidingö", "Lidköping", "Lilla Edet", "Lindesberg", "Linköping", "Ljungby", "Ljusdal", "Ljusnarsberg",
    "Lomma", "Ludvika", "Luleå", "Lund", "Lycksele", "Lysekil", "Malmö", "Malung-Sälen",
    "Malå", "Mariestad", "Mark", "Markaryd", "Mellerud", "Mjölby", "Mora", "Motala",
    "Mullsjö", "Munkedal", "Munkfors", "Mölndal", "Mönsterås", "Mörbylånga", "Nacka", "Nora",
    "Norberg", "Nordanstig", "Nordmaling", "Norrköping", "Norrtälje", "Norsjö", "Nybro", "Nykvarn",
    "Nyköping", "Nynäshamn", "Nässjö", "Ockelbo", "Olofström", "Orsa", "Orust", "Osby",
    "Oskarshamn", "Ovanåker", "Oxelösund", "Pajala", "Partille", "Perstorp", "Piteå", "Ragunda",
    "Robertsfors", "Ronneby", "Rättvik", "Sala", "Salem", "Sandviken", "Sigtuna", "Simrishamn",
    "Sjöbo", "Skara", "Skellefteå", "Skinnskatteberg", "Skurup", "Skövde", "Smedjebacken", "Sollefteå",
    "Sollentuna", "Solna", "Sorsele", "Sotenäs", "Staffanstorp", "Stenungsund", "Stockholm", "Storfors",
    "Storuman", "Strängnäs", "Strömstad", "Strömsund", "Sundbyberg", "Sundsvall", "Sunne", "Surahammar",
    "Svalöv", "Svedala", "Svenljunga", "Säffle", "Säter", "Sävsjö", "Söderhamn", "Söderköping",
    "Södertälje", "Sölvesborg", "Tanum", "Tibro", "Tidaholm", "Tierp", "Timrå", "Tingsryd",
    "Tjörn", "Tomelilla", "Torsby", "Torsås", "Tranemo", "Tranås", "Trelleborg", "Trollhättan",
    "Trosa", "Tyresö", "Täby", "Töreboda", "Uddevalla", "Ulricehamn", "Umeå", "Upplands Väsby",
    "Upplands-Bro", "Uppsala", "Uppvidinge", "Vadstena", "Vaggeryd", "Valdemarsvik", "Vallentuna", "Vansbro",
    "Vara", "Varberg", "Vaxholm", "Vellinge", "Vetlanda", "Vilhelmina", "Vimmerby", "Vindeln",
    "Vingåker", "Vårgårda", "Vänersborg", "Vännäs", "Värmdö", "Värnamo", "Västervik", "Västerås",
    "Växjö", "Ydre", "Ystad", "Åmål", "Ånge", "Åre", "Årjäng", "Åsele",
    "Åstorp", "Åtvidaberg", "Älmhult", "Älvdalen", "Älvkarleby", "Älvsbyn", "Ängelholm", "Öckerö",
    "Ödeshög", "Örebro", "Örkelljunga", "Örnsköldsvik", "Östersund", "Österåker", "Östhammar", "Östra Göinge"];

  kommunSearch: string = '';
  filteredKommuner: string[] = [...this.kommuner];
  showDropdown = false;
  activeIndex: number = -1;

  constructor(private fb: FormBuilder, private seo: SEOService) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      kommun: [''],
      about: [''],
      af: [''], // now stores a date string like "2023-06-01"
    });
  }

  ngOnInit(): void {
    this.seo.updateSEO({
      title: 'Kontakta oss – ABC Jobbcoacher i Sollentuna | ABC Jobbcoacher',
      description: 'Har du frågor om karriärcoachning, CV-granskning eller intervjuträning? Kontakta ABC Jobbcoacher för personlig rådgivning i din kommun. Vi finns i Sollentuna och Upplands Väsby.',
      keywords: 'kontakt jobbcoach, karriärcoachning sollentuna, CV hjälp, intervjuträning, jobbcoaching Upplands Väsby, karriärrådgivning Sverige',
      ogTitle: 'Kontakta ABC Jobbcoacher – Personlig karriärhjälp nära dig',
      ogDescription: 'Boka ett kostnadsfritt möte med våra jobbcoacher i Sollentuna. Vi hjälper dig ta nästa steg i karriären.',
      ogUrl: 'https://abcjobbcoacher.se/contact',
      canonical: 'https://abcjobbcoacher.se/contact'
    });
  }

  sanitizePhone() {
  let raw = this.contactForm.value.phone || '';
  raw = raw.replace(/\D/g, ''); // remove non-digits
  this.contactForm.patchValue({ phone: raw });
}


  filterKommuner() {
    const search = this.kommunSearch.toLowerCase();
    this.filteredKommuner = this.kommuner.filter(k =>
      k.toLowerCase().includes(search)
    );
    this.activeIndex = -1;
  }

  selectKommun(k: string) {
    this.kommunSearch = k;
    this.contactForm.patchValue({ kommun: k });
    this.showDropdown = false;
    this.activeIndex = -1;
  }

  onKommunInput(event: Event) {
  const input = event.target as HTMLInputElement;
  this.kommunSearch = input.value;
  this.filterKommuner();
}

  handleKey(event: KeyboardEvent) {
    if (!this.showDropdown || this.filteredKommuner.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeIndex = (this.activeIndex + 1) % this.filteredKommuner.length;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeIndex =
        (this.activeIndex - 1 + this.filteredKommuner.length) % this.filteredKommuner.length;
    }

    if (event.key === 'Enter' && this.activeIndex >= 0) {
      event.preventDefault();
      this.selectKommun(this.filteredKommuner[this.activeIndex]);
    }

    if (event.key === 'Escape') {
      this.showDropdown = false;
      this.activeIndex = -1;
    }
  }

  togggleModal(e: any) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // TODO: send to backend API
    } else {
      console.log('Form is invalid');
    }
  }
}

