import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import ProfileDto from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  providers: [AuthService],
  imports: [MatProgressSpinnerModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);
  isLoading: boolean = false;

  profile!: ProfileDto;

  ngOnInit() {
    this.authService.getProfile().subscribe((profile: ProfileDto) => {
      this.profile.email = profile.email;
      this.profile.firstname = profile.firstname;
      this.profile.lastname = profile.lastname;

      console.log(this.profile); // Déplacer ici pour afficher après l'obtention du profil
    });

    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  }
}
