import { Injectable } from '@angular/core';
import {Cars} from '../models/Cars';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
cars: [];

  constructor(private carModel: Cars) { }

getCars() {
return this.cars;
}

getParamsCar() {
  return this.carModel;
}

 Cars(cars) {
  this.cars = cars;
}

setCarsAttribut(cars: Cars){
  this.carModel = cars;
}


putDataFromJsonObject(question, value) {
  switch(question.attributForApiParam){
    case "year": {
      this.carModel.Year = value; break;
 
    }
    case "carMarque": {
      this.carModel.CarMarque = value; break;
    }
    case "carModel": {
      this.carModel.CarModel = value; break;
    }
    case "carAlimentationLabel": {
      this.carModel.CarAlimentationLabel = value; break;
    }
    case "carCvNumber":  {
      this.carModel.CarCvNumber = value;break;
    }
    case "carVersion": {
      this.carModel.CarVersion = value; break;
    }
    default: return false;
  }
  this.setCarsAttribut(this.carModel);
}

}
