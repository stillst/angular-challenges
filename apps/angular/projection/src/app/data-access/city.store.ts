import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityStore {
  private cities: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);
  cities$: Observable<City[]> = this.cities.asObservable();

  addAll(cities: City[]): void {
    this.cities.next(cities);
  }

  addOne(city: City): void {
    this.cities.next([...this.cities.value, city]);
  }

  deleteOne(id: number): void {
    this.cities.next(this.cities.value.filter((t: City) => t.id !== id));
  }
}
