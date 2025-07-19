import { Component, OnInit } from '@angular/core';
import { DogService } from '../../dog.service';
import { DogData } from '../../models/dog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html'
})
export class DogListComponent implements OnInit {
  dogs: DogData[] = [];
  constructor(private dogService: DogService, private router: Router) {}
  ngOnInit(): void {
    this.dogService.getDogs().subscribe(data => this.dogs = data);
  }
  goToDetail(dog: DogData) {
    this.router.navigate(['/dogs', dog.name]);
  }
}