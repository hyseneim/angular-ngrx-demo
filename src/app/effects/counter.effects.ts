import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as CounterActions from '../actions/counter.actions';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';

@Injectable()
export class CounterEffects {
    
  @Effect({ dispatch: true })
  twiceIncrement$ = this.actions$.ofType(CounterActions.TWICE_INCREMENT)
    .switchMap(action => {
      // Async call
      return Observable.of([]);
    })
    .map((data) => {
      //  throw "hey";
      return new CounterActions.TwiceIncrementSuccess();
    })
    .catch(err => {
      return Observable.of(new CounterActions.TwiceIncrementFailed(err))
    });
    
  constructor(
    private actions$: Actions
  ) {

  }

}