(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.module */ "./src/app/dashboard.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], pathMatch: 'full' },
                    { path: "", redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
                ]),
                _dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    function AppService(cookieService, http, router) {
        var _this = this;
        this.cookieService = cookieService;
        this.http = http;
        this.router = router;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.getUserInformationstorage = function () {
            return (JSON.parse(localStorage.getItem('userInfo')));
        };
        this.setUserInformationStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        this.getSingleIssue = function (issueId) {
            return _this.http.get("/api/view/" + issueId);
        };
        this.deleteIssue = function (issueId) {
            var data = {};
            return _this.http.post("/api/issue/" + issueId + "/delete", data);
        };
        this.editIssue = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('title', data.title)
                .set('issueId', data.issueId)
                .set('reporter', data.reporter)
                .set('reporterId', data.reporterId)
                .set('description', data.description)
                .set('status', data.status)
                .set('assignedToId', data.assignedToId)
                .set('assignedTo', data.assignedTo)
                .set('images', data.images);
            return _this.http.post("/api/issue/" + data.issueId + "/edit", params);
        };
        this.getAllAttachments = function () {
            return _this.http.get('/api/file');
        };
        this.downloadAttachment = function (file) {
            return _this.http.get("/api/download/" + file, { responseType: 'blob',
                headers: { 'Content-type': 'text/xml' }
            });
        };
        this.searchIssue = function (arg, skip) {
            if (skip === void 0) { skip = 0; }
            return _this.http.get("/api/issue/search?arg=" + arg + "&skip=" + skip);
        };
        this.postWatch = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('issueId', data)
                .set('watcherId', _this.cookieService.get('userId'));
            return _this.http.post('/api/watch', params);
        };
        this.getWatchList = function () {
            return _this.http.get('/api/getwatcher');
        };
        this.addComment = function (commentData) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('issueId', commentData.issueId)
                .set('description', commentData.description)
                .set('reporter', _this.cookieService.get('UserName'))
                .set('reporterId', _this.cookieService.get('userId'));
            return _this.http.post("/api/addcomment", params);
        };
        this.getComment = function (issueId) {
            return _this.http.get("/api/readcomment/" + issueId);
        };
        this.getNotification = function () {
            return _this.http.get("/api/notification/" + _this.cookieService.get('userId'));
        };
        this.notifyCount = function () {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('userId', _this.cookieService.get('userId'));
            return _this.http.post('/api/notifycount', params);
        };
    }
    AppService.prototype.isLoggedIn = function () {
        return (this.getUserInformationstorage());
    };
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobile)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post("/api/users/signup", params);
    };
    AppService.prototype.signinFuncction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post("/api/users/login", params);
    };
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'));
        return this.http.post("/api/users/logout", params);
    }; // end logout function
    AppService.prototype.logOutWithGoogle = function () {
        return this.http.get('/api/logout');
    };
    AppService.prototype.allRegisterUsers = function () {
        return this.http.get("/api/users/view/all");
    };
    AppService.prototype.allSocialUsers = function () {
        return this.http.get('/api/users/view/socialAll');
    };
    AppService.prototype.createIssue = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('reporter', data.reporter)
            .set('title', data.title)
            .set('description', data.description)
            .set('reporterId', data.reporterId)
            .set('status', data.status)
            .set('assignedToId', data.assignedToId)
            .set('assignedTo', data.assignedTo)
            .set('images', data.images);
        return this.http.post('/api/issue/create', params);
    };
    AppService.prototype.getAllIssue = function () {
        return this.http.get('/api/issue/all');
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(appService, myRoute) {
        this.appService = appService;
        this.myRoute = myRoute;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.appService.isLoggedIn() !== null) {
            return true;
        }
        else {
            this.myRoute.navigate(["/login"]);
            alert('please login');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/dashboard.module.ts":
/*!*************************************!*\
  !*** ./src/app/dashboard.module.ts ***!
  \*************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_issue_create_issue_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../app/issue-create/issue-create.component */ "./src/app/issue-create/issue-create.component.ts");
/* harmony import */ var _app_issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../app/issue-view/issue-view.component */ "./src/app/issue-view/issue-view.component.ts");
/* harmony import */ var _issue_edit_issue_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./issue-edit/issue-edit.component */ "./src/app/issue-edit/issue-edit.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _app_issue_create_issue_create_component__WEBPACK_IMPORTED_MODULE_6__["IssueCreateComponent"], _app_issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_7__["IssueViewComponent"], _issue_edit_issue_edit_component__WEBPACK_IMPORTED_MODULE_8__["IssueEditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_10__["NgxEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
                    { path: 'issue-create', component: _app_issue_create_issue_create_component__WEBPACK_IMPORTED_MODULE_6__["IssueCreateComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
                    { path: 'issue-view/:issueId', component: _app_issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_7__["IssueViewComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
                    { path: 'issue-edit/:issueId', component: _issue_edit_issue_edit_component__WEBPACK_IMPORTED_MODULE_8__["IssueEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] }
                ])
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    background-image: url('background.png');\r\n    min-height: 100vh\r\n}\r\n\r\n.firstChar{\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    \r\n    text-align: center;\r\n    font-size: 2em;\r\n    padding: .2em;\r\n    margin: 0 0.5em 0 0;\r\n    width: 1.5em;\r\n    height: 1.5em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n    background: white;\r\n}\r\n\r\n.profile{\r\n    display: flex;\r\n    align-items: center; \r\n    border: 2px solid white;\r\n    padding: 0.5em;\r\n    border-radius:10px;\r\n    justify-content: space-between; \r\n}\r\n\r\n.scrolling-wrapper-flexbox {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    overflow-x: auto;\r\n}\r\n\r\n.cardOne {\r\n      flex: 0 0 auto;\r\n    }\r\n\r\n::-webkit-scrollbar{\r\n    width: 0px;\r\n    background: transparent;\r\n}\r\n\r\n.dropdown-menu{\r\n    max-height: 150px;\r\n    overflow-y: auto\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQW9EO0lBQ3BELGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7O0lBRWpCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwrQkFBK0I7Q0FDbEM7O0FBR0Q7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFDRDtNQUNNLGVBQWU7S0FDaEI7O0FBQ0w7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmhcclxufVxyXG5cclxuLmZpcnN0Q2hhcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHBhZGRpbmc6IC4yZW07XHJcbiAgICBtYXJnaW46IDAgMC41ZW0gMCAwO1xyXG4gICAgd2lkdGg6IDEuNWVtO1xyXG4gICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZmlsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG59XHJcblxyXG5cclxuLnNjcm9sbGluZy13cmFwcGVyLWZsZXhib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uY2FyZE9uZSB7XHJcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgfVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbiBcclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG9cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"background\" style=\"padding-bottom: 20px\">\n\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand\" style=\"font-size:2.5em; color: white\" [routerLink]=\"['/dashboard']\">Issue-Tracker</a>\n    <button class=\"navbar-toggler btn btn-light\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i style=\"color: white; font-size: 30px;\" class=\"fas fa-angle-double-down\"></i>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <div class=\"profile\">\n            <div style=\"display: inline-flex; align-items: center\">\n              <div class=\"firstChar\">{{firstChar}}</div>\n              <h3 style=\"color: white; text-transform:uppercase\">{{userName}}</h3>\n            </div>\n            <button style=\"width: 150px; margin-left: 20px\" class=\"btn btn-outline-light\" (click)=\"toggle()\">Log Out</button>\n          </div>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"searchData\"\n          name=\"searchData\">\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"searchIssue()\">Search</button>\n      </form>\n    </div>\n  </nav>\n  <div style=\"padding: 1em; display: flex; justify-content: space-around\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-outline-light btn-lg dropdown-toggle\" type=\"button\" (click)=\"notifyCount()\" data-toggle=\"dropdown\"\n        aria-haspopup=\"true\" aria-expanded=\"false\">\n        Notifications <span class=\"badge badge-light\" *ngIf=\"!notifyToggler\">{{count.length}}</span>\n      </button>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" *ngFor=\"let des of notifyData.slice().reverse()\" [routerLink]=\"['/issue-view/',des.issueId]\">{{des.descrip}}</a>\n      </div>\n    </div>\n    <button class=\"btn btn-outline-light btn-lg\" type=\"submit\" [routerLink]=\"['/issue-create']\">Create New Issue</button>\n  </div>\n  <div class=\"container\" style=\"border: 2px solid white; padding: 1em; border-radius: 20px; margin-bottom: 20px\" *ngIf=\"!toggler\">\n    <h2 style=\"color: white; text-align: center; padding: .5em\">Search Details</h2>\n    <div class=\"container-fluid scrolling-wrapper-flexbox\" id=\"scrollBacklog\">\n      <ul class=\"cardOne\" *ngFor=\"let x of allSearchData.slice().reverse()\">\n        <li class=\"card shadow-lg  rounded\" style=\"width: 18rem;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{x.title | uppercase}}</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">Reporter: {{x.reporter}}</h6>\n            <p class=\"card-text\">{{x.description}}</p>\n            <h6 class=\"card-subtitle mb-2 text-muted\">Assigned To: {{x.assignedTo}}</h6>\n            <h6 class=\"card-subtitle mb-2 text-muted\">Created On: {{x.createdOn | date}}</h6>\n            <a class=\"card-link\" [routerLink]=\"['/issue-view/',x.issueId]\">View Issue</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div style=\"display: flex; justify-content: space-between\">\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollPreviousBacklog()\">Previous</button>\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"back()\">Go Back</button>\n      <button id=\"buttonBacklog\" class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollNextBacklog()\">Next</button>\n    </div>\n  </div>\n  <div *ngIf=\"toggler\">\n    <div class=\"container\" style=\"border: 2px solid white; padding: 1em; border-radius: 20px; margin-bottom: 20px\"\n      *ngIf=\"backlogs.length>0\">\n      <h2 style=\"color: white; text-align: center; padding: .5em\">Backlogs</h2>\n      <div class=\"container-fluid scrolling-wrapper-flexbox\" id=\"scrollBacklog\">\n        <ul class=\"cardOne\" *ngFor=\"let x of backlogs.slice().reverse()\">\n          <li class=\"card shadow-lg  rounded\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{x.title | uppercase}}</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Reporter: {{x.reporter}}</h6>\n              <p class=\"card-text\">{{x.description}}</p>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Assigned To: {{x.assignedTo}}</h6>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Created On: {{x.createdOn | date}}</h6>\n              <a class=\"card-link\" [routerLink]=\"['/issue-view/',x.issueId]\">View Issue</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div style=\"display: flex; justify-content: space-between\">\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollPreviousBacklog()\">Previous</button>\n        <button id=\"buttonBacklog\" class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollNextBacklog()\">Next</button>\n      </div>\n    </div>\n    <div class=\"container\" style=\"border: 2px solid white; padding: 1em; border-radius: 20px; margin-bottom: 20px\"\n      *ngIf=\"inProgress.length>0\">\n      <h2 style=\"color: white; text-align: center; padding: .5em\">In-Progress</h2>\n      <div class=\"container-fluid scrolling-wrapper-flexbox\" id=\"scrollProgress\">\n        <ul class=\"cardOne\" *ngFor=\"let x of inProgress.slice().reverse()\">\n          <li class=\"card shadow-lg  rounded\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{x.title | uppercase}}</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Reporter: {{x.reporter}}</h6>\n              <p class=\"card-text\">{{x.description}}</p>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Assigned To: {{x.assignedTo}}</h6>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Created On: {{x.createdOn | date}}</h6>\n              <a class=\"card-link\" [routerLink]=\"['/issue-view/',x.issueId]\">View Issue</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div style=\"display: flex; justify-content: space-between\">\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollPreviousProgress()\">Previous</button>\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollNextProgress()\">Next</button>\n      </div>\n    </div>\n    <div class=\"container\" style=\"border: 2px solid white; padding: 1em; border-radius: 20px; margin-bottom: 20px\"\n      *ngIf=\"inTest.length>0\">\n      <h2 style=\"color: white; text-align: center; padding: .5em\">In-Test</h2>\n      <div class=\"container-fluid scrolling-wrapper-flexbox\" id=\"scrollTest\">\n        <ul class=\"cardOne\" *ngFor=\"let x of inTest.slice().reverse()\">\n          <li class=\"card shadow-lg  rounded\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{x.title | uppercase}}</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Reporter: {{x.reporter}}</h6>\n              <p class=\"card-text\">{{x.description}}</p>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Assigned To: {{x.assignedTo}}</h6>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Created On: {{x.createdOn | date}}</h6>\n              <a class=\"card-link\" [routerLink]=\"['/issue-view/',x.issueId]\">View Issue</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div style=\"display: flex; justify-content: space-between\">\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollPreviousTest()\">Previous</button>\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollNextTest()\">Next</button>\n      </div>\n    </div>\n    <div class=\"container\" style=\"border: 2px solid white; padding: 1em; border-radius: 20px; margin-bottom: 20px\"\n      *ngIf=\"done.length>0\">\n      <h2 style=\"color: white; text-align: center; padding: .5em\">Done</h2>\n      <div class=\"container-fluid scrolling-wrapper-flexbox\" id=\"scrollDone\">\n        <ul class=\"cardOne\" *ngFor=\"let x of done.slice().reverse()\">\n          <li class=\"card shadow-lg  rounded\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{x.title | uppercase}}</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Reporter: {{x.reporter}}</h6>\n              <p class=\"card-text\">{{x.description}}</p>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Assigned To: {{x.assignedTo}}</h6>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Created On: {{x.createdOn | date}}</h6>\n              <a class=\"card-link\" [routerLink]=\"['/issue-view/',x.issueId]\">View Issue</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div style=\"display: flex; justify-content: space-between\">\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollPreviousDone()\">Previous</button>\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollNextDone()\">Next</button>\n      </div>\n    </div>\n    <div class=\"container\" style=\"border: 2px solid white; padding: 1em; border-radius: 20px; margin-bottom: 20px\"\n      *ngIf=\"watch.length>0\">\n      <h2 style=\"color: white; text-align: center; padding: .5em\">Watching</h2>\n      <div class=\"container-fluid scrolling-wrapper-flexbox\" id=\"scrollWatch\">\n        <ul class=\"cardOne\" *ngFor=\"let x of watch.slice().reverse()\">\n          <li class=\"card shadow-lg  rounded\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{x.title | uppercase}}</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Reporter: {{x.reporter}}</h6>\n              <p class=\"card-text\">{{x.description}}</p>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Assigned To: {{x.assignedTo}}</h6>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Created On: {{x.createdOn | date}}</h6>\n              <a class=\"card-link\" [routerLink]=\"['/issue-view/',x.issueId]\">View Issue</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div style=\"display: flex; justify-content: space-between\">\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollPreviousWatch()\">Previous</button>\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\" (click)=\"scrollNextWatch()\">Next</button>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(toastr, appService, router, cookieService) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.cookieService = cookieService;
        this.backlogs = [];
        this.inProgress = [];
        this.inTest = [];
        this.done = [];
        this.watch = [];
        this.allSearchData = [];
        this.notifications = [];
        this.notifyData = [];
        this.count = [];
        this.toggler = true;
        this.notifyToggler = false;
        this.toggle = function () {
            var conditioner = _this.appService.getUserInformationstorage().authToken;
            if (conditioner !== undefined) {
                _this.appService.logout()
                    .subscribe(function () {
                    _this.cookieService.delete('authtoken');
                    _this.cookieService.delete('userId');
                    _this.cookieService.delete('UserName');
                    _this.router.navigate(['/']);
                });
            }
            else {
                _this.appService.logOutWithGoogle()
                    .subscribe(function () {
                    _this.cookieService.delete('userId');
                    _this.cookieService.delete('UserName');
                    _this.router.navigate(['/']);
                });
            }
        };
        this.scrollNextBacklog = function () {
            document.getElementById('scrollBacklog').scrollBy(100, 0);
        };
        this.scrollPreviousBacklog = function () {
            document.getElementById('scrollBacklog').scrollBy(-100, 0);
        };
        this.scrollNextProgress = function () {
            document.getElementById('scrollProgress').scrollBy(100, 0);
        };
        this.scrollPreviousProgress = function () {
            document.getElementById('scrollProgress').scrollBy(-100, 0);
        };
        this.scrollNextTest = function () {
            document.getElementById('scrollTest').scrollBy(100, 0);
        };
        this.scrollPreviousTest = function () {
            document.getElementById('scrollTest').scrollBy(-100, 0);
        };
        this.scrollNextDone = function () {
            document.getElementById('scrollDone').scrollBy(100, 0);
        };
        this.scrollPreviousDone = function () {
            document.getElementById('scrollDone').scrollBy(-100, 0);
        };
        this.scrollNextWatch = function () {
            document.getElementById('scrollWatch').scrollBy(100, 0);
        };
        this.scrollPreviousWatch = function () {
            document.getElementById('scrollWatch').scrollBy(-100, 0);
        };
        this.back = function () {
            return _this.toggler = true;
        };
        this.notifyCount = function () {
            _this.appService.notifyCount().subscribe(function (response) {
                if (response['status'] === 200) {
                    return _this.notifyToggler = true;
                }
            });
        };
        this.searchIssue = function () {
            _this.appService.searchIssue(_this.searchData).subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.searchData = "";
                    _this.allSearchData = response['data'];
                    return _this.toggler = false;
                }
                else if (response['status'] == 404) {
                    _this.toastr.info('No result Found');
                }
            }, function (error) {
                console.log(error);
                _this.toastr.error('Some error ocurred');
            });
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.cookieService.get('UserName');
        this.firstChar = this.userName[0];
        this.appService.getAllIssue().subscribe(function (response) {
            _this.allData = response['data'];
            if (_this.allData !== null) {
                for (var _i = 0, _a = _this.allData; _i < _a.length; _i++) {
                    var x = _a[_i];
                    switch (x.status) {
                        case 'Backlog':
                            _this.backlogs.push(x);
                            break;
                        case 'In-Progress':
                            _this.inProgress.push(x);
                            break;
                        case 'In-Test':
                            _this.inTest.push(x);
                            break;
                        case 'Done':
                            _this.done.push(x);
                            break;
                    }
                }
            }
        }, function (error) {
            console.log(error);
        });
        this.appService.getWatchList().subscribe(function (response) {
            for (var _i = 0, _a = response['data']; _i < _a.length; _i++) {
                var details = _a[_i];
                if (details.watcherId === _this.cookieService.get('userId')) {
                    if (_this.allData !== null) {
                        for (var _b = 0, _c = _this.allData; _b < _c.length; _b++) {
                            var data = _c[_b];
                            if (details.issueId === data.issueId) {
                                _this.watch.push(data);
                            }
                        }
                    }
                }
            }
        });
        this.appService.getNotification().subscribe(function (response) {
            _this.notifications.push(response['data']);
            for (var _i = 0, _a = _this.notifications; _i < _a.length; _i++) {
                var x = _a[_i];
                for (var _b = 0, x_1 = x; _b < x_1.length; _b++) {
                    var y = x_1[_b];
                    if (y.notificationCount === 1) {
                        _this.count.push(y.notificationCount);
                    }
                    var id = y.issueId;
                    for (var _c = 0, _d = y.description; _c < _d.length; _c++) {
                        var a = _d[_c];
                        var des = a;
                        var data = {
                            issueId: id,
                            descrip: des
                        };
                        _this.notifyData.push(data);
                    }
                }
            }
            if (_this.count.length === 0) {
                return _this.notifyToggler = true;
            }
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/issue-create/issue-create.component.css":
/*!*********************************************************!*\
  !*** ./src/app/issue-create/issue-create.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .background {\r\n      background-image: url('background.png')\r\n  }\r\n  \r\n  .form {\r\n      border: 2px solid grey;\r\n      border-radius: 20px;\r\n      padding: 20px;\r\n      background: #e8eaf6\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUtY3JlYXRlL2lzc3VlLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCLENBQUMsV0FBVztHQUM1Qzs7RUFFRDtJQUNFLCtCQUErQixDQUFDLFNBQVM7R0FDMUM7O0VBRUQ7TUFDSSx1Q0FBbUQ7R0FDdEQ7O0VBRUQ7TUFDSSx1QkFBdUI7TUFDdkIsb0JBQW9CO01BQ3BCLGNBQWM7TUFDZCxtQkFBbUI7R0FDdEIiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZS1jcmVhdGUvaXNzdWUtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxuICB9XHJcbiAgXHJcbiAgLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xyXG4gIH1cclxuIFxyXG4gIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIilcclxuICB9XHJcblxyXG4gIC5mb3JtIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2U4ZWFmNlxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/issue-create/issue-create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/issue-create/issue-create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background\">\n  <div class=\"row p-5\" style=\"text-align:left\">\n    <div class=\"col-md-12\">\n      <form #createIssueForm=\"ngForm\" class=\"form\">\n        <div class=\"form-group\">\n          <label style=\"font-size: 25px; font-style: bold\">Title</label>\n          <input type=\"text\" name=\"issueTitle\" [(ngModel)]=\"issueTitle\" #title=\"ngModel\" class=\"form-control\"\n            placeholder=\"Enter issue Title\" required>\n        </div>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n          Title is required\n        </div>\n        <div class=\"form-group\">\n          <label style=\"font-size: 25px; font-style: bold\">Description</label>\n          <app-ngx-editor #title=\"ngModel\" [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" [(ngModel)]=\"description\"\n            name=\"description\" required></app-ngx-editor>\n        </div>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n          Description is Must\n        </div>\n        <div class=\"form-group\">\n          <label style=\"font-size: 25px; font-style: bold\">Status</label>\n          <select [(ngModel)]=\"issueStatus\" #category=\"ngModel\" name=\"issueStatus\" class=\"form-control\" id=\"Status\"\n            required>\n            <option *ngFor=\"let status of allStatus\" [value]=\"status\">{{status}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label style=\"font-size: 25px; font-style: bold\">Assign To</label>\n          <select [(ngModel)]=\"assignedToId\" #category=\"ngModel\" name=\"assginedToId\" class=\"form-control\" id=\"Assgin\"\n            required>\n            <option *ngFor=\"let name of allUsers\" [value]=\"name.userId\">{{name.firstName}} {{name.lastName}}</option>\n          </select>\n        </div>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n          Please assign it\n        </div>\n        <div class=\"form-group\" action=\"/api/upload\" method=\"POST\" enctype=\"multipart/form-data\" style=\"margin-bottom: 20px; height: auto;\">\n          <label style=\"font-size: 25px; font-style: bold\">Attachments</label>\n          <div class=\"custom-file mb-3\">\n            <input type=\"file\" name=\"file\" id=\"file\" class=\"custom-file-input\" multiple ng2FileSelect [uploader]=\"uploader\">\n            <label for=\"file\" class=\"custom-file-label\">Choose File</label>\n            <div class=\"uploadList\" *ngFor=\"let item of uploader.queue\">\n              <div class=\"col\" style=\"padding: 5px\">{{item.file.name}}</div>\n              <div class=\"col-sm-4\" style=\"padding: 5px\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar bg-success\" [ngStyle]=\"{'width': item.progress+'%'}\"></div>\n                </div>\n              </div>\n              <div>\n                <button style=\"margin:20px\" type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                <button  type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div style=\"display: flex; justify-content: space-between\">\n          <button type=\"submit\" class=\"btn btn-danger btn-lg\" [routerLink]=\"['/dashboard']\"><i class=\"fas fa-times\"></i> Cancel</button>\n          <button type=\"submit\" (click)=\"createIssue()\" class=\"btn btn-success btn-lg\" [disabled]=\"!createIssueForm.form.valid\">Post\n            <i class=\"fas fa-arrow-circle-right\"></i></button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/issue-create/issue-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/issue-create/issue-create.component.ts ***!
  \********************************************************/
/*! exports provided: IssueCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueCreateComponent", function() { return IssueCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var uri = '/api/upload';
var IssueCreateComponent = /** @class */ (function () {
    function IssueCreateComponent(toastr, appService, router, cookieService) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.cookieService = cookieService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: uri });
        this.attachmentList = [];
        this.allUsers = [];
        this.fileId = [];
        this.allStatus = ["Backlog", "In-Progress", "In-Test", "Done"];
        this.allRetrivedUsers = function () {
            var allUsers = [];
            _this.appService.allRegisterUsers()
                .subscribe(function (apiResponse) {
                for (var _i = 0, _a = apiResponse.data; _i < _a.length; _i++) {
                    var x = _a[_i];
                    allUsers.push(x);
                }
            });
            _this.appService.allSocialUsers()
                .subscribe(function (apiResponse) {
                for (var _i = 0, _a = apiResponse.data; _i < _a.length; _i++) {
                    var y = _a[_i];
                    allUsers.push(y);
                }
            });
            _this.allUsers = allUsers;
        };
        this.createIssue = function () {
            for (var _i = 0, _a = _this.allUsers; _i < _a.length; _i++) {
                var x = _a[_i];
                if (x.userId === _this.assignedToId) {
                    var name = x.firstName + " " + x.lastName;
                }
            }
            for (var _b = 0, _c = _this.attachmentList; _b < _c.length; _b++) {
                var y = _c[_b];
                console.log(y.file.id);
                _this.fileId.push(y.file.id);
            }
            _this.assignedTo = name;
            console.log(_this.fileId);
            var reporter = _this.cookieService.get('UserName');
            var reporterId = _this.cookieService.get('userId');
            _this.issue = {
                status: _this.issueStatus,
                title: _this.issueTitle,
                description: _this.description,
                assignedTo: _this.assignedTo,
                assignedToId: _this.assignedToId,
                reporter: reporter,
                reporterId: reporterId,
                images: _this.fileId
            };
            _this.appService.createIssue(_this.issue).subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.toastr.success('New Issue Created');
                    console.log(response);
                    setTimeout(function () {
                        _this.router.navigate(['/dashboard']);
                    }, 2000);
                }
            });
        };
        this.allRetrivedUsers();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
            console.log(_this.attachmentList);
        };
    }
    IssueCreateComponent.prototype.ngOnInit = function () {
    };
    IssueCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-create',
            template: __webpack_require__(/*! ./issue-create.component.html */ "./src/app/issue-create/issue-create.component.html"),
            styles: [__webpack_require__(/*! ./issue-create.component.css */ "./src/app/issue-create/issue-create.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], IssueCreateComponent);
    return IssueCreateComponent;
}());



