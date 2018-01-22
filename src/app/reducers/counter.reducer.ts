import * as CounterActions from '../actions/counter.actions';

export type Action = CounterActions.All;

export function counterReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case CounterActions.INCREMENT: {
			return state + 1;
        }
		case CounterActions.TWICE_INCREMENT: {
			return state + 2;
        }
		case CounterActions.TWICE_INCREMENT_SUCCESS: {
			console.info(CounterActions.TWICE_INCREMENT_SUCCESS);
			return state;
        }
		case CounterActions.TWICE_INCREMENT_FAILED: {
			console.error(CounterActions.TWICE_INCREMENT_FAILED);
			return state;
        }
		case CounterActions.DECREMENT: {
			return state - 1;
        }
		case CounterActions.RESET: {
            return action.payload;
        }
		default: {
			return state;
        }
	}
}