import Dashboard from "views/Dashboard";
// import Icons from "views/Icons";
// import Map from "views/Map";
// import Notifications from "views/Notifications";
// import TableList from "views/TableList";
// import Typography from "views/Typography";
// import UserProfile from "views/UserProfile";

var routes = [
  {
    path: "/dashboard",
    name: "Security",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  }
  //,
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/map",
  //   name: "Map",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // }
];
export default routes;
