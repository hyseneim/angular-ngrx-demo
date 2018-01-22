import { Action } from "@ngrx/store";

export const INCREMENT = '[Counter] INCREMENT';
export const TWICE_INCREMENT = '[Counter] TWICE_INCREMENT';
export const TWICE_INCREMENT_SUCCESS = '[Counter] TWICE_INCREMENT_SUCCESS';
export const TWICE_INCREMENT_FAILED = '[Counter] TWICE_INCREMENT_FAILED';
export const DECREMENT = '[Counter] DECREMENT';
export const RESET = '[Counter] RESET';

export class Increment implements Action {
    readonly type = INCREMENT;
}

export class TwiceIncrement implements Action {
    readonly type = TWICE_INCREMENT;
}

export class TwiceIncrementSuccess implements Action {
    readonly type = TWICE_INCREMENT_SUCCESS;
}

export class TwiceIncrementFailed implements Action {
    readonly type = TWICE_INCREMENT_FAILED;

    constructor(public error: any) {
        
    }
}

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export class Reset implements Action {
    readonly type = RESET;

    constructor(public payload: number) {}
}

export type All = Increment | TwiceIncrement | TwiceIncrementSuccess | TwiceIncrementFailed | Decrement | Reset;