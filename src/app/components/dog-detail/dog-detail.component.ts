import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../../dog.service';
import { DogData } from '../../models/dog.model';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html'
})
export class DogDetailComponent implements OnInit {
  dog?: DogData;
  constructor(private route: ActivatedRoute, private dogService: DogService) {}
  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.dogService.getDogs().subscribe(data => {
      this.dog = data.find(d => d.name === name);
    });
  }
}