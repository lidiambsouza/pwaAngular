import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { MarcaCarro } from '../models/MarcaCarro';
import { map } from 'rxjs/operators';

interface CarResponse{
  Makes: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class MarcaCarroService {

  private API_CARROS ='https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes';
  constructor(private http: HttpClient) { }

  public getMarcas():Observable<MarcaCarro[]>{
    return this.http.jsonp(this.API_CARROS, 'callback')
    .pipe(
      map(())
    )
  }
}
