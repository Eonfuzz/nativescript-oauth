"use strict";
/// <reference path="references.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var auth_helper_office365_1 = require("./auth-helper-office365");
var auth_helper_facebook_1 = require("./auth-helper-facebook");
var auth_helper_google_1 = require("./auth-helper-google");
var auth_helper_uaa_1 = require("./auth-helper-uaa");
var auth_helper_linkedin_1 = require("./auth-helper-linkedin");
var auth_helper_salesforce_1 = require("./auth-helper-salesforce");
var auth_helper_custom_1 = require("./auth-helper-custom");
exports.instance = null;
function initOffice365(options) {
    return new Promise(function (resolve, reject) {
        try {
            if (exports.instance !== null) {
                reject("You already ran init");
                return;
            }
            exports.instance = new auth_helper_office365_1.AuthHelperOffice365(options.clientId, options.scope);
            resolve(exports.instance);
        }
        catch (ex) {
            console.log("Error in AuthHelperOffice365.init: " + ex);
            reject(ex);
        }
    });
}
exports.initOffice365 = initOffice365;
function initFacebook(options) {
    return new Promise(function (resolve, reject) {
        try {
            if (exports.instance !== null) {
                reject("You already ran init");
                return;
            }
            exports.instance = new auth_helper_facebook_1.AuthHelperFacebook(options.clientId, options.clientSecret, options.scope);
            resolve(exports.instance);
        }
        catch (ex) {
            console.log("Error in AuthHelperFacebook.init: " + ex);
            reject(ex);
        }
    });
}
exports.initFacebook = initFacebook;
function initGoogle(options) {
    return new Promise(function (resolve, reject) {
        try {
            if (exports.instance !== null) {
                reject("You already ran init");
                return;
            }
            exports.instance = new auth_helper_google_1.AuthHelperGoogle(options.clientId, options.scope);
            resolve(exports.instance);
        }
        catch (ex) {
            console.log("Error in AuthHelperGoogle.init: " + ex);
            reject(ex);
        }
    });
}
exports.initGoogle = initGoogle;
function initUaa(options) {
    return new Promise(function (resolve, reject) {
        try {
            if (exports.instance !== null) {
                reject("You already ran init");
                return;
            }
            exports.instance = new auth_helper_uaa_1.AuthHelperUaa(options.authority, options.redirectUri, options.clientId, options.clientSecret, options.scope, options.cookieDomains, options.basicAuthHeader);
            resolve(exports.instance);
        }
        catch (ex) {
            console.log("Error in AuthHelperUaa.init: " + ex);
            reject(ex);
        }
    });
}
exports.initUaa = initUaa;
function initLinkedIn(options) {
    return new Promise(function (resolve, reject) {
        try {
            if (exports.instance !== null) {
                reject("You already ran init");
                return;
            }
            exports.instance = new auth_helper_linkedin_1.AuthHelperLinkedIn(options.clientId, options.clientSecret, options.redirectUri, options.scope);
            resolve(exports.instance);
        }
        catch (ex) {
            console.log("Error in AuthHelperLinkedIn.init: " + ex);
            reject(ex);
        }
    });
}
exports.initLinkedIn = initLinkedIn;
function initSalesforce(options) {
    return new Promise(function (resolve, reject) {
        try {
            if (exports.instance !== null) {
                reject("You already ran init");
                return;
            }
            exports.instance = new auth_helper_salesforce_1.AuthHelperSalesforce(options.authority, options.clientId, options.redirectUri, options.responseType, options.scope);
            resolve(exports.instance);
        }
        catch (ex) {
            console.log("Error in AuthHelperSalesforce.init: " + ex);
            reject(ex);
        }
    });
}
exports.initSalesforce = initSalesforce;
function initCustom(options) {
    return new Promise(function (resolve, reject) {
        try {
            if (exports.instance !== null) {
                reject("You already ran init");
                return;
            }
            exports.instance = new auth_helper_custom_1.AuthHelperCustom(options.credentials, options.cookieDomains);
            resolve(exports.instance);
        }
        catch (ex) {
            console.log("Error in AuthHelperCustom.init: " + ex);
            reject(ex);
        }
    });
}
exports.initCustom = initCustom;
function accessToken() {
    return exports.instance.tokenResult.accessToken;
}
exports.accessToken = accessToken;
function login(successPage) {
    return exports.instance.login(successPage);
}
exports.login = login;
function logout(successPage) {
    return exports.instance.logout(successPage);
}
exports.logout = logout;
function accessTokenExpired() {
    return exports.instance.accessTokenExpired();
}
exports.accessTokenExpired = accessTokenExpired;
function ensureValidToken() {
    return new Promise(function (resolve, reject) {
        if (exports.instance.accessTokenExpired()) {
            if (exports.instance.refreshTokenExpired()) {
                login()
                    .then(function (response) {
                    resolve(response);
                })
                    .catch(function (er) {
                    reject(er);
                });
            }
            else {
                exports.instance.refreshToken()
                    .then(function (result) {
                    resolve(result);
                })
                    .catch(function (er) {
                    reject(ErrorEvent);
                });
            }
        }
        else {
            resolve(accessToken());
        }
    });
}
exports.ensureValidToken = ensureValidToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0NBQXdDOztBQU14QyxpRUFBOEQ7QUFDOUQsK0RBQTREO0FBQzVELDJEQUF3RDtBQUN4RCxxREFBa0Q7QUFDbEQsK0RBQTREO0FBQzVELG1FQUFnRTtBQUNoRSwyREFBd0Q7QUFJN0MsUUFBQSxRQUFRLEdBQTRCLElBQUksQ0FBQztBQUVwRCx1QkFBOEIsT0FBMkM7SUFDckUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07UUFDeEMsSUFBSSxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsZ0JBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELGdCQUFRLEdBQUcsSUFBSSwyQ0FBbUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxPQUFPLENBQUMsZ0JBQVEsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBZkQsc0NBZUM7QUFFRCxzQkFBNkIsT0FBMEM7SUFDbkUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07UUFDeEMsSUFBSSxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsZ0JBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELGdCQUFRLEdBQUcsSUFBSSx5Q0FBa0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pGLE9BQU8sQ0FBQyxnQkFBUSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFmRCxvQ0FlQztBQUVELG9CQUEyQixPQUF3QztJQUMvRCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUN4QyxJQUFJLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxnQkFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsZ0JBQVEsR0FBRyxJQUFJLHFDQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxnQkFBUSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFmRCxnQ0FlQztBQUdELGlCQUF3QixPQUFxQztJQUN6RCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUN4QyxJQUFJLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxnQkFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsZ0JBQVEsR0FBRyxJQUFJLCtCQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVLLE9BQU8sQ0FBQyxnQkFBUSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFmRCwwQkFlQztBQUdELHNCQUE2QixPQUEwQztJQUNuRSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUN4QyxJQUFJLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxnQkFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsZ0JBQVEsR0FBRyxJQUFJLHlDQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5RyxPQUFPLENBQUMsZ0JBQVEsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBZkQsb0NBZUM7QUFFRCx3QkFBK0IsT0FBNEM7SUFDdkUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07UUFDeEMsSUFBSSxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsZ0JBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELGdCQUFRLEdBQUcsSUFBSSw2Q0FBb0IsQ0FDL0IsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFlBQVksRUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FDaEIsQ0FBQztZQUNGLE9BQU8sQ0FBQyxnQkFBUSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFyQkQsd0NBcUJDO0FBRUQsb0JBQTJCLE9BQXdDO0lBQy9ELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1FBQ3hDLElBQUksQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLGdCQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxnQkFBUSxHQUFHLElBQUkscUNBQWdCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUUsT0FBTyxDQUFDLGdCQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWZELGdDQWVDO0FBS0Q7SUFDSSxNQUFNLENBQUMsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0FBQzVDLENBQUM7QUFGRCxrQ0FFQztBQUVELGVBQXNCLFdBQW9CO0lBQ3RDLE1BQU0sQ0FBQyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRkQsc0JBRUM7QUFDRCxnQkFBdUIsV0FBb0I7SUFDdkMsTUFBTSxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFGRCx3QkFFQztBQUNEO0lBQ0ksTUFBTSxDQUFDLGdCQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBRkQsZ0RBRUM7QUFFRDtJQUNJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLGdCQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsZ0JBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakMsS0FBSyxFQUFFO3FCQUNGLElBQUksQ0FBQyxVQUFDLFFBQWdCO29CQUNuQixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxFQUFFO29CQUNOLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixnQkFBUSxDQUFDLFlBQVksRUFBRTtxQkFDbEIsSUFBSSxDQUFDLFVBQUMsTUFBYztvQkFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsRUFBRTtvQkFDTixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUM7QUF6QkQsNENBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInJlZmVyZW5jZXMuZC50c1wiIC8+XG5cblxuXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbk1vZHVsZSBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQgeyBBdXRoSGVscGVyT2ZmaWNlMzY1IH0gZnJvbSAnLi9hdXRoLWhlbHBlci1vZmZpY2UzNjUnO1xuaW1wb3J0IHsgQXV0aEhlbHBlckZhY2Vib29rIH0gZnJvbSAnLi9hdXRoLWhlbHBlci1mYWNlYm9vayc7XG5pbXBvcnQgeyBBdXRoSGVscGVyR29vZ2xlIH0gZnJvbSAnLi9hdXRoLWhlbHBlci1nb29nbGUnO1xuaW1wb3J0IHsgQXV0aEhlbHBlclVhYSB9IGZyb20gJy4vYXV0aC1oZWxwZXItdWFhJztcbmltcG9ydCB7IEF1dGhIZWxwZXJMaW5rZWRJbiB9IGZyb20gJy4vYXV0aC1oZWxwZXItbGlua2VkaW4nO1xuaW1wb3J0IHsgQXV0aEhlbHBlclNhbGVzZm9yY2UgfSBmcm9tICcuL2F1dGgtaGVscGVyLXNhbGVzZm9yY2UnO1xuaW1wb3J0IHsgQXV0aEhlbHBlckN1c3RvbSB9IGZyb20gJy4vYXV0aC1oZWxwZXItY3VzdG9tJztcblxuaW1wb3J0ICogYXMgVG5zT0F1dGggZnJvbSAnLi90bnMtb2F1dGgtaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCB2YXIgaW5zdGFuY2U6IFRuc09BdXRoLklUbnNBdXRoSGVscGVyID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPZmZpY2UzNjUob3B0aW9uczogVG5zT0F1dGguSVRuc09BdXRoT3B0aW9uc09mZmljZTM2NSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIllvdSBhbHJlYWR5IHJhbiBpbml0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQXV0aEhlbHBlck9mZmljZTM2NShvcHRpb25zLmNsaWVudElkLCBvcHRpb25zLnNjb3BlKTtcbiAgICAgICAgICAgIHJlc29sdmUoaW5zdGFuY2UpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBBdXRoSGVscGVyT2ZmaWNlMzY1LmluaXQ6IFwiICsgZXgpO1xuICAgICAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZhY2Vib29rKG9wdGlvbnM6IFRuc09BdXRoLklUbnNPQXV0aE9wdGlvbnNGYWNlYm9vayk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIllvdSBhbHJlYWR5IHJhbiBpbml0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQXV0aEhlbHBlckZhY2Vib29rKG9wdGlvbnMuY2xpZW50SWQsIG9wdGlvbnMuY2xpZW50U2VjcmV0LCBvcHRpb25zLnNjb3BlKTtcbiAgICAgICAgICAgIHJlc29sdmUoaW5zdGFuY2UpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBBdXRoSGVscGVyRmFjZWJvb2suaW5pdDogXCIgKyBleCk7XG4gICAgICAgICAgICByZWplY3QoZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0R29vZ2xlKG9wdGlvbnM6IFRuc09BdXRoLklUbnNPQXV0aE9wdGlvbnNHb29nbGUpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJZb3UgYWxyZWFkeSByYW4gaW5pdFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IEF1dGhIZWxwZXJHb29nbGUob3B0aW9ucy5jbGllbnRJZCwgb3B0aW9ucy5zY29wZSk7XG4gICAgICAgICAgICByZXNvbHZlKGluc3RhbmNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gQXV0aEhlbHBlckdvb2dsZS5pbml0OiBcIiArIGV4KTtcbiAgICAgICAgICAgIHJlamVjdChleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVhYShvcHRpb25zOiBUbnNPQXV0aC5JVG5zT0F1dGhPcHRpb25zVWFhKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiWW91IGFscmVhZHkgcmFuIGluaXRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBBdXRoSGVscGVyVWFhKG9wdGlvbnMuYXV0aG9yaXR5LCBvcHRpb25zLnJlZGlyZWN0VXJpLCBvcHRpb25zLmNsaWVudElkLCBvcHRpb25zLmNsaWVudFNlY3JldCwgb3B0aW9ucy5zY29wZSwgb3B0aW9ucy5jb29raWVEb21haW5zLCBvcHRpb25zLmJhc2ljQXV0aEhlYWRlcik7XG4gICAgICAgICAgICByZXNvbHZlKGluc3RhbmNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gQXV0aEhlbHBlclVhYS5pbml0OiBcIiArIGV4KTtcbiAgICAgICAgICAgIHJlamVjdChleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdExpbmtlZEluKG9wdGlvbnM6IFRuc09BdXRoLklUbnNPQXV0aE9wdGlvbnNMaW5rZWRJbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIllvdSBhbHJlYWR5IHJhbiBpbml0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQXV0aEhlbHBlckxpbmtlZEluKG9wdGlvbnMuY2xpZW50SWQsIG9wdGlvbnMuY2xpZW50U2VjcmV0LCBvcHRpb25zLnJlZGlyZWN0VXJpLCBvcHRpb25zLnNjb3BlKTtcbiAgICAgICAgICAgIHJlc29sdmUoaW5zdGFuY2UpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBBdXRoSGVscGVyTGlua2VkSW4uaW5pdDogXCIgKyBleCk7XG4gICAgICAgICAgICByZWplY3QoZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2FsZXNmb3JjZShvcHRpb25zOiBUbnNPQXV0aC5JVG5zT0F1dGhPcHRpb25zU2FsZXNmb3JjZSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIllvdSBhbHJlYWR5IHJhbiBpbml0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQXV0aEhlbHBlclNhbGVzZm9yY2UoXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hdXRob3JpdHksXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgICAgICAgICAgICBvcHRpb25zLnJlZGlyZWN0VXJpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2NvcGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXNvbHZlKGluc3RhbmNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gQXV0aEhlbHBlclNhbGVzZm9yY2UuaW5pdDogXCIgKyBleCk7XG4gICAgICAgICAgICByZWplY3QoZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q3VzdG9tKG9wdGlvbnM6IFRuc09BdXRoLklUbnNPQXV0aE9wdGlvbnNDdXN0b20pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJZb3UgYWxyZWFkeSByYW4gaW5pdFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IEF1dGhIZWxwZXJDdXN0b20ob3B0aW9ucy5jcmVkZW50aWFscywgb3B0aW9ucy5jb29raWVEb21haW5zKTtcbiAgICAgICAgICAgIHJlc29sdmUoaW5zdGFuY2UpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBBdXRoSGVscGVyQ3VzdG9tLmluaXQ6IFwiICsgZXgpO1xuICAgICAgICAgICAgcmVqZWN0KGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gYWNjZXNzVG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaW5zdGFuY2UudG9rZW5SZXN1bHQuYWNjZXNzVG9rZW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbihzdWNjZXNzUGFnZT86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmxvZ2luKHN1Y2Nlc3NQYWdlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoc3VjY2Vzc1BhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gaW5zdGFuY2UubG9nb3V0KHN1Y2Nlc3NQYWdlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhY2Nlc3NUb2tlbkV4cGlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmFjY2Vzc1Rva2VuRXhwaXJlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlVmFsaWRUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5hY2Nlc3NUb2tlbkV4cGlyZWQoKSkge1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLnJlZnJlc2hUb2tlbkV4cGlyZWQoKSkge1xuICAgICAgICAgICAgICAgIGxvZ2luKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UucmVmcmVzaFRva2VuKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvckV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGFjY2Vzc1Rva2VuKCkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn1cblxuXG4iXX0=