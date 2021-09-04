import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffj.people.com.cn%2FNMediaFile%2F2016%2F0701%2FLOCAL201607011441000001945675772.jpg&refer=http%3A%2F%2Ffj.people.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631706682&t=61b3e42a30f48d12754e8788d22bb1a7",
      bigImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170223%2F5231ac38ec24480eae0c3e9af56089ee_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631778604&t=7c5fa917daae46893164f6f8c579b772",
      title: "流浪法师：瑞兹",
      description: "知识才是最强大的武器",
    },
    {
      id: "2",
      midImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fossweb-img.qq.com%2Fimages%2Fdaoju%2Fapp%2Flol%2Fbig%2F1-103-9.jpg&refer=http%3A%2F%2Fossweb-img.qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631707250&t=b6fcaea36a87a9679b2bcf323cf24105",
      bigImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.h128.com%2Fupload%2F201905%2F09%2F201905091506465490.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Cw_1421%2Fquality%2Cq_100%2Fformat%2Cjpg&refer=http%3A%2F%2Fimages.h128.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631707213&t=4b9b77c3de8b7a1e586d28adeea32130",
      title: "九尾妖狐：阿狸",
      description: "慈悲是人类的奢侈之举，也是责任所在",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.17173cdn.com%2F9ih5jd%2FYWxqaGBf%2Fforum%2F201803%2F10%2F171751xsyk8lsyqssywidx.jpg&refer=http%3A%2F%2Fi1.17173cdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631707594&t=6e67437a8fbca6aab076713dc9c0674c",
      title: "死兆星：卡兹克",
      description: "改变就是好事",
    },
  ],
});
