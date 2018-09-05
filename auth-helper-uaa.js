"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_helper_1 = require("./auth-helper");
var AuthHelperUaa = (function (_super) {
    __extends(AuthHelperUaa, _super);
    function AuthHelperUaa(authority, redirectUri, clientId, clientSecret, scope, cookieDomains, basicAuthHeader) {
        var _this = _super.call(this) || this;
        var scopeStr = scope.join('%20');
        var uaaCreds = {
            authority: authority,
            authorizeEndpoint: '/oauth/authorize',
            tokenEndpoint: '/oauth/token',
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: redirectUri,
            scope: scopeStr,
            basicAuthHeader: basicAuthHeader
        };
        _this.credentials = uaaCreds;
        _this._cookieDomains = cookieDomains;
        return _this;
    }
    AuthHelperUaa.prototype.logout = function (successPage) {
        var cookieDomains = this._cookieDomains;
        return this._logout(successPage, cookieDomains);
    };
    return AuthHelperUaa;
}(auth_helper_1.AuthHelper));
exports.AuthHelperUaa = AuthHelperUaa;
