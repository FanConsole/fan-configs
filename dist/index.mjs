const _ = {
  rules: [
    // margin
    [/^fan-m-([\.\d]+)$/, ([n, t]) => ({ margin: `${t}px` })],
    [/^fan-ml-([\.\d]+)$/, ([n, t]) => ({ "margin-left": `${t}px` })],
    [/^fan-mt-([\.\d]+)$/, ([n, t]) => ({ "margin-top": `${t}px` })],
    [/^fan-mr-([\.\d]+)$/, ([n, t]) => ({ "margin-right": `${t}px` })],
    [/^fan-mb-([\.\d]+)$/, ([n, t]) => ({ "margin-bottom": `${t}px` })],
    [/^fan-mx-([\.\d]+)$/, ([n, t]) => ({ "margin-left": `${t}px`, "margin-right": `${t}px` })],
    [/^fan-my-([\.\d]+)$/, ([n, t]) => ({ "margin-top": `${t}px`, "margin-bottom": `${t}px` })],
    [/^fan-m--([\.\d]+)$/, ([n, t]) => ({ margin: `-${t}px` })],
    [/^fan-ml--([\.\d]+)$/, ([n, t]) => ({ "margin-left": `-${t}px` })],
    [/^fan-mt--([\.\d]+)$/, ([n, t]) => ({ "margin-top": `-${t}px` })],
    [/^fan-mr--([\.\d]+)$/, ([n, t]) => ({ "margin-right": `-${t}px` })],
    [/^fan-mb--([\.\d]+)$/, ([n, t]) => ({ "margin-bottom": `-${t}px` })],
    [/^fan-mx--([\.\d]+)$/, ([n, t]) => ({ "margin-left": `-${t}px`, "margin-right": `-${t}px` })],
    [/^fan-my--([\.\d]+)$/, ([n, t]) => ({ "margin-top": `-${t}px`, "margin-bottom": `-${t}px` })],
    // padding
    [/^fan-p-([\.\d]+)$/, ([n, t]) => ({ padding: `${t}px` })],
    [/^fan-pl-([\.\d]+)$/, ([n, t]) => ({ "padding-left": `${t}px` })],
    [/^fan-pt-([\.\d]+)$/, ([n, t]) => ({ "padding-top": `${t}px` })],
    [/^fan-pr-([\.\d]+)$/, ([n, t]) => ({ "padding-right": `${t}px` })],
    [/^fan-pb-([\.\d]+)$/, ([n, t]) => ({ "padding-bottom": `${t}px` })],
    [/^fan-px-([\.\d]+)$/, ([n, t]) => ({ "padding-left": `${t}px`, "padding-right": `${t}px` })],
    [/^fan-py-([\.\d]+)$/, ([n, t]) => ({ "padding-top": `${t}px`, "padding-bottom": `${t}px` })],
    // width、height
    [/^fan-w-([\.\d]+)$/, ([n, t]) => ({ width: `${t}px` })],
    [/^fan-max-w-([\.\d]+)$/, ([n, t]) => ({ "max-width": `${t}px` })],
    [/^fan-min-w-([\.\d]+)$/, ([n, t]) => ({ "min-width": `${t}px` })],
    [/^fan-h-([\.\d]+)$/, ([n, t]) => ({ height: `${t}px` })],
    [/^fan-max-h-([\.\d]+)$/, ([n, t]) => ({ "max-height": `${t}px` })],
    [/^fan-min-h-([\.\d]+)$/, ([n, t]) => ({ "min-height": `${t}px` })],
    // 字大小
    [/^fan-t-([\.\d]+)$/, ([n, t]) => ({ "font-size": `${t}px` })],
    // 行高
    [/^fan-lh-([\.\d]+)$/, ([n, t]) => ({ "line-height": `${t}px` })],
    // 圆角
    [/^fan-rd-([\.\d]+)$/, ([n, t]) => ({ "border-radius": `${t}px` })],
    // 缩进
    [/^fan-indent-([\.\d]+)$/, ([n, t]) => ({ "text-indent": `${t}px` })]
  ]
}, f = {
  // rootValue:16,
  unitPrecision: 5,
  minPixelValue: 0,
  platform: "h5",
  designWidth: 375,
  deviceRatio: {
    375: 2 / 1,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  }
  // exclude: undefined
  // include: undefined
  // includeComponentJs: undefined
}, s = (n, t) => {
  const p = Math.pow(10, t + 1), e = Math.floor(n * p);
  return Math.round(e / 10) * 10 / p;
}, o = /<template>([\s\S]+)<\/template>/gi, g = /(\d+)px/g, m = /style:\s?\{[^{]*}/g, l = 100, h = 750;
let r, d;
const c = (n) => {
  const t = { ...f, ...n };
  switch (t.platform) {
    case "mp": {
      d = 1 / t.deviceRatio[t.designWidth], r = "rpx";
      break;
    }
    case "h5": {
      d = l * t.designWidth / h, r = "rem";
      break;
    }
    case "rn":
    case "px": {
      d = t.deviceRatio[t.designWidth] * 2, r = "px";
      break;
    }
  }
  const p = (e) => e.replace(g, (i, a) => {
    if (!a)
      return i;
    const $ = parseFloat(a);
    if ($ < t.minPixelValue)
      return i;
    const x = s($ / d, t.unitPrecision);
    return x === 0 ? "0" : x + r;
  });
  return {
    // 插件名称
    name: "inline-style-px-transform",
    // 构建阶段的通用钩子：在每个传入模块请求时被调用：在每个传入模块请求时被调用，主要是用来转换单个模块
    transform(e, i) {
      if ((/.vue$/.test(i) || t.include && t.include.test(i)) && (!t.exclude || !t.exclude.test(i)))
        if (o.test(e)) {
          const a = e.match(o)[0];
          a.includes("px") && (e = e.replace(a, p(a)));
        } else
          t.includeComponentJs && m.test(e) && (e = e.replace(m, (a) => p(a)));
      return { code: e };
    }
  };
};
export {
  _ as FanUnoConfig,
  c as VuePluginInlineStylePxTransform
};
