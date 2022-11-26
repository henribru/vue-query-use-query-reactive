"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
require("./assets/main.css");
(0, vue_1.createApp)(App_vue_1["default"]).mount('#app');
var vue_query_1 = require("vue-query");
var vue_query_2 = require("@tanstack/vue-query");
function foo() {
    return Promise.resolve("foo");
}
var query = (0, vue_1.reactive)((0, vue_query_1.useQuery)(["foo"], foo));
query.data;
if (query.isSuccess) {
    query.data;
}
var queryNew = (0, vue_1.reactive)((0, vue_query_2.useQuery)(["foo"], foo));
query.data;
if (queryNew.isSuccess) {
    queryNew.data;
}
