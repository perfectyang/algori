const list = [
  {
    state: 2,
    children: [
      {
        state: "2-1",
      },
      {
        state: "2-2",
        children: [
          {
            state: "2-2-1",
          },
        ],
      },
    ],
  },
  {
    state: 3,
    children: [
      {
        state: "3-1",
      },
      {
        state: "3-2",
      },
    ],
  },
];

const getTarget = (arr, id) => {
  let target;
  const recurse = (arr, id, path = []) => {
    for (let i = 0; i < arr.length; i++) {
      let cur = arr[i];
      const ob = { ...cur, children: null };
      delete ob.children;
      path.push(ob);
      if (cur.state === id) {
        target = JSON.parse(JSON.stringify(path));
        return;
      }
      if (cur.children) {
        recurse(cur.children ?? [], id, path);
      }
      path.pop();
    }
  };
  recurse(arr, id);
  return target;
};

const getTargetOnly = (arr, id) => {
  let target;
  const recurse = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
      let cur = arr[i];
      if (cur.path === id) {
        target = { ...cur };
        return;
      }
      if (cur.children) {
        recurse(cur.children ?? [], id);
      }
    }
  };
  recurse(arr, id);
  return target;
};

// const ret = getTarget(list, "3-2");
// const ret2 = getTargetOnly(list, "2-2-1");

// console.log("ret", JSON.stringify(ret2, 2));

