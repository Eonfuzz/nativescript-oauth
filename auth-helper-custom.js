"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_helper_1 = require("./auth-helper");
var AuthHelperCustom = (function (_super) {
    __extends(AuthHelperCustom, _super);
    function AuthHelperCustom(credentials, cookieDomains) {
        var _this = _super.call(this) || this;
        _this.cookieDomains = cookieDomains;
        _this.credentials = __assign({}, credentials, { scope: credentials.scope.replace(/ /g, '%20') });
        return _this;
    }
    AuthHelperCustom.prototype.logout = function (successPage) {
        return this._logout(successPage, this.cookieDomains);
    };
    return AuthHelperCustom;
}(auth_helper_1.AuthHelper));
exports.AuthHelperCustom = AuthHelperCustom;
