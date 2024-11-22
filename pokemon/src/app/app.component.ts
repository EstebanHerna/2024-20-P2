import { Component, OnInit } from '@angular/core';
import { TrainerService } from './trainer/trainer.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent implements OnInit {
  title = 'pokemon';

  constructor(private trainerService: TrainerService) {}

  ngOnInit() {
    this.trainerService.getTrainers().subscribe((trainers) => {
      console.log('Listado de entrenadores:', trainers);
    });

    const trainerId = 1;
    this.trainerService.getTrainerById(trainerId).subscribe((trainer) => {
      console.log('Detalle del entrenador:', trainer);
    });
  }
}
