import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import ProfileDto from '../../models/profile.model';
import { LogoutComponent } from '../components/logout/logout.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  providers: [AuthService],
  imports: [MatProgressSpinnerModule, MatButtonModule, LogoutComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);
  isLoading: boolean = false;

  profile: ProfileDto = new ProfileDto();

  ngOnInit() {
    this.authService.getProfile().subscribe((profile: ProfileDto) => {
      this.profile.setFirstname(profile.firstname);
      this.profile.setLastname(profile.lastname);
      this.profile.setEmail(profile.email);
    });

    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  }

  logOut() {
    this.authService.logOut();
  }
}
