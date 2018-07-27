import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Modified by <b><a href="https://akveo.com" target="_blank">PushUp</a></b> 2018</span>
    <div class="socials">
      <a href="https://www.instragram.com" target="_blank" class="ion ion-social-instagram"></a>
      <a href="https://www.whatsapp.com" target="_blank" class="ion ion-social-whatsapp"></a>
      <a href="https://www.facebook.com/Push-Up-160295974649289/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.twitter.com" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