const backEnd = [
  {
    id: 1526,
    parentId: 1360,
    name: "tiktok剪辑任务",
    path: "/edittask",
    component: "",
    icon: "#",
    visible: true,
    keepAlive: true,
    children: [
      {
        id: 1527,
        parentId: 1526,
        name: "主题库",
        path: "/edittask/demand",
        component: "/src/pages/edittask/demand",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1528,
        parentId: 1526,
        name: "计划任务",
        path: "/edittask/plan",
        component: "/src/pages/edittask/plan",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1529,
        parentId: 1526,
        name: "剪辑任务",
        path: "/edittask/editing",
        component: "/src/pages/edittask/editing",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1530,
        parentId: 1526,
        name: "视频成品库",
        path: "/edittask/video",
        component: "/src/pages/edittask/video",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1536,
        parentId: 1526,
        name: "国内剧本",
        path: "/edittask/desplay",
        component: "/src/pages/edittask/desplay/index",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1531,
        parentId: 1526,
        name: "S级KOL内容",
        path: "/edittask/skol",
        component: "/src/pages/edittask/skol/index",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1532,
        parentId: 1526,
        name: "S级音频内容",
        path: "/edittask/svoice",
        component: "/src/pages/edittask/svoice/index",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
    ],
  },
  {
    id: 1533,
    parentId: 1360,
    name: "国内剧本管理",
    path: "/domestic",
    component: "",
    icon: "#",
    visible: true,
    keepAlive: true,
    children: [
      {
        id: 1534,
        parentId: 1533,
        name: "新增国内剧本",
        path: "/domestic/add",
        component: "/src/pages/domestic/add",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1535,
        parentId: 1533,
        name: "国内剧本库",
        path: "/domestic/list",
        component: "/src/pages/domestic/list",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
    ],
  },
  {
    id: 1369,
    parentId: 1360,
    name: "我的审核22222",
    path: "/audit",
    component: "/src/pages/audit",
    icon: "#",
    visible: true,
    keepAlive: true,
    children: null,
  },
  {
    id: 1361,
    parentId: 1360,
    name: "剧本管理",
    path: "/drama",
    component: null,
    icon: "#",
    visible: true,
    keepAlive: true,
    children: [
      {
        id: 1362,
        parentId: 1361,
        name: "需求库",
        path: "/drama/demand",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1363,
        parentId: 1361,
        name: "剧本库",
        path: "/drama/demand/play",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1365,
        parentId: 1361,
        name: "计划任务",
        path: "/drama/plan",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1366,
        parentId: 1361,
        name: "剪辑任务",
        path: "/drama/editing",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1523,
        parentId: 1361,
        name: "视频成品库",
        path: "/drama/video",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1367,
        parentId: 1361,
        name: "品牌分镜库",
        path: "/drama/brandShot",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1368,
        parentId: 1361,
        name: "印尼语翻译",
        path: "/drama/idlang",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1370,
        parentId: 1361,
        name: "剧本分类配置",
        path: "/drama/playTemplateType",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1371,
        parentId: 1361,
        name: "剧本模板草稿库",
        path: "/drama/playDraft",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1372,
        parentId: 1361,
        name: "剧本模板库",
        path: "/drama/playTemplate",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
    ],
  },
  {
    id: 1373,
    parentId: 1360,
    name: "供应链",
    path: "/supply",
    component: null,
    icon: "#",
    visible: true,
    keepAlive: true,
    children: [
      {
        id: 1374,
        parentId: 1373,
        name: "SKU库",
        path: "/supply/goods",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
    ],
  },
  {
    id: 1477,
    parentId: 1360,
    name: "TT KOL运营",
    path: "/TTkolOperate",
    component: null,
    icon: "#",
    visible: true,
    keepAlive: false,
    children: [
      {
        id: 1543,
        parentId: 1477,
        name: "预算管理",
        path: "/TTkolOperate/budget",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1542,
        parentId: 1477,
        name: "KOL管理",
        path: "/TTkolOperate/kol",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1544,
        parentId: 1477,
        name: "BD任务管理",
        path: "/TTkolOperate/bdtask",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1545,
        parentId: 1477,
        name: "财务管理",
        path: "/TTkolOperate/finance",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1546,
        parentId: 1477,
        name: "KOL发布管理",
        path: "/TTkolOperate/release",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1547,
        parentId: 1477,
        name: "KOL剧本库",
        path: "/TTkolOperate/play",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1548,
        parentId: 1477,
        name: "KOL信息",
        path: "/TTkolOperate/kolInfo",
        component: "@/pages/TTkolOperate/kolInfo/index",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1549,
        parentId: 1477,
        name: "KOL内容",
        path: "/TTkolOperate/kolContent",
        component: "@/pages/TTkolOperate/kolContent/index",
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1604,
        parentId: 1477,
        name: "投放管理",
        path: "/TTkolOperate/throwAdvertise",
        component: "@pages/TTkolOperate/throwAdvertise/index",
        icon: "drive-file",
        visible: true,
        keepAlive: false,
        children: null,
      },
    ],
  },
  {
    id: 1473,
    parentId: 1360,
    name: "素材库",
    path: "/material",
    component: null,
    icon: "#",
    visible: true,
    keepAlive: true,
    children: [
      {
        id: 1460,
        parentId: 1473,
        name: "剪辑专用",
        path: "/material/titokclip",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1461,
        parentId: 1473,
        name: "官方素材",
        path: "/material/official",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1520,
        parentId: 1473,
        name: "Tiktok优质素材库（素材）",
        path: "/drama/material/titok",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1522,
        parentId: 1473,
        name: "Tiktok优质KOL配音",
        path: "/drama/material/titokvoice",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1497,
        parentId: 1473,
        name: "Tiktok优质KOL配音",
        path: "drama/material/goodtiktok",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1521,
        parentId: 1473,
        name: "IG优质KOL配音",
        path: "/drama/material/igvoice",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1519,
        parentId: 1473,
        name: "IG优质素材库（素材）",
        path: "/drama/material/ig",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
      {
        id: 1472,
        parentId: 1473,
        name: "标签库",
        path: "/material/label",
        component: null,
        icon: "#",
        visible: true,
        keepAlive: true,
        children: null,
      },
    ],
  },
];

const frontTree = [
  {
    icon: "IconHome",
    path: "/home/dashboard",
    component: {
      key: null,
      ref: null,
      props: {
        fallback: {
          type: {},
          key: null,
          ref: null,
          props: {
            size: 30,
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            },
          },
          _owner: null,
          _store: {},
        },
        children: {
          type: {
            _payload: {
              _status: -1,
            },
          },
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
      },
      _owner: null,
      _store: {},
    },
    meta: {
      title: "仪表盘",
      auth: true,
    },
  },
  {
    icon: "IconDice",
    path: "/audit",
    component: {
      key: null,
      ref: null,
      props: {
        fallback: {
          type: {},
          key: null,
          ref: null,
          props: {
            size: 30,
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            },
          },
          _owner: null,
          _store: {},
        },
        children: {
          type: {
            _payload: {
              _status: -1,
            },
          },
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
      },
      _owner: null,
      _store: {},
    },
    meta: {
      title: "我的审核",
      auth: true,
    },
  },
  {
    path: "/edittask",
    icon: "IconDice",
    meta: {
      title: "TikTok剪辑任务",
      auth: true,
    },
    children: [
      {
        path: "/edittask/demand",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "主题库",
          auth: true,
        },
      },
      {
        path: "/edittask/plan",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "计划任务",
          auth: true,
        },
      },
      {
        path: "/edittask/editing",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "剪辑任务",
          auth: true,
        },
      },
      {
        path: "/edittask/video",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "视频成品库",
          auth: true,
        },
      },
      {
        path: "/edittask/skol",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "S级KOL内容",
          auth: true,
        },
      },
      {
        path: "/edittask/svoice",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "S级音频内容",
          auth: true,
        },
      },
      {
        path: "/edittask/desplay",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: 1,
                  _result: {},
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "国内剧本",
          auth: true,
        },
      },
    ],
  },
  {
    path: "/drama",
    icon: "IconDice",
    meta: {
      title: "剧本管理",
      auth: true,
    },
    children: [
      {
        path: "/drama/brandShot",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "品牌分镜库",
          auth: true,
        },
      },
      {
        path: "/drama/idlang",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "印尼语翻译",
          auth: true,
        },
      },
      {
        path: "/drama/playTemplateType",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "剧本分类配置",
          auth: true,
        },
      },
      {
        path: "/drama/playDraft",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "剧本模板草稿库",
          auth: true,
        },
      },
      {
        path: "/drama/playTemplate",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "剧本模板库",
          auth: true,
        },
      },
      {
        path: "/drama/label",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "标签库",
          auth: true,
        },
      },
    ],
  },
  {
    path: "/material",
    meta: {
      title: "素材库",
      auth: true,
    },
    children: [
      {
        path: "/material/official",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "官方素材库",
          auth: true,
        },
      },
      {
        path: "/material/label",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "标签库",
          auth: true,
        },
      },
    ],
  },
  {
    path: "/kol",
    icon: "IconCommon",
    meta: {
      title: "KOL库",
      auth: true,
    },
    children: [
      {
        path: "/kol/ttinfo",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "TTKOL信息库",
          auth: true,
        },
      },
      {
        path: "/kol/iginfo",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "IGKOL信息库",
          auth: true,
        },
      },
      {
        path: "/kol/ttcontent",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "TTKOL内容库",
          auth: true,
        },
      },
      {
        path: "/kol/igcontent",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "IGKOL内容库",
          auth: true,
        },
      },
    ],
  },
  {
    path: "/supply",
    icon: "IconBranch",
    meta: {
      title: "供应链",
      auth: true,
    },
    children: [
      {
        path: "/supply/goods",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "SKU库",
          auth: true,
        },
      },
    ],
  },
  {
    path: "/domestic",
    icon: "IconBranch",
    meta: {
      title: "国内剧本管理",
      auth: true,
    },
    children: [
      {
        path: "/domestic/add",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "新增国内剧本模板",
          auth: true,
        },
      },
      {
        path: "/domestic/list",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "国内剧本库",
          auth: true,
        },
      },
    ],
  },
  {
    path: "/TTkolOperate",
    icon: "IconBook",
    meta: {
      title: "TT KOL运营",
      auth: true,
    },
    children: [
      {
        path: "/TTkolOperate/budget",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "预算管理",
          auth: true,
        },
      },
      {
        path: "/TTkolOperate/kol",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "KOL管理",
          auth: true,
        },
      },
      {
        path: "/TTkolOperate/bdtask",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "BD任务管理",
          auth: true,
        },
      },
      {
        path: "/TTkolOperate/finance",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "财务管理",
          auth: true,
        },
      },
      {
        path: "/TTkolOperate/release",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "发布管理",
          auth: true,
        },
      },
      {
        path: "/TTkolOperate/kolInfo",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "KOL信息",
          auth: true,
        },
      },
      {
        path: "/TTkolOperate/kolContent",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "KOL内容",
          auth: true,
        },
      },
      {
        path: "/TTkolOperate/play",
        component: {
          key: null,
          ref: null,
          props: {
            fallback: {
              type: {},
              key: null,
              ref: null,
              props: {
                size: 30,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                },
              },
              _owner: null,
              _store: {},
            },
            children: {
              type: {
                _payload: {
                  _status: -1,
                },
              },
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
          },
          _owner: null,
          _store: {},
        },
        meta: {
          title: "KOL剧本库",
          auth: true,
        },
      },
    ],
  },
];

