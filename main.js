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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"wrap\">\n    <div class=\"content-grid\">\n      <p>\n        <img src=\"/assets/images/coming-soon/top.png\" title=\"\">\n      </p>\n    </div>\n    <div class=\"grid\">\n      <p>\n        <img src=\"/assets/images/coming-soon/coming.png\" title=\"\">\n      </p>\n      <h3>We are Still Working on it.</h3>\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background: url(/assets/images/coming-soon/bg.png) no-repeat center fixed #fff;\n  background-size: cover;\n  font-family: \"Open Sans\", arial, sans-serif;\n  font-weight: 300;\n  height: 100vh; }\n  .content p {\n    margin: 0 !important; }\n  .content .wrap {\n    width: 80%;\n    margin: 0px auto; }\n  .content .wrap .content-grid {\n      text-align: center; }\n  .content .wrap .content-grid p img {\n        z-index: -9999;\n        text-align: center;\n        margin-top: -10em;\n        width: 100%;\n        margin-left: 0; }\n  .content .wrap .grid {\n      text-align: center;\n      margin-top: 1em; }\n  .content .wrap .grid h3 {\n        font-family: 'Petit Formal Script', cursive;\n        color: #FFF;\n        display: block;\n        padding-bottom: 2.5em;\n        font-size: 1.6em;\n        padding-top: 1.5em;\n        font-weight: 600;\n        text-align: center; }\n  /*-----start-responsive-design------*/\n  @media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .content .wrap {\n    width: 95%; }\n    .content .wrap .content-grid p img {\n      margin-top: -4em !important; }\n    .content .wrap .grid p {\n      margin-top: 1em; }\n    .content .wrap .grid h3 {\n      padding-top: 1.2em;\n      padding-bottom: 2em; } }\n  @media only screen and (max-width: 768px) and (min-width: 480px) {\n  .content .wrap {\n    width: 95%; }\n    .content .wrap .content-grid p {\n      margin-top: 3em; }\n    .content .wrap .content-grid img {\n      margin-top: -4em !important; }\n    .content .wrap .grid p {\n      margin-top: 0em; }\n      .content .wrap .grid p img {\n        width: 80%;\n        margin-top: 1em; }\n    .content .wrap .grid h3 {\n      font-size: 1em;\n      padding-top: 1.5em;\n      padding-bottom: 3em; } }\n  @media only screen and (max-width: 480px) and (min-width: 320px) {\n  .content .wrap {\n    width: 95%; }\n    .content .wrap .content-grid {\n      text-align: center;\n      margin: 0px auto; }\n      .content .wrap .content-grid p img {\n        margin-top: -2.2em !important;\n        text-align: center; }\n    .content .wrap .grid {\n      margin-top: 0em; }\n      .content .wrap .grid p {\n        margin-top: 0em; }\n        .content .wrap .grid p img {\n          width: 283px;\n          margin-top: 0.3em; }\n      .content .wrap .grid h3 {\n        font-size: 0.9em;\n        padding-top: 1.2em;\n        padding-bottom: 1.7em; } }\n  @media only screen and (max-width: 320px) and (min-width: 240px) {\n  .content .wrap {\n    width: 95%; }\n    .content .wrap .content-grid p {\n      margin-top: 1em !important; }\n    .content .wrap .grid p {\n      margin-top: 0em; }\n      .content .wrap .grid p img {\n        margin-top: 0em; }\n    .content .wrap .grid h3 {\n      font-size: 1em;\n      padding-top: 1em;\n      padding-bottom: 1.4em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNb25UaVxcRGVza3RvcFxcQkctQVBQXFxiYWlnYW5pby5naXRodWIuaW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtFQUE4RTtFQUM5RSx1QkFBc0I7RUFDekIsNENBQTJDO0VBQzNDLGlCQUFnQjtFQUNiLGNBQWEsRUFvQ2hCO0VBekNEO0lBT1EscUJBQW9CLEVBQ3ZCO0VBUkw7SUFVUSxXQUFVO0lBQ1YsaUJBQWdCLEVBNkJuQjtFQXhDTDtNQWNZLG1CQUFrQixFQVNyQjtFQXZCVDtRQWlCZ0IsZUFBYztRQUNkLG1CQUFrQjtRQUNsQixrQkFBaUI7UUFDakIsWUFBVztRQUNYLGVBQWMsRUFDakI7RUF0QmI7TUEwQlksbUJBQWtCO01BQ2xCLGdCQUFlLEVBWWxCO0VBdkNUO1FBOEJnQiw0Q0FBMkM7UUFDM0MsWUFBVztRQUNYLGVBQWM7UUFDZCxzQkFBcUI7UUFDckIsaUJBQWdCO1FBQ2hCLG1CQUFrQjtRQUNsQixpQkFBZ0I7UUFDaEIsbUJBQWtCLEVBQ3JCO0VBSWIsc0NBQXNDO0VBQ3RDO0VBQ0k7SUFHUSxXQUFTLEVBc0JaO0lBekJMO01BVW9CLDRCQUEyQixFQUM5QjtJQVhqQjtNQWtCZ0IsZ0JBQWUsRUFDbEI7SUFuQmI7TUFxQmdCLG1CQUFrQjtNQUNsQixvQkFBbUIsRUFDdEIsRUFBQTtFQUtqQjtFQUNJO0lBR1EsV0FBUyxFQTJCWjtJQTlCTDtNQVFnQixnQkFBZSxFQUNsQjtJQVRiO01BWWdCLDRCQUEyQixFQUM5QjtJQWJiO01BaUJnQixnQkFBZSxFQU1sQjtNQXZCYjtRQW9Cb0IsV0FBVTtRQUNWLGdCQUFlLEVBQ2xCO0lBdEJqQjtNQXlCZ0IsZUFBYztNQUNkLG1CQUFrQjtNQUNsQixvQkFBbUIsRUFDdEIsRUFBQTtFQUtqQjtFQUNJO0lBR1EsV0FBUyxFQWlDWjtJQXBDTDtNQU1ZLG1CQUFrQjtNQUNsQixpQkFBZ0IsRUFTbkI7TUFoQlQ7UUFZb0IsOEJBQTZCO1FBQzdCLG1CQUFrQixFQUNyQjtJQWRqQjtNQW1CWSxnQkFBZSxFQWdCbEI7TUFuQ1Q7UUFzQmUsZ0JBQWUsRUFNakI7UUE1QmI7VUF5Qm1CLGFBQVk7VUFDWixrQkFBaUIsRUFDbkI7TUEzQmpCO1FBK0JnQixpQkFBZ0I7UUFDaEIsbUJBQWtCO1FBQ2xCLHNCQUFxQixFQUN4QixFQUFBO0VBS2pCO0VBQ0k7SUFHUSxXQUFTLEVBeUJaO0lBNUJMO01BUWdCLDJCQUF5QixFQUM1QjtJQVRiO01BZWdCLGdCQUFlLEVBS2xCO01BcEJiO1FBa0JvQixnQkFBZSxFQUNsQjtJQW5CakI7TUF1QmdCLGVBQWM7TUFDZCxpQkFBZ0I7TUFDaEIsc0JBQXFCLEVBQ3hCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9jb21pbmctc29vbi9iZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWQgI2ZmZjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0Zm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAud3JhcCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG5cclxuICAgICAgICAuY29udGVudC1ncmlkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgcCBpbWd7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtOTk5OTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMGVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQgIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BldGl0IEZvcm1hbCBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjVlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qLS0tLS1zdGFydC1yZXNwb25zaXZlLWRlc2lnbi0tLS0tLSovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250ZW50IHtcclxuXHJcbiAgICAgICAgLndyYXB7XHJcbiAgICAgICAgICAgIHdpZHRoOjk1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LWdyaWQge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuZ3JpZCB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW50IHtcclxuXHJcbiAgICAgICAgLndyYXB7XHJcbiAgICAgICAgICAgIHdpZHRoOjk1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LWdyaWQge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNGVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuICAgIC5jb250ZW50IHtcclxuXHJcbiAgICAgICAgLndyYXB7XHJcbiAgICAgICAgICAgIHdpZHRoOjk1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LWdyaWQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMi4yZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjdlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSBhbmQgKG1pbi13aWR0aDogMjQwcHgpIHtcclxuICAgIC5jb250ZW50IHtcclxuXHJcbiAgICAgICAgLndyYXB7XHJcbiAgICAgICAgICAgIHdpZHRoOjk1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LWdyaWQge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmdyaWQge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS40ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'baiganio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_angular_materials_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/angular-materials.module */ "./src/app/core/angular-materials.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _core_angular_materials_module__WEBPACK_IMPORTED_MODULE_4__["CustomAngularMaterialsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/angular-materials.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/angular-materials.module.ts ***!
  \**************************************************/
/*! exports provided: CustomAngularMaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAngularMaterialsModule", function() { return CustomAngularMaterialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");




var CustomAngularMaterialsModule = /** @class */ (function () {
    function CustomAngularMaterialsModule() {
    }
    CustomAngularMaterialsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
            ]
        })
    ], CustomAngularMaterialsModule);
    return CustomAngularMaterialsModule;
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

module.exports = __webpack_require__(/*! C:\Users\MonTi\Desktop\BG-APP\baiganio.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map