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

var routes = [
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
		//path: "/ranks/:server/:auth",
		redirect: 1,
		pathStripped: "/ranks",
		server: "/huge",
    name: "Profile Details",
    rtlName: "لوحة القيادة",
    icon: "tim-icons ",
    component: Dashboard,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/classic",
    name: "1v1 Classic",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  },
  {
		path: "/tables/:server",
		pathStripped: "/tables",
		server: "/huge",
    name: "4v4 Hot Huge",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin"
  }
];
export default routes;