const convertsData = (frontTree, backEnd) => {
  const getTargetOnly = (arr, id) => {
    let target;
    const recurse = (arr, id) => {
      for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        if (cur.path === id) p{
          target = { ...cur };
          return;
        }
        if (cur.children) {
          recurse(cur.children ?? [], id);
        }
      }
    };
    recurse(arr, id);
    return target;
  };
  const recurseData = (tree) => {
    tree.forEach((cur) => {
      const ret = getTargetOnly(backEnd, cur.path);
      if (ret) {
        cur.meta.title = ret.name;
        cur.icon = ret.icon;
      }
      if (cur.children) {
        recurseData(cur.children);
      }
    });
  };
  recurseData(frontTree);
};

// convertsData(frontTree, backEnd);
// console.log("frontTree", frontTree);

const constructTree = (backEnd) => {
  const recurseData = (tree) => {
    tree.forEach((cur) => {
      if (cur.children) {
        recurseData(cur.children);
      }
    });
  };
  recurseData(backEnd);
};

const filterObject = (list) => {
  return list.reduce((acc, value) => {
    // const value = list[key];
    acc.push({
      meta: {
        auth: true,
        title: value.name,
      },
      path: value.path,
      icon: value.icon,
      component: value.component,
      children: value.children ? filterObject(value.children) : [],
    });
    return acc;
  }, []);
};

const ress = filterObject(JSON.parse(JSON.stringify(backEnd)));
console.log(ress);
