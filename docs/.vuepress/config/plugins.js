// Plugin Config
module.exports = [
  // 搜索框第三方搜索
  [
    "thirdparty-search",
    {
      thirdparty: [
        {
          title: "在GitHub中搜索",
          frontUrl: "https://github.com/search?q=",
          behindUrl: ""
        },
        {
          title: "在Google中搜索",
          frontUrl: "https://www.google.com/search?q="
        },
        {
          title: "在Baidu中搜索",
          frontUrl: "https://www.baidu.com/s?wd="
        }
      ]
    }
  ],
  // 百度统计
  [
    "vuepress-plugin-baidu-tongji",
    {
      hm: "b35917235aa1389bb494d04deb745ec6"
    }
  ],
  // 代码块复制
  [
    "one-click-copy",
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside'
      ],
      copyMessage: "复制成功",
      duration: 1000,
      showInMobile: false
    }
  ],
  // 图片缩放
  [
    "vuepress-plugin-zooming",
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)",
      options: {
        bgColor: "rgba(0,0,0,0.6)"
      }
    }
  ],
  // "上次更新"时间格式
  [
    "@vuepress/last-updated",
    {
      transformer: (timestamp, lang) => {
        const dayjs = require("dayjs"); // https://day.js.org/
        return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
      }
    }
  ],
  // 谷歌统计
  [
    "@vuepress/google-analytics",
    {
      ga: "UA-85414008-1"
    }
  ]
];
