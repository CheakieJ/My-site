<template>
  <div class="contact-container">
    <a href="">
      <Icon type="github" />
      <span class="con">{{ userName }}</span>
    </a>
    <a href="mailto:cheakie@163.com">
      <Icon type="mail" />
      <span class="con">{{ email }}</span>
    </a>
    <a
      :href="`tencent://Message/?Uin=${QQ}&websiteName=q-zone.qq.com&Menu=yes`"
    >
      <Icon type="qq" />
      <span class="con">{{ QQ }}</span>
      <div class="pic">
        <img
          src="https://qr.api.cli.im/newqr/create?data=%25E9%259B%2584%25E5%2585%25B3%25E6%25BC%25AB%25E9%2581%2593%25E7%259C%259F%25E5%25A6%2582%25E9%2593%2581%25EF%25BC%258C%25E8%2580%258C%25E4%25BB%258A%25E8%25BF%2588%25E6%25AD%25A5%25E4%25BB%258E%25E5%25A4%25B4%25E8%25B6%258A&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=22d46c1d8a34e21a3dbe88a281f731fc"
          alt=""
        />
      </div>
    </a>
    <a href="">
      <Icon type="weixin" />
      <span class="con">{{ weChat }}</span>
      <div class="pic">
        <img
          src="https://qr.api.cli.im/newqr/create?data=%25E9%259B%2584%25E5%2585%25B3%25E6%25BC%25AB%25E9%2581%2593%25E7%259C%259F%25E5%25A6%2582%25E9%2593%2581%25EF%25BC%258C%25E8%2580%258C%25E4%25BB%258A%25E8%25BF%2588%25E6%25AD%25A5%25E4%25BB%258E%25E5%25A4%25B4%25E8%25B6%258A&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=22d46c1d8a34e21a3dbe88a281f731fc"
          alt=""
        />
      </div>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    userName: {
      type: String,
      default: "mayun",
    },
    email: {
      type: String,
      default: "mayun@name.com",
    },
    QQ: {
      type: Number,
      default: 123456789,
    },
    weChat: {
      type: String,
      default: "jackma",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.contact-container {
  width: 100%;
  background-color: transparent;
  color: @gray;
  padding: 20px;
  font-size: 14px;
  box-sizing: border-box;

  .con {
    margin: 10px;
  }
  a {
    display: block;
    margin: 5px 0;
    position: relative;
    &:hover {
      .pic {
        transform: scaleY(1);
      }
    }
    .pic {
      position: absolute;
      top: -130px;
      left: 30px;
      padding: 10px;
      background-color: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transition: 0.3s;
      transform-origin: bottom center;
      &::after {
        content: "";
        display: block;
        background-color: #fff;
        width: 8px;
        height: 8px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: -4px;
        transform: rotate(45deg);
      }
      img {
        display: block;
        width: 100px;
        height: 100px;
      }
    }
  }
}
.icon-container {
  font-size: 16px;
}
</style>
