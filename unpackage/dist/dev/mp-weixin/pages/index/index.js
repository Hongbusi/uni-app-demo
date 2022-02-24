"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  Test();
}
const Test = () => "../../components/test.js";
const _sfc_main = {
  setup(__props) {
    const counter = common_vendor.ref(0);
    const handleClick = () => {
      counter.value++;
    };
    common_vendor.onShow(() => {
      console.log("app launch");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(counter.value),
        b: common_vendor.o(handleClick),
        c: common_vendor.o(handleClick),
        d: common_vendor.p({
          counter: counter.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
