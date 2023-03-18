import { Injectable } from '@angular/core';
import { BaseService, Data } from './models/BaseService';

@Injectable({
  providedIn: 'root'
})

export class SampleService implements BaseService {

  data: Data = {
    id: 1,
    sequenceNumber: 1,
    payload: ''
  }

  'test1' = this.data
  test = this.data

  constructor() { }
}
