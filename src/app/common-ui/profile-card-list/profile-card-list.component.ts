import { Component, inject, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile.service';
import { map } from 'rxjs';
import { ProfileCardComponent } from "../profile-card/profile-card.component";

@Component({
  selector: 'tt-profile-card-list',
  imports: [ProfileCardComponent],
  templateUrl: './profile-card-list.component.html',
  styleUrl: './profile-card-list.component.scss'
})
export class ProfileCardListComponent {
  protected readonly profileService = inject(ProfileService)

  public profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().pipe(
      map(res => this.profiles = res)
    ).subscribe()
  }

}
