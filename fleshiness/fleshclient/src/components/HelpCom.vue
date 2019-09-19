<template>
  <div class="contentbox">
    <el-row>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <ul class="helpleft">
            <li>
              <router-link class="a" to="/help?index=0">购物保障</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=1">购物流程</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=2">退换货策略</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=3">支付方式</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=4">发票开具</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=5">发货时间</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=6">关于包装</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=7">公司简介</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=8">联系我们</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=9">用户协议</router-link>
            </li>
            <li>
              <router-link class="a" to="/help?index=10">田园休闲俱乐部</router-link>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple-light" id="rightbox">
          <div class="title">
            <b>{{lists[index].title}}</b>
          </div>
          <div class="content" id="content" v-html="lists[index].content"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      lists: [
        {
          title: "购物保障",
          content: `欢迎光临万象花卉多肉植物网，购物流程很简单，只需简单几步就可以了哦。<br />
                1、登录会员中心<br />
                您可以免费注册成为会员，当然也可以不注册，直接用QQ或微信登录；<br />
                2、加入购物车<br />
                将您想要购买的多肉植物，加入购物车；<br />
                3、填写地址、计算运费<br />
                进入购物车，点击下一步，填写收货地址、选择付款方式、选择快递方式后，系统会自动计算运费及总价<br />
                4、提交订单、付款<br />
                提交订单。如您选择在线支付，可直接用支付宝、微信支付、银联支付，也可选择去银行汇款的方式。<br />
                5、发货收货<br />
                收到您的货款后，我们会及时给您发货；您收到货物后，如发现货物有损坏，请立即联系我们为您处理售后。`
        },
        {
          title: "购物流程",
          content: `<p>欢迎光临万象花卉多肉多商城，购物流程很简单，只需简单几步就可以了哦。</p>
                <p>&nbsp;</p>
                <p>
                    1、登录会员中心<br />
                    您可以免费注册成为会员，当然也可以不注册，直接使用微信扫网站右上角的二维码；
                </p>
                <p>&nbsp;</p>
                <p>
                    2、加入购物车<br />
                    将您想要购买的商品，加入购物车；
                </p>
                <p>&nbsp;</p>
                <p>
                    3、填写地址、计算运费<br />
                    进入购物车，点击下一步，填写收货地址、选择付款方式、系统会自动计算运费及总价;
                </p>
                <p>&nbsp;</p>
                <p>
                    4、提交订单、付款<br />
                    提交订单。商城可以使用微信和支付宝支付。
                </p>
                <p>&nbsp;</p>
                <p>
                    5、发货收货<br />
                    收到您的货款后，我们会及时给您发货；您收到货物后，如发现货物有损坏，请立即联系我们为您处理售后。
                </p>
                `
        },
        {
          title: "退换货策略",
          content: `<p>我们为您提供<span style="color:red">零风险</span>的购物保障</p>
                <p>&nbsp;</p>
                <p>
                    对于<span style="color:red">有任何质量问题的货物</span>，包括色差、病害、尺寸不符、运输损坏等，为您提供全程无负担的退换货服务。如果您收到的多肉植物有任何问题，请在收到货物的5天内联系我们的在线客服提出退换货申请，我们将为您提供优质的退换货（退款）服务。退换货时，必须原包装退还，包括订单清单在内的包装箱内所有物品。退换货往返的物流费用，由我们承担。
                </p>
                <p>&nbsp;</p>
                <p>
                    <span style="color:red">非质量问题的货物</span>，如果您想退换，请在收到货物的3天内联系我们的在线客服并提出退换货申请。退换货时，必须原包装退还，包括订单清单在内的包装箱内所有物品。退换货往返的物流费用，由您承担。 
                </p>
                `
        },
        {
          title: "支付方式",
          content: `<p>您可以在下单时选择以下几种在线支付方式，付款后立即到账，包括：</p>
                <p>&nbsp;</p>
                <p>
                    图片<span style="color:red">有任何质量问题的货物</span>，包括色差、病害、尺寸不符、运输损坏等，为您提供全程无负担的退换货服务。如果您收到的多肉植物有任何问题，请在收到货物的5天内联系我们的在线客服提出退换货申请，我们将为您提供优质的退换货（退款）服务。退换货时，必须原包装退还，包括订单清单在内的包装箱内所有物品。退换货往返的物流费用，由我们承担。
                </p>
                <p>
                    您也可以选择银行汇款，请在汇款后及时通时客服。
                </p>
                <p>&nbsp;</p>
                <p>
                   对公账号：<br />
                    单位名称：浙江万象花卉股份有限公司<br />
                    开户行：金华市农行婺城支行<br />
                    账号：1961 0101 0400 01784
                </p>
                <p>&nbsp;</p>
                <p>
                    注：目前手机“微信支付”只支持从微信客户端进入网站；微信客户端不支持“支付宝”。 
                </p>
                `
        },
        {
            title:"发票开具",
            content:`我们所有销售的多肉植物都可提供正式发票，请在订购时注明您的信息，以便我们开具发票，保障您的权益。`
        },
        {
            title:"发货时间",
            content:`<p>为尽快将您购买的肉肉送到您手上，我们一天发货2次。</p>
                    <p>&nbsp;</p>
                    <p>
                        下午<span style="color:red">2点前下单</span>并付款成功的，当天发货。<br />
                        下午<span style="color:red">2点后下单</span>并付款成功的，第二天发货。
                    </p>
                `
        },
        {
            title:"关于包装",
            content:`<p>内包装：我们使用天然的草苔包裹多肉植物，作为填充植物起到缓冲保护的作用。在您收到多肉植物后，草苔还可以作为多肉植物的种植介质。</p>
                    <p>&nbsp;</p>
                    <p>
                        外包装：高质量的双瓦楞美标牛皮纸箱，高品质的封箱胶带，让您的多肉植物安全到家。
                    </p>
                `
        },
        {
            title:"公司简介",
            content:`<p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国-比利时基金直投企业、上海中平国瑀投资基金合伙企业浙江万象花卉股份有限公司成立于1997年，公司总部位于浙江省金华市，在职员工200余人，其中科技人员70余人，现拥有生产基地总面积2100余亩，温室大棚面积50万平方米，是集多肉植物培育、加盟连锁业务、电子商务、园艺培训、科技研发、农业休闲观光、种苗进出口等为一体的农业产业化国家重点龙头企业。
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司是国内超大型多肉植物生产商，年产多肉植物达1亿株，现有多肉植物品种500余种，涵盖景天科、百合科、番杏科等科属，并已建立领先的多肉植物新品种研发和组织培养技术体系。公司拥有国家种子种苗进出口资质，2016年在韩国设立了多肉种苗备货农场，多肉植物种苗均为国外原种进口，公司自行繁殖并进行大规模标准化培育。
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不忘初心，方得始终！万象花卉坚守标准化农业二十余年，立志要做现代农业创意体验的开拓者和坚守者，发展“创意多肉、静心产业”，为打造世界级的“万象多肉王国”而努力。
                    </p>
                `
        },
        {
            title:"联系我们",
            content:`<p>
                        万象花卉多肉多上海小站（华东区域中心）<br />
                        电&nbsp;&nbsp;话：18867938607 <br />
                        地&nbsp;&nbsp;址：上海种业集团花卉创业园内C5-8号（九新公路中段695号）
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        万象花卉多肉多深圳小站（华南区域中心）<br />
                        电&nbsp;&nbsp;话：13735713607 <br />
                        地&nbsp;&nbsp;址：深港花卉中心二平台大树区(深圳南山区沙河西路4811号)
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        万象花卉多肉多郑州小站（华北区域中心）<br />
                        电&nbsp;&nbsp;话：18867938615 <br />
                        地&nbsp;&nbsp;址：郑州市陈砦花卉双桥基地B区115-117号
                    </p>
                `
        },
        {
            title:"用户协议",
            content:`
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本网站是指域名为“www.duorou.com”的网站，是由浙江万象花卉有限公司独立开发、运营的电子商务平台。本公司在此特别提醒用户认真阅读、充分理解本协议各条款，特别是其中所涉及的免除、限制本公司责任的条款、对用户权利限制条款争议解决和法律适用等。请用户审慎阅读并选择接受或不接受本协议（未成年人应在监护人陪同下阅读）。除非用户接受本协议所有条款，否则用户无权使用本公司于本协议下所提供的服务。用户在本网站注册、登录或使用本网站服务，即表示用户完全接受本协议的全部条款，并同意接受其约束。</p>
                <p>1、接受</p>
                <p>1.1 当用户选择访问或使用本网站有关服务，将视为同意接受本协议全部条款的约束</p>
                <p>1.2 除非另有明确规定，本网站所推出的新产品、新功能和新服务，均无条件的适用本协议。本网站保留在任何时候修改本协议条款的权利，且无需另行通知。用户在使用服务时应关注并遵守 。</p>
                <p>2、用户</p>
                <p>2.1 用户应当具备使用本网站和/或在本网站购买商品、享受服务的完全民事行为能力，并承诺对相关行为承担相应的法律责任。</p>
                <p>2.2 不具备上述资格的人不得成为本网站用户。本公司一经发现，有权立即注销该用户并有权禁止被注销用户资格的自然人、法人及其他组织再次使用网站。</p>
                <p>3、知识产权</p>
                <p>3.1 本网站及本网站所有内容的选材、整理、编排、排版、汇编，以及由网站创作的文字、图片等作品的著作权，无论是否明示，均属网站所有。任何自然人、法人及其他组织未经网站书面授权或许可，不得修改、出版、传播、参与传播、销售、制作衍生作品，或以其他任何方式使用整体或部分的网站上的内容，包括但不限于公司信息、产品信息，网站将保留追究其法律责任的权利。</p>
                <p>3.2 未经网站授权，任何人不得使用网站任何商标、服务标记、标识、域名和其他显著品牌特征的权利。</p>
            `
        },
        {
            title:"田园休闲俱乐部",
            content:`<img src="https://www.duorou.com/TempImage/DetailImages/20180630/6366596503898689563680304.jpg" />`
        }
      ]
    };
  },
  watch: {
    "$route.query.index": function() {
      this.index = this.$route.query.index;
      console.log(this.$route.query.index);
    }
  }
};
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.contentbox {
  width: 100%;
  padding: 40px 10%;
  box-sizing: border-box;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-light {
  margin-left: 40px;
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title{
    width: 100%;
    border-bottom: 1px solid gainsboro;
    padding: 15px 30px;
    box-sizing: border-box;
    background-color: #F5F6F5;
    font-size: 16px;
}
.content{
    padding: 20px 30px;
    box-sizing: border-box;
}
#content>img{
    width: 100%;
}
#rightbox{
    border: 1px solid gainsboro;
    box-sizing: border-box;
    font-size: 14px;
}

.helpleft > li {
  height: 50px;
  list-style: none;
  border-top: 1px solid gainsboro;
  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  text-align: center;
  line-height: 50px;
}
.helpleft > li:last-child {
  border-bottom: 1px solid gainsboro;
}
.helpleft > li > .a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: 16px;
  color: black;
}

</style>