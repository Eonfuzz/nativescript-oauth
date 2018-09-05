"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_view_1 = require("ui/web-view");
var application_1 = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var SOFT_INPUT_ADJUST_RESIZE = 16;
var TnsOauthWebView = (function (_super) {
    __extends(TnsOauthWebView, _super);
    function TnsOauthWebView(_cancelEventHandler) {
        var _this = _super.call(this) || this;
        _this._cancelEventHandler = _cancelEventHandler;
        return _this;
    }
    TnsOauthWebView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        if (platform_1.isAndroid) {
            this.android.getSettings().setBuiltInZoomControls(false);
            this.setAndroidSoftInputModeToResize();
        }
    };
    TnsOauthWebView.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        this._cancelEventHandler("User cancelled.");
        if (platform_1.isAndroid) {
            this.restoreAndroidSoftInputMode();
        }
    };
    TnsOauthWebView.prototype.setAndroidSoftInputModeToResize = function () {
        var window = application_1.android.foregroundActivity.getWindow();
        this.originalSoftInputMode = window.getAttributes().softInputMode;
        window.setSoftInputMode(SOFT_INPUT_ADJUST_RESIZE);
    };
    TnsOauthWebView.prototype.restoreAndroidSoftInputMode = function () {
        var window = application_1.android.foregroundActivity.getWindow();
        window.setSoftInputMode(this.originalSoftInputMode);
    };
    return TnsOauthWebView;
}(web_view_1.WebView));
exports.TnsOauthWebView = TnsOauthWebView;
