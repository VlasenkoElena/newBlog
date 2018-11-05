import { Action } from '@ngrx/store';
import { ErrorModel } from '../../shared/models/error.model';
import { User } from '../../shared/models/user.model';

export const CREATE_NEW_USER = '[CreateNewUser] CREATE_NEW_USER';
export const LOG_IN = '[LogInUser] LOG_IN';
export const USER_SUCCESS = '[UserSuccess] USER_SUCCESS';
export const GET_PROFILE = '[GetPofile] GET_PROFILE';
export const EDIT_AVATAR = '[EditAvatart] EDIT_AVATAR';
export const EDIT_AVATAR_SUCCESS = '[EditAvatarSuccess] EDIT_AVATAR_SUCCESS';
export const GET_AUTH_FAIL = '[AuthFail] GET_AUTH_FAIL';


export class CreateNewUser implements Action {
    readonly type = CREATE_NEW_USER;
    constructor(public payload: User) {}
}
export class LogIn implements Action {
    readonly type = LOG_IN;
    constructor(public payload: User) {}
}
export class UserSuccess implements Action {
    readonly type = USER_SUCCESS;
    constructor(public payload: User) {}
}
export class GetProfile implements Action {
    readonly type = GET_PROFILE;
}
export class EditAvatar implements Action {
    readonly type = EDIT_AVATAR;
    constructor(public payload: any) {}
}
export class EditAvatarSuccess implements Action {
    readonly type = EDIT_AVATAR_SUCCESS;
    constructor(public payload: User) {}
}
export class GetAuthFail implements Action {
    readonly type = GET_AUTH_FAIL;
    constructor(public payload: ErrorModel) {}
}


export type Action =
CreateNewUser |
LogIn |
UserSuccess |
GetProfile |
EditAvatarSuccess |
GetAuthFail;
