import * as fromAuth from '../reducers/auth.reduser';
import * as fromAction from '../action/auth.action';
import { User } from '../../shared/models/user.model';

describe('AuthReduser', () => {

    const user: User = {
        email: 'email',
        password: '123',
        name: 'name',
        id: 'id',
        avatar: 'image',
        type: 'test'
    };
        it('should return User_Success', () => {
            const {initialState} = fromAuth;
            const action = new fromAction.UserSuccess(user);
            const state = fromAuth.authReduser(initialState, action);

            expect(state.user).toEqual(user);
        });
});
