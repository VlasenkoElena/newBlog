import * as authAction from '../action/auth.action';
import { User } from '../../shared/models/user.model';

export interface AuthState {
    user: User | null;
}

 export const initialState: AuthState = { user: null };

 export function authReduser(state = initialState, action: authAction.Action) {
        switch (action.type) {
            case authAction.USER_SUCCESS: {
                return {
                    ...state,
                    user: action.payload
                };
            }
            default:
            return state;
        }
    }

    export const userSuccess = (state: AuthState): any => state.user;
