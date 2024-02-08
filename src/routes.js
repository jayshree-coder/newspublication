import Tables from "pages/tables";
import Office from "core/Icons/Office";


const routes = [
 
  {
    type: "collapse",
    name: "News Publication",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
 
 
];

export default routes;
