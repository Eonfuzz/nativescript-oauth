import { WebView } from 'ui/web-view';

export class TnsOAuthWebViewHelper extends NSObject implements WKNavigationDelegate {
    public static ObjCProtocols = [WKNavigationDelegate];

    private _owner: WeakRef<WebView>;
    private _origDelegate: any; //UIWebViewDelegateImpl
    private _checkCodeIntercept: (WebView, error?, url?) => boolean;

    constructor() {
        super();
    }

    public static initWithWebViewAndIntercept(wv: WebView, checkCodeIntercept) {
        (<any>wv)._delegate = TnsOAuthWebViewHelper.initWithOwner(new WeakRef(wv), checkCodeIntercept);
    }

    private static initWithOwner(owner: WeakRef<WebView>, checkCodeIntercept): TnsOAuthWebViewHelper {
        let delegate = new TnsOAuthWebViewHelper();
        delegate._owner = owner;
        delegate._origDelegate = (<any>owner.get())._delegate;
        delegate._checkCodeIntercept = checkCodeIntercept;
        return delegate;
    }
  
   public webViewDecidePolicyForNavigationActionDecisionHandler?(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler): void {
        this._origDelegate.webViewDecidePolicyForNavigationActionDecisionHandler(webView, navigationAction, decisionHandler);
    }

    public webViewDecidePolicyForNavigationResponseDecisionHandler?(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler): void {
        //this._checkCodeIntercept(webView, null);
        decisionHandler(WKNavigationActionPolicy.Allow);
    }
  
    public webViewDidFailNavigationWithError?(webView: WKWebView, navigation: WKNavigation, error: NSError): void {
      this._checkCodeIntercept(webView, error);
      this._origDelegate.webViewDidFailNavigationWithError(webView, navigation, error);
    }
  
    public webViewDidFinishNavigation?(webView: WKWebView, navigation: WKNavigation): void {
      this._origDelegate.webViewDidFinishNavigation(webView, navigation);
    }
  
    /**
     * This is the one we want for receiving 'code' on redirect.
     */
    public webViewDidReceiveServerRedirectForProvisionalNavigation?(webView: WKWebView, navigation: WKNavigation): void {
      this._checkCodeIntercept(webView, null);
    }

    public webViewDidStartProvisionalNavigation?(webView: WKWebView, navigation: WKNavigation): void {
      this._origDelegate.webViewDidStartProvisionalNavigation(webView, navigation);
    }

}
