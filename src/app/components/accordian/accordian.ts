import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './accordian.html',
  styleUrl: './accordian.scss'
})
export class Accordian {
  data = [
    {
      id: 1,
      title: 'Hur fungerar Rusta och Matcha?',
      desc: 'Vi matchar dig med en personlig coach som hjälper dig att skapa en jobbsökningsstrategi, förbättra ditt CV och träna inför intervjuer. Tillsammans hittar vi rätt väg till arbete eller studier.'
    },
    {
      id: 2,
      title: 'Behöver jag ett färdigt CV för att börja?',
      desc: 'Nej, du kan börja direkt. Vi erbjuder CV‑granskning och hjälper dig att strukturera och optimera ditt CV så att det sticker ut för arbetsgivare.'
    },
    {
      id: 3,
      title: 'Vad innebär intervjuträning?',
      desc: 'Du får öva på vanliga intervjufrågor, kroppsspråk och presentationsteknik. Din coach ger feedback så att du känner dig trygg och förberedd inför riktiga intervjuer.'
    },
    {
      id: 4,
      title: 'Hur fungerar karriärcoaching?',
      desc: 'Karriärcoaching är individuell rådgivning där vi sätter upp mål, identifierar styrkor och planerar nästa steg i din karriär. Det kan handla om att byta bransch, utvecklas i din nuvarande roll eller hitta nya möjligheter.'
    },
    {
      id: 5,
      title: 'Kostar det något att delta?',
      desc: 'Nej, om du är inskriven hos Arbetsförmedlingen och blir beviljad Rusta och Matcha är tjänsten kostnadsfri för dig.'
    }
  ];

 activeTab:number = 1;

  toggleBtn(index: number){
    this.activeTab = index
  }
}
