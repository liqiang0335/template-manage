import * as Routes from "./Routes";

export default [
  {
    name: "用户管理",
    children: [
      {
        name: "用户列表",
        to: Routes.UserList
      },
      {
        name: "角色管理",
        to: Routes.RoleList
      }
    ]
  }
];
