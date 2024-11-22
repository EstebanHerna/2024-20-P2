import { Component, Input, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from '../Trainer';
import { Pokemon } from '../../pokemon/Pokemon';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer; 
  trainer: any;

  constructor(
    private trainerService: TrainerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.trainerService.getTrainerById(id).subscribe(
      (trainer) => {
        this.trainerDetail = trainer;
        this.createChart();
      },
      (error) => {
        console.error('Error al cargar el detalle del entrenador:', error);
      }
    );
  }

  getAverageLevel(): number {
    if (this.trainerDetail && this.trainerDetail.pokemons.length > 0) {
      const totalLevel = this.trainerDetail.pokemons.reduce(
        (acc: number, pokemon: Pokemon) => acc + pokemon.level,
        0
      );
      return totalLevel / this.trainerDetail.pokemons.length;
    }
    return 0; 
  }

  createChart() {
    const levels = this.trainerDetail.pokemons.map((pokemon: Pokemon) => pokemon.level);
    const labels = this.trainerDetail.pokemons.map((pokemon: Pokemon) => pokemon.name);

    new Chart('pokemonChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Niveles de Pokémon',
            data: levels,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100, 
          },
        },
      },
    });
  }
}

