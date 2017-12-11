/// <reference path="references.d.ts" />

import * as tnsOauth from './tns-oauth';
import { AuthHelper } from './auth-helper';
import * as TnsOAuth from './tns-oauth-interfaces';

export class AuthHelperKeycloak extends AuthHelper implements TnsOAuth.ITnsAuthHelper {
    public credentials: TnsOAuth.ITnsOAuthCredentials;
    public tokenResult: TnsOAuth.ITnsOAuthTokenResult;

    constructor(credentials: TnsOAuth.ITnsOAuthCredentials) {
        super();
        this.credentials = credentials;
    }

    public logout() { 
        return this._logout(); 
    }

}