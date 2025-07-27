import { Component, inject, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile.service';
import { map } from 'rxjs';
import { ProfileCard } from "../profile-card/profile-card";

@Component({
  selector: 'tt-profile-card-list',
  imports: [ProfileCard],
  templateUrl: './profile-card-list.html',
  styleUrl: './profile-card-list.scss'
})
export class ProfileCardList {
  protected readonly profileService = inject(ProfileService)

  public profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().pipe(
      map(res => this.profiles = res)
    ).subscribe()
  }

}
