"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_helper_1 = require("./auth-helper");
var AuthHelperLinkedIn = (function (_super) {
    __extends(AuthHelperLinkedIn, _super);
    function AuthHelperLinkedIn(clientId, clientSecret, redirectUri, scope) {
        var _this = _super.call(this) || this;
        var scopeStr = scope.join('%20');
        _this.credentials = {
            authority: 'https://www.linkedin.com',
            tokenEndpointBase: 'https://www.linkedin.com',
            authorizeEndpoint: '/oauth/v2/authorization',
            tokenEndpoint: '/oauth/v2/accessToken',
            clientId: clientId,
            clientSecret: clientSecret,
            redirectUri: redirectUri,
            scope: scopeStr
        };
        return _this;
    }
    AuthHelperLinkedIn.prototype.logout = function (successPage) {
        var cookieDomains = [".linkedin.com"];
        return this._logout(successPage, cookieDomains);
    };
    return AuthHelperLinkedIn;
}(auth_helper_1.AuthHelper));
exports.AuthHelperLinkedIn = AuthHelperLinkedIn;
