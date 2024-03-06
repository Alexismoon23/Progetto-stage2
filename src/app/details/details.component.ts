import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housing-location/housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
     <p>details works! </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
