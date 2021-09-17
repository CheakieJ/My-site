import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://img2.baidu.com/it/u=3366578486,423528972&fm=26&fmt=auto&gp=0.jpg",
    siteTitle: "扫地僧",
    github: "https://github.com/CheakieJ",
    qq: 1515421662,
    qqQrCode:
      "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "CheakieJ",
    weixinQrCode:
      "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "cheakie@163.com",
    icp: "京ICP备12138号",
    githubName: "CheakieJ",
    favicon:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F30%2F20200530112650_4XXME.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630073041&t=f03723c61293e8237c7d0a106f1a58e8",
  },
});
