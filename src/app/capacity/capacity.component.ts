import { Component, OnInit } from '@angular/core';
import {CapacityService} from '@app/shared/service/capacity.service';
import {Capacity} from '@app/shared/model/capacity';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss']
})
export class CapacityComponent implements OnInit {

  capacities: Capacity[];
  constructor(private capacityService: CapacityService) {
    this.capacities = [];
  }

  ngOnInit() {
    this.capacityService.getCapacities().subscribe(value => {
      this.capacities = value;
    });
  }

}
