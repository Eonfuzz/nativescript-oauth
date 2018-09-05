"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var querystring = require("querystring");
var auth_helper_1 = require("./auth-helper");
var AuthHelperSalesforce = (function (_super) {
    __extends(AuthHelperSalesforce, _super);
    function AuthHelperSalesforce(authority, clientId, redirectUri, responseType, scope, clientSecret) {
        var _this = _super.call(this) || this;
        var scopeStr = scope.join('%20');
        _this.credentials = {
            authority: authority,
            authorizeEndpoint: '/services/oauth2/authorize',
            tokenEndpoint: '/services/oauth2/token',
            revokeEndpoint: '/services/oauth2/revoke',
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: redirectUri,
            responseType: responseType,
            scope: scopeStr
        };
        return _this;
    }
    AuthHelperSalesforce.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var revoke_url = _this.credentials.authority + _this.credentials.revokeEndpoint;
                var post_headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
                var post_body = querystring.stringify({ token: _this.tokenResult.refreshToken });
                http.request({
                    url: revoke_url,
                    method: 'POST',
                    headers: post_headers,
                    content: post_body
                }).then(function (response) {
                    if (response.statusCode != 200) {
                        throw new Error("Failed logout with status " + response.statusCode + ".");
                    }
                });
                _this.tokenResult = null;
                resolve();
            }
            catch (er) {
                reject(er);
            }
        });
    };
    return AuthHelperSalesforce;
}(auth_helper_1.AuthHelper));
exports.AuthHelperSalesforce = AuthHelperSalesforce;