/***/ }),

/***/ "./src/app/issue-edit/issue-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/issue-edit/issue-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .background {\r\n      background-image: url('background.png')\r\n  }\r\n  \r\n  .form {\r\n      border: 2px solid grey;\r\n      border-radius: 20px;\r\n      padding: 20px;\r\n      background: #e8eaf6\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUtZWRpdC9pc3N1ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0IsQ0FBQyxXQUFXO0dBQzVDOztFQUVEO0lBQ0UsK0JBQStCLENBQUMsU0FBUztHQUMxQzs7RUFFRDtNQUNJLHVDQUFtRDtHQUN0RDs7RUFFRDtNQUNJLHVCQUF1QjtNQUN2QixvQkFBb0I7TUFDcEIsY0FBYztNQUNkLG1CQUFtQjtHQUN0QiIsImZpbGUiOiJzcmMvYXBwL2lzc3VlLWVkaXQvaXNzdWUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbiAgfVxyXG4gIFxyXG4gIC5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxuICB9XHJcbiBcclxuICAuYmFja2dyb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIpXHJcbiAgfVxyXG5cclxuICAuZm9ybSB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOGVhZjZcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/issue-edit/issue-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/issue-edit/issue-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid background\">\n    <div class=\"row p-5\" style=\"text-align:left\">\n      <div class=\"col-md-12\">\n        <form #createIssueForm=\"ngForm\" class=\"form\" (ngSubmit)=\"createIssue()\">\n          <div class=\"form-group\">\n            <label style=\"font-size: 25px; font-style: bold\">Title</label>\n            <input type=\"text\" name=\"issueTitle\" [(ngModel)]=\"issueTitle\" #title=\"ngModel\" class=\"form-control\"\n              placeholder=\"Enter issue Title\" required>\n          </div>\n          <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n            Title is required\n          </div>\n          <div class=\"form-group\">\n            <label style=\"font-size: 25px; font-style: bold\">Description</label>\n            <app-ngx-editor #title=\"ngModel\" [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" [(ngModel)]=\"description\"\n              name=\"description\" required></app-ngx-editor>\n          </div>\n          <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n            Description is Must\n          </div>\n          <div class=\"form-group\">\n            <label style=\"font-size: 25px; font-style: bold\">Status</label>\n            <select [(ngModel)]=\"issueStatus\" #category=\"ngModel\" name=\"issueStatus\" class=\"form-control\" id=\"Status\"\n              required>\n              <option *ngFor=\"let status of allStatus\" [value]=\"status\">{{status}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label style=\"font-size: 25px; font-style: bold\">Assign To</label>\n            <select [(ngModel)]=\"assignedToId\" #category=\"ngModel\" name=\"assginedToId\" class=\"form-control\" id=\"Assgin\"\n              required>\n              <option *ngFor=\"let name of allUsers\" [value]=\"name.userId\">{{name.firstName}} {{name.lastName}}</option>\n            </select>\n          </div>\n          <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n            Please assign it\n          </div>\n          <div class=\"form-group\" action=\"/api/upload\" method=\"POST\" enctype=\"multipart/form-data\" style=\"margin-bottom: 20px; height: auto;\">\n            <label style=\"font-size: 25px; font-style: bold\">Attachments</label>\n            <br>\n            <a *ngFor=\"let name of fileName; let i = index\" (click)=\"download(i)\" style=\"cursor: pointer; color: blue\"><i class=\"fas fa-paperclip\" ></i> {{name}}\n              <br></a>\n              <hr>\n            <div class=\"custom-file mb-3\">\n              <input type=\"file\" name=\"file\" id=\"file\" class=\"custom-file-input\" multiple ng2FileSelect [uploader]=\"uploader\">\n              <label for=\"file\" class=\"custom-file-label\">Choose File</label>\n              <div class=\"uploadList\" *ngFor=\"let item of uploader.queue\">\n                <div class=\"col\" style=\"padding: 5px\">{{item.file.name}}</div>\n                <div class=\"col-sm-4\" style=\"padding: 5px\">\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" [ngStyle]=\"{'width': item.progress+'%'}\"></div>\n                  </div>\n                </div>\n                <div>\n                  <button style=\"margin:20px\" type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                  <button  type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"display: flex; justify-content: space-between\">\n            <button type=\"submit\" class=\"btn btn-danger btn-lg\" [routerLink]=\"['/dashboard']\"><i class=\"fas fa-times\"></i> Cancel</button>\n            <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!createIssueForm.form.valid\">Post\n              <i class=\"fas fa-arrow-circle-right\"></i></button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/issue-edit/issue-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/issue-edit/issue-edit.component.ts ***!
  \****************************************************/
