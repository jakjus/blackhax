/*!

=========================================================
* Black Dashboard React v1.1.0 =========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import { Shop, ShopSuccess } from "views/Shop.js";

var routes = [
  {
		path: "/shop/success",
		pathStripped: "/shop/success",
		redirect: 1,
		server: "",
    name: "Success!",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-money-coins",
    component: ShopSuccess,
    layout: "/admin"
  },
  {
		path: "/shop",
		pathStripped: "/shop",
		server: "",
    name: "BUY COINS",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-money-coins",
    component: Shop,
    layout: "/admin"
  },
  {
		path: "/shop-tr",
		pathStripped: "/shop",
		server: "-tr",
    name: "BUY COINS",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-money-coins",
    component: Shop,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/classic",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/bigeasy",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/big",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/waterpolo",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/war",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
    server: "/magic",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/classic-tr",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/bigeasy-tr",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/big-tr",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/waterpolo-tr",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/war-tr",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/magic-tr",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
	


	/* SERVERS */

  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/classic",
    name: "1v1 Classic EU",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/bigeasy",
    name: "4v4 Big Easy EU",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/big",
    name: "3v3 Big EU",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/waterpolo",
    name: "4v4 Waterpolo EU",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/war",
    name: "8v8 War EU",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/magic",
    name: "5v5 Superhero EU",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },

	/* SERVERS TURKEY */

  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/classic-tr",
    name: "1v1 Classic TR",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/bigeasy-tr",
    name: "4v4 Big Easy TR",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/big-tr",
    name: "3v3 Big TR",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/waterpolo-tr",
    name: "4v4 Waterpolo TR",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/war-tr",
    name: "8v8 War TR",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/magic-tr",
    name: "5v5 Superhero TR",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
];
export default routes;
