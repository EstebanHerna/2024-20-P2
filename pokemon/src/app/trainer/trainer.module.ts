import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { RouterModule } from '@angular/router'; 
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
  declarations: [TrainerListComponent, TrainerDetailComponent],
  imports: [CommonModule, RouterModule, PokemonModule],
  exports: [TrainerListComponent, TrainerDetailComponent], 
})
export class TrainerModule {}