/*! exports provided: IssueEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueEditComponent", function() { return IssueEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var uri = '/api/upload';
var IssueEditComponent = /** @class */ (function () {
    function IssueEditComponent(toastr, appService, router, cookieService, _route) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.cookieService = cookieService;
        this._route = _route;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: uri });
        this.attachmentList = [];
        this.singleAttachment = [];
        this.allUsers = [];
        this.fileId = [];
        this.newFileId = [];
        this.allStatus = ["Backlog", "In-Progress", "In-Test", "Done"];
        this.issueImage = [];
        this.fileName = [];
        this.allRetrivedUsers = function () {
            var allUsers = [];
            _this.appService.allRegisterUsers()
                .subscribe(function (apiResponse) {
                for (var _i = 0, _a = apiResponse.data; _i < _a.length; _i++) {
                    var x = _a[_i];
                    allUsers.push(x);
                }
            });
            _this.appService.allSocialUsers()
                .subscribe(function (apiResponse) {
                for (var _i = 0, _a = apiResponse.data; _i < _a.length; _i++) {
                    var y = _a[_i];
                    allUsers.push(y);
                }
            });
            _this.allUsers = allUsers;
        };
        this.download = function (index) {
            var fileId = _this.fileName[index];
            _this.appService.downloadAttachment(fileId).subscribe(function (response) {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(response, response['filename']);
            });
        };
        this.createIssue = function () {
            for (var _i = 0, _a = _this.allUsers; _i < _a.length; _i++) {
                var x = _a[_i];
                if (x.userId === _this.assignedToId) {
                    var name = x.firstName + " " + x.lastName;
                }
            }
            for (var _b = 0, _c = _this.singleAttachment; _b < _c.length; _b++) {
                var y = _c[_b];
                console.log(y.file.id);
                _this.fileId.push(y.file.id);
            }
            _this.assignedTo = name;
            console.log(_this.fileId);
            _this.issue = {
                issueId: _this.issue.issueId,
                status: _this.issueStatus,
                title: _this.issueTitle,
                reporter: _this.issue.reporter,
                reporterId: _this.issue.reporterId,
                description: _this.description,
                assignedTo: _this.assignedTo,
                assignedToId: _this.assignedToId,
                images: _this.fileId
            };
            _this.appService.editIssue(_this.issue).subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.toastr.success('Issue Edited Successfully');
                    console.log(response);
                    setTimeout(function () {
                        _this.router.navigate(["/issue-view/" + _this.issueId]);
                    }, 2000);
                }
            });
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.singleAttachment.push(JSON.parse(response));
            console.log(_this.singleAttachment);
        };
    }
    IssueEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allRetrivedUsers();
        this.issueId = this._route.snapshot.paramMap.get('issueId');
        this.appService.getSingleIssue(this.issueId)
            .subscribe(function (response) {
            if (response['status'] == 200) {
                _this.issue = response['data'];
                _this.issueTitle = response['data']['title'];
                _this.description = response['data']['description'];
                _this.assignedToId = response['data']['assignedToId'];
                _this.assignedTo = response['data']['assignedTo'];
                _this.issueStatus = response['data']['status'];
                _this.issueImage = response['data']['images'];
                for (var _i = 0, _a = _this.issueImage; _i < _a.length; _i++) {
                    var img = _a[_i];
                    _this.fileId.push(img);
                }
            }
            else {
                _this.toastr.info('No issue Found');
            }
        });
        this.appService.getAllAttachments().subscribe(function (response) {
            _this.attachmentList.push(response['data']);
            for (var _i = 0, _a = _this.attachmentList; _i < _a.length; _i++) {
                var x = _a[_i];
                for (var _b = 0, x_1 = x; _b < x_1.length; _b++) {
                    var y = x_1[_b];
                    for (var _c = 0, _d = _this.fileId; _c < _d.length; _c++) {
                        var a = _d[_c];
                        if (a === y._id) {
                            _this.fileName.push(y.filename);
                        }
                    }
                }
            }
        });
    };
    IssueEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-edit',
            template: __webpack_require__(/*! ./issue-edit.component.html */ "./src/app/issue-edit/issue-edit.component.html"),
            styles: [__webpack_require__(/*! ./issue-edit.component.css */ "./src/app/issue-edit/issue-edit.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], IssueEditComponent);
    return IssueEditComponent;
}());



