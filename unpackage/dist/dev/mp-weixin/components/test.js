"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    counter: Number
  },
  emits: ["test-event"],
  setup(__props, { emit }) {
    const handleClick = () => {
      console.log("click");
      emit("test-event");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.counter),
        b: common_vendor.o(handleClick)
      };
    };
  }
};
wx.createComponent(_sfc_main);
