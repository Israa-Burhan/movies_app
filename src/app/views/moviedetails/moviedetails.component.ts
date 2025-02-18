import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {
  id: string = '';
  details: any;
  imgComplete: string = 'https://image.tmdb.org/t/p/w500';
  loading: boolean = false;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {
    this.id = _ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._MoviesService.getDetails(this.id).subscribe((response) => {
      this.details = response;
      this.loading = true;
    });
  }
}
