let count = 0;
const createId = () => ++count;

export default [
  {
    id: createId(),
    name: "系统管理",
    children: [
      {
        id: createId(),
        name: "角色管理",
        url: "/system/role"
      },
      {
        id: createId(),
        name: "用户管理",
        url: "/system/user"
      },
      {
        id: createId(),
        name: "操作日志",
        url: "/system/log"
      }
    ]
  }
];