/***/ }),

/***/ "./src/app/issue-view/issue-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/issue-view/issue-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    background-image: url('background.png');\r\n    min-height: 100vh;\r\n}\r\n\r\n.bg-div {\r\n    border: 2px solid grey;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    background: #e8eaf6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUtdmlldy9pc3N1ZS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBb0Q7SUFDcEQsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaXNzdWUtdmlldy9pc3N1ZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYmctZGl2IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOGVhZjY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/issue-view/issue-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/issue-view/issue-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid background\">\n    <div class=\"row p-5\" style=\"text-align:left\">\n     <div class=\"col-md-12\"> \n         <div class=\"bg-div\">\n       <div class=\"row\" style=\"justify-items: center\" *ngIf=\"responseData\">\n         <div class=\"col-md-12\">\n           <h2>{{responseData.title}}</h2>\n           <hr>\n           <h5>Created by {{responseData.reporter}} on {{responseData.createdOn | date}}</h5>\n           <hr>\n           <h4>Description of the Issue:-</h4>\n           <p>{{responseData.description}}</p>\n           <hr>\n           <h5>Status - {{responseData.status}}</h5>\n           <hr>\n           <h5>Assigned To - {{responseData.assignedTo}}</h5>\n           <hr>\n           <h6>Attachments -</h6>\n           <a *ngFor=\"let name of fileName; let i = index\" (click)=\"download(i)\" style=\"cursor: pointer; color: blue\"><i class=\"fas fa-paperclip\" ></i> {{name}}\n             <br></a>\n         </div>\n       </div>\n       <hr>\n       <div class=\"row p-3\" *ngIf=\"responseData\" style=\"display: flex; justify-content: space-between\">\n           \n               <a class=\"btn btn-warning btn-lg\" (click)=\"goBack()\" style=\"color: white; margin-top: 10px\"><i class=\"fas fa-arrow-left\"></i>&nbsp;&nbsp;&nbsp;Go Back</a>\n             \n               <a class=\"btn btn-danger btn-lg\" style=\"margin-top: 10px; color: white\" (click)=\"deleteIssue()\"><i class=\"fas fa-trash\"></i>&nbsp;&nbsp;&nbsp;Delete</a>\n          \n               <a class=\"btn btn-info btn-lg\" [routerLink]=\"['/issue-edit/',responseData.issueId]\" style=\"margin-top: 10px\"><i class=\"fas fa-pencil-alt\"></i>&nbsp;&nbsp;&nbsp;Edit</a>\n           \n               <a class=\"btn btn-success btn-lg\" style=\"color: white; margin-top: 10px\" (click)=\"watch()\" ><i class=\"fas fa-eye\"></i>&nbsp;&nbsp;&nbsp;Watch</a>\n           \n       </div>\n         </div>\n     </div>    \n    </div> \n    <div class=\"col-12\" >\n       <ul class=\"list-group\" style=\"width:100%; padding-bottom: 5vh;\">\n         <div class=\"input-group\">\n           <div class=\"input-group-prepend\">\n             <span class=\"input-group-text\">Comment here</span>\n           </div>\n           <textarea class=\"form-control\" aria-label=\"With textarea\" [(ngModel)]=\"comment\" placeholder=\"Enter Comment here....\"></textarea>\n           <button class=\"btn btn-secoundry\" style=\"float:Right\" (click)=\"addComment()\">comment</button>\n         </div>\n         <span *ngIf=\"commentData\">\n           <span *ngFor=\"let comments of commentData.slice().reverse()\">\n             <li class=\"list-group-item list-group-item-light\"><b>{{comments.reporter}}</b><br>\n             {{comments.description}}\n             <br>\n             <span style=\"font-size:smaller\">{{comments.createdOn | date:\"short\"}}</span>\n             </li>\n           </span>\n         </span>\n       </ul>\n     </div>\n   </div>"

