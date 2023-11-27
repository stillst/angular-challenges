import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { City } from '../../model/city.model';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { CardItemTmpDirective } from '../../ui/card/card-item-tmp.directive';

@Component({
  selector: 'app-city-card',
  templateUrl: 'city-card.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    NgOptimizedImage,
    CardItemTmpDirective,
    ListItemComponent,
  ],
})
export class CityCardComponent {
  @Input()
  cities: City[] = [];

  @Output()
  addCity: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  deleteCity: EventEmitter<number> = new EventEmitter<number>();

  readonly cityCardColor: string = 'rgba(0, 0, 250, 0.1)';
}
