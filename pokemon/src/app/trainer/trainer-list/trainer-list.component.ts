import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service'; 

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: Boolean = false; 
  selectedTrainer!: Trainer;

  constructor(private trainerService: TrainerService) {}

  ngOnInit() {
    this.trainerService.getTrainers().subscribe(
      (trainers) => {
        this.trainers = trainers;
      },
      (error) => {
        console.error('Error al cargar entrenadores:', error);
      }
    );
  }

  onSelected(trainer: Trainer) {
    this.selected = true; 
    this.selectedTrainer = trainer;
  }
}