/***/ }),

/***/ "./src/app/issue-view/issue-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/issue-view/issue-view.component.ts ***!
  \****************************************************/
/*! exports provided: IssueViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueViewComponent", function() { return IssueViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IssueViewComponent = /** @class */ (function () {
    function IssueViewComponent(toastr, _route, appService, location, router) {
        var _this = this;
        this.toastr = toastr;
        this._route = _route;
        this.appService = appService;
        this.location = location;
        this.router = router;
        this.watchData = [];
        this.attachmentList = [];
        this.filedId = [];
        this.fileName = [];
        this.getComment = function () {
            _this.appService.getComment(_this.issueId).subscribe(function (response) {
                _this.commentData = response['data'];
            });
        };
        this.download = function (index) {
            var fileId = _this.fileName[index];
            _this.appService.downloadAttachment(fileId).subscribe(function (response) {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(response, response['filename']);
            });
        };
        this.deleteIssue = function () {
            _this.appService.deleteIssue(_this.issueId)
                .subscribe(function (response) {
                _this.toastr.success(response['message']);
                setTimeout(function () {
                    _this.router.navigate(['/dashboard']);
                }, 1000);
            });
        };
        this.watch = function () {
            _this.appService.postWatch(_this.issueId).subscribe(function (response) {
                _this.toastr.success(response['message']);
            });
        };
        this.addComment = function () {
            _this.makeComment = {
                issueId: _this.issueId,
                description: _this.comment
            };
            _this.appService.addComment(_this.makeComment).subscribe(function (response) {
                _this.toastr.success(response['message']);
                _this.getComment();
                _this.comment = '';
            });
        };
    }
    IssueViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issueId = this._route.snapshot.paramMap.get('issueId');
        this.appService.getSingleIssue(this.issueId).subscribe(function (response) {
            if (response["status"] === 200) {
                _this.responseData = response['data'];
                _this.watchData.push(_this.responseData);
                for (var _i = 0, _a = _this.responseData.images; _i < _a.length; _i++) {
                    var imgId = _a[_i];
                    _this.filedId.push(imgId);
                }
            }
            else {
                _this.toastr.info('No Issue Found');
            }
        });
        this.appService.getAllAttachments().subscribe(function (response) {
            _this.attachmentList.push(response['data']);
            for (var _i = 0, _a = _this.attachmentList; _i < _a.length; _i++) {
                var x = _a[_i];
                for (var _b = 0, x_1 = x; _b < x_1.length; _b++) {
                    var y = x_1[_b];
                    for (var _c = 0, _d = _this.filedId; _c < _d.length; _c++) {
                        var a = _d[_c];
                        if (a === y._id) {
                            _this.fileName.push(y.filename);
                        }
                    }
                }
            }
        });
        this.getComment();
    };
    IssueViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    IssueViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-view',
            template: __webpack_require__(/*! ./issue-view.component.html */ "./src/app/issue-view/issue-view.component.html"),
            styles: [__webpack_require__(/*! ./issue-view.component.css */ "./src/app/issue-view/issue-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IssueViewComponent);
    return IssueViewComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    background-image: url('background.png');\r\n    min-height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQXVEO0lBQ3ZELGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <nav class=\"navbar navbar-expand-md navbar-dark\">\n    <a style=\"font-size:2.5em; color: white\" class=\"navbar-brand\" href=\"/\">Issue-Tracker</a>\n    <button class=\"btn btn-outline-light btn-lg\" (click)=\"goToSignUp()\" style=\"cursor: pointer;\">Sign-Up</button>\n </nav>\n   <div class=\"row p-0 m-0\">\n\n    <div class=\"col-sm\"></div>\n\n    <div class=\"col-sm p-5\">\n\n      <h2 class=\"form-signin-heading\" style=\"color: white\">Welcome To Issue-Tracker</h2>\n      <hr>\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required\n        autofocus>\n\n      <br>\n\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"\n        required>\n\n      <br>\n\n      <button class=\"btn btn-lg btn-outline-light btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n\n      <br>\n\n      <button class=\"btn btn-lg btn-outline-danger btn-block\" type=\"button\" (click)=\"googleLogin()\">Login With Google</button>\n\n    </div>\n\n    <div class=\"col-sm\"></div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(cookieService, toastr, appService, router) {
        var _this = this;
        this.cookieService = cookieService;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        };
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('Please Enter Email');
            }
            else if (!_this.password) {
                _this.toastr.warning('Please Enter Password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFuncction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        _this.cookieService.set('authtoken', apiResponse.data.authToken);
                        _this.cookieService.set('userId', apiResponse.data.userDetails.userId);
                        _this.cookieService.set('UserName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInformationStorage(apiResponse.data);
                        _this.router.navigate(['/dashboard']);
                    }
                    else {
                        _this.toastr.info(apiResponse.message);
                    }
                });
            }
        };
        this.googleLogin = function () {
            window.open('/auth/google', "mywindow", "location=1,status=1,scrollbars=1, width=800,height=800");
            var listener = window.addEventListener('message', function (message) {
                console.log(message);
                _this.appService.setUserInformationStorage(message.data.user);
                _this.cookieService.set('userId', message.data.user.userId);
                _this.cookieService.set('UserName', message.data.user.firstName + ' ' + message.data.user.lastName);
                _this.router.navigate(['/dashboard']);
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    background-image: url('background.png');\r\n    min-height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF1RDtJQUN2RCxrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nJyk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"background\">\n  <nav class=\"navbar navbar-expand-md navbar-dark\">\n    <a style=\"font-size:2.5em; color: white\" class=\"navbar-brand\" href=\"/\">Issue-Tracker</a>\n    <button class=\"btn btn-outline-light btn-lg\" (click)=\"goToSignIn()\" style=\"cursor: pointer;\">Sign-In</button>\n  </nav>\n  \n  <div class=\"row p-0 m-0\">\n  \n    <div class=\"col-sm\"></div>\n  \n    <div class=\"col-sm p-5\">\n  \n      <h2 class=\"form-signin-heading\" style=\"color: white\">Sign Up To Track your Issue</h2>\n  \n      <br>\n  \n      <span style=\"color: white\">FirstName: </span>\n  \n      <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n  \n      <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n  \n      <br>\n  \n      <span style=\"color: white\">LastName: </span>\n  \n      <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n  \n      <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n  \n      <br>\n  \n      <span style=\"color: white\">Mobile: </span>\n  \n      <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n  \n      <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n  \n      <br>\n  \n      <span style=\"color: white\">Email: </span>\n  \n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  \n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n  \n      <br>\n  \n      <span style=\"color: white\">Password: </span>\n  \n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  \n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n      <br>\n  \n      <button class=\"btn btn-lg btn-outline-light btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n  \n    </div>\n  \n    <div class=\"col-sm\"></div>\n  \n  </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        };
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.info('Enter first name');
            }
            else if (!_this.lastName) {
                _this.toastr.info('enter last name');
            }
            else if (!_this.mobile) {
                _this.toastr.info('enter mobile number');
            }
            else if (!_this.password) {
                _this.toastr.info('enter password');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobile: _this.mobile,
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.toastr.success('SingUp Successfully');
                        setTimeout(function () {
                            _this.goToSignIn();
                        }, 2000);
                    }
                    else {
                        _this.toastr.info(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.warning('some error accoured');
                });
            }
        };
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"] }];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\FAISAL\edwisor\project\issueTracker\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map