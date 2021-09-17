import Mock from "mockjs";

Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "https://www.500d.me/cvresume/9555882044/",
});
