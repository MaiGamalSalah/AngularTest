import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck {
  @Input() childName: string = '';
  @Output() childData = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('Child Component Initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child Component Changes', changes);
  }

  ngDoCheck(): void {
    console.log('Child Component DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Child Component AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Child Component AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Child Component AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Child Component AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Child Component Destroyed');
  }

  sendData(): void {
    this.childData.emit(`Hello ${this.childName} from Child`);
  }
} 
