import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as CounterActions from './actions/counter.actions';

import { AppState } from './store/app-state';

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

	twiceIncrement() {
		this.store.dispatch(new CounterActions.TwiceIncrement());
	}

	decrement() {
		this.store.dispatch(new CounterActions.Decrement());
	}

	reset() {
		this.store.dispatch(new CounterActions.Reset(0));
  }
  
}
