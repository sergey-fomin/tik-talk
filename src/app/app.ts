import { Component, signal } from '@angular/core';
import { ProfileCardList } from "./common-ui/profile-card-list/profile-card-list";

@Component({
  selector: 'app-root',
  imports: [ProfileCardList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tik-talk');
}
