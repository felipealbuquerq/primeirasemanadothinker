import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-card-footer',
  templateUrl: './cta-card-footer.component.html',
  styleUrls: ['./cta-card-footer.component.scss'],
})
export class CtaCardFooterComponent {
  discordLink = 'https://discord.gg/swaQNf9';

  getDiscord() {
    window.open(this.discordLink, '_blank');
  }
}
