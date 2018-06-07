

import * as querystring from 'querystring';
import * as URL from 'url';
import * as http from 'http';
import * as trace from "trace";
import * as platform from 'platform';
import * as utils from './tns-oauth-utils';

import * as frameModule from 'ui/frame';
import * as viewModule from "ui/core/view";
import * as application from "application";

import { TnsOAuthPageProvider } from './tns-oauth-page-provider';
import { TnsOAuthTokenCache } from './tns-oauth-token-cache';
import * as TnsOAuthModule from './tns-oauth-interfaces';
import { ViewBase } from 'ui/core/view';

export var ACCESS_TOKEN_CACHE_KEY;
export var REFRESH_TOKEN_CACHE_KEY;

/**
 * Gets a new access token via a previously issued refresh token.
 */
export function getTokenFromRefreshToken(credentials: TnsOAuthModule.ITnsOAuthCredentials, refreshToken: string): Promise<TnsOAuthModule.ITnsOAuthTokenResult>;


/**
 * Generate a fully formed uri to use for authentication based on the supplied resource argument
 * @return {string} a fully formed uri with which authentication can be completed
 */
export function getAuthUrl(credentials: TnsOAuthModule.ITnsOAuthCredentials): string;

export function getTokenFromCache();

export function loginViaAuthorizationCodeFlow(credentials: TnsOAuthModule.ITnsOAuthCredentials, successPage?: string): Promise<TnsOAuthModule.ITnsOAuthTokenResult>;

export function refreshToken(credentials: TnsOAuthModule.ITnsOAuthCredentials): Promise<TnsOAuthModule.ITnsOAuthTokenResult>;

export function logout(cookieDomains: string[], successPage?: string);
