import { NgStyle } from '@angular/common';
import { NgTemplateOutlet } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { TemplateRef } from '@angular/core';
import { ContentChild } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { CardItemTmpDirective } from './card-item-tmp.directive';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgFor, ListItemComponent, NgTemplateOutlet, NgStyle],
})
export class CardComponent<T extends { id: number }, U> {
  @Input()
  list: T[] = [];

  @Input()
  color?: string;

  @ContentChild(CardItemTmpDirective, { read: TemplateRef })
  readonly cardItemTmp?: TemplateRef<U> | null;

  @Output()
  addItem: EventEmitter<void> = new EventEmitter<void>();

  itemById(_: number, item: T): number {
    return item.id;
  }
}
