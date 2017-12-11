/// <reference path="tns-oauth-webview-helper.android.ts" />
/// <reference path="tns-oauth-webview-helper.ios.ts" />

import { WebView  } from 'ui/web-view';

export declare class TnsOAuthWebViewHelper {
    constructor();

    static initWithWebViewAndIntercept(wv: WebView, checkCodeIntercept);
}
