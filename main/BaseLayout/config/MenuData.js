import * as Routes from "../../constant/Routes";

export default [
  {
    name: "用户管理",
    children: [
      {
        name: "项目人员",
        to: Routes.UserList
      },
      {
        name: "角色管理",
        to: Routes.UserRole
      }
    ]
  }
];
