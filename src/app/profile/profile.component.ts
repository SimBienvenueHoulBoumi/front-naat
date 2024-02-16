import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  providers: [AuthService],
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  authService = inject(AuthService);

  ngOnInit() {
    console.log(
      this.authService.getProfile().subscribe((profile) => console.log(profile))
    );
  }
}
