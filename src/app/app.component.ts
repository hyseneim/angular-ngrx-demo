import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as CounterActions from './actions/counter.actions';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  
  counter: Observable<number>;
  
	constructor(private store: Store<AppState>) {
		this.counter = store.select('counter');
	}

	increment() {
		this.store.dispatch(new CounterActions.Increment());
	}

	decrement() {
		this.store.dispatch(new CounterActions.Decrement());
	}

	reset() {
		this.store.dispatch(new CounterActions.Reset(0));
  }
  
}
