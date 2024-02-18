import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-create-new-task',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './create-new-task.component.html',
  styleUrl: './create-new-task.component.css'
})
export class CreateNewTaskComponent implements OnInit{
  isLoading: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  }
}
