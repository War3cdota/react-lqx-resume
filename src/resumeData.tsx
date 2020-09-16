// 标题节点描述
export interface NodeData {
  icon?: string;
  text: string;
  titletype: string;
}
export interface ContentListData {
  icon?: string;
  data: Array<string>;
}
export interface ItemData {
  title: NodeData;
  subTitle: NodeData;
  timeline: NodeData;
  location: NodeData;
  contentlist: ContentListData;
}
export interface ContentData {
  title: string;
  item: Array<ItemData>;
}
// 图标数据-googleref:https://developers.google.com/chart/interactive/docs/gallery/piechart
export interface ChartData {
  title: string;
  item: Array<ItemData>;
  DataTable: Array<Array<any>>;
}

const resume = {
  name: "栾庆轩",
  englishname: "Qingxuan Luan",
  description: ["前端工程师", "算法", "游戏"],
  information: [
    {
      text: "25 Hangzhou",
      icon: "icon-people",
    },
    {
      text: "luanqx@foxmail.com",
      icon: "icon-email",
    },
    {
      text: "13649204134",
      icon: "icon-phone",
    },
    {
      text: "war3cdota.github.io",
      icon: "icon-blog",
    },
  ],
  wechat:
    "https://cdn.nlark.com/yuque/0/2020/png/742036/1600120300666-654ecc46-2545-441a-bcf8-b8daa979cfe7.png",
  experience: {
    title: "工作经历",
    item: [
      {
        title: {
          icon: "icon-company",
          text: "浙江华数-信息电视产品部-系统部",
          titletype: "title",
        },
        subTitle: {
          text: "web开发工程师",
          titletype: "subtitle",
        },
        timeline: {
          icon: "icon-timeline",
          text: "2016.03 - 至今",
          titletype: "time|location",
        },
        location: {
          icon: "icon-location",
          text: "杭州",
          titletype: "time|location",
        },
        contentlist: {
          icon: "icon-gear",
          titletype: "datalist",
          data: [
            "参与前端开发，负责交互式前端框架fw.js的页面逻辑和模板开发，以及相应的开发工具；",
            "参与商业电视前端与全省信息化平台的开发，协助制定开发规范，维护线上产品的稳定迭代；",
            "负责对接跨部门产品开发厂商的接入，测试，部署工作；",
            "负责前端模板及页面的故障处理，主要通过Wireshark抓包分析并配合网络部排查问题，处理及协查故障70余起。",
          ],
        },
      },
    ],
  },
  project: {
    title: "项目经历",
    item: [
      {
        title: {
          icon: "icon-cloud",
          text: "湖州云梯前端项目开发",
          titletype: "title",
        },
        subTitle: {
          text: "web开发工程师",
          titletype: "subtitle",
        },
        timeline: {
          icon: "icon-timeline",
          text: "2018.05 - 2018.12",
          titletype: "time|location",
        },
        location: {
          icon: "icon-location",
          text: "湖州",
          titletype: "time|location",
        },
        contentlist: {
          icon: "icon-gear",
          titletype: "datalist",
          data: [
            "为了获得更好的UI及更流畅地交互功能，也为了适配并利用新硬件的性能，我作为前端开发参与了该项目，该项目在通过后期的验证测试后已经部分的投入使用：",
            "前端开发，使用Javascript实现了用户交互-焦点移动功能；",
            "配合服务端，实现了以Json作为数据交换的前后端交互；",
            "协助服务端解决数据爬取时的正则表达式问题；",
            "解决测试时反馈的bug，修复并优化相关前端代码。",
          ],
        },
      },
      {
        title: {
          icon: "icon-ierde",
          text: "Ierde健康项目前端适配开发",
          titletype: "title",
        },
        subTitle: {
          text: "web开发工程师",
          titletype: "subtitle",
        },
        timeline: {
          icon: "icon-timeline",
          text: "2019.03 - 2019.12",
          titletype: "time|location",
        },
        location: {
          icon: "icon-location",
          text: "湖州",
          titletype: "time|location",
        },
        contentlist: {
          icon: "icon-gear",
          titletype: "datalist",
          data: [
            "Ierde健康项目是一款针对电视端开发的配合相关硬件进行对居家老人的健康管理的web端应用。作为开发，进行了适配ES4及以下的硬件设备的前端业务功能开发：",
            "参与了项目前期的功能与业务的需求分析；",
            "负责项目开发模块：适配前端页面的开发及测试反馈，服务器端数据接口对接工作，相关的业务模块功能实现； ",
            "提供项目的后期技术支撑。",
          ],
        },
      },
    ],
  },
  education: {
    title: "学习经历-STRUGGLES I LEARNED FROM",
    item: [
      {
        title: {
          icon: "icon-college",
          text: "西北大学",
          titletype: "title",
        },
        timeline: {
          icon: "icon-timeline",
          text: "2012 - 2016",
          titletype: "time|location",
        },
        contentlist: {
          icon: "icon-bachelor",
          titletype: "datalist",
          data: ["物联网工程"],
        },
      },
      {
        title: {
          icon: "icon-js",
          text: "Web前端",
          titletype: "title",
        },
        timeline: {
          icon: "icon-timeline",
          text: "2016 - 至今",
          titletype: "time|location",
        },
        contentlist: {
          icon: "icon-dot1",
          titletype: "datalist",
          data: [
            "熟悉React项目的的搭建与应用开发；",
            "了解typescript的使用；",
            "写过基于React的UI组件，了解最佳实践。",
          ],
        },
      },
      {
        title: {
          icon: "icon-algorithm",
          text: "数据结构与算法",
          titletype: "title",
        },
        contentlist: {
          icon: "icon-dot1",
          titletype: "datalist",
          data: [
            "掌握基本的算法，利用了三个月时间准备参加了浙江大学2019年秋季的PAT-Advanced，取得了92/100分的成绩：",
            "提升了算法能力和英文能力；",
            "通过解决编程问题加深了对基本的数据存储结构的认识；理解并可编程实现经典高级算法；",
            "具备了较强的问题抽象和建模能力，能实现对复杂问题的模拟求解。",
          ],
        },
      },
      {
        title: {
          icon: "icon-practice",
          text: "工程实践",
          titletype: "title",
        },
        contentlist: {
          icon: "icon-dot1",
          titletype: "datalist",
          data: [
            "具有良好的代码风格，严格遵循普遍公认的开发规范；",
            "使用git进行版本控制和开发。",
          ],
        },
      },
      {
        title: {
          icon: "icon-tomcat",
          text: "Web后端",
          titletype: "title",
        },
        contentlist: {
          icon: "icon-dot1",
          titletype: "datalist",
          data: [
            "掌握Java基本语法，能用Java解决问题；",
            "使用Tomcat服务器进行过后端开发，对JavaWeb有了解；",
            "了解过ssh框架，编写过相关代码；",
            "使用过MySql，SQL Server等关系型数据库。",
          ],
        },
      },
    ],
  },
  selfevaluation: {
    title: "自我评价",
    item: [
      {
        contentlist: {
          icon: "icon-dot1",
          titletype: "datalist",
          data: [
            "热爱计算机技术，思路清晰，遇问题会在实践中认清本质再解决；",
            "感谢您的查看，希望得到您的回复*^_^*！",
          ],
        },
      },
    ],
  },
  skillchart: {
    title: "知识技能图",
    item: [
      {
        contentlist: {
          icon: "icon-dot3",
          titletype: "datalist",
          data: [
            "OS：了解操作系统，了解CPU流水线，使用汇编语言编写过程序；",
            "JS：遵守ECMAScript的JavaScript规范；",
            "Java：了解JavaSE相关知识；",
            "网络：了解OSI七层网络模型和TCP/IP参考模型；",
            "算法：掌握经典的算法知识。",
          ],
        },
      },
    ],
    DataTable: [
      ["我的Skill", "描述-这栏不显示"],
      ["OS", 6], //数字表示占比
      ["JS", 5],
      ["Java", 5],
      ["网络", 5],
      ["算法", 6],
    ],
  },
};
export default resume;
