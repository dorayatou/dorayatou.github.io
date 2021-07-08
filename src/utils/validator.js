// https://www.cnblogs.com/jsydb/p/12563225.html
Function.prototype.before = function(fn) {
  var _that = this; // 保留原函数的引用
  return function() {
    fn.apply(this, arguments) && _that.apply(this, arguments);
  }
}
var before = function(fn1, fn2) {
  return function() {
    fn1.apply(this, arguments) && fn2.apply(this, arguments);
  }
}
// 表单校验对象
var validator = (function(rules) {
  // // 定义校验规则
  // var rules = {
  //   isNotEmpty: function(val, errMsg) {
  //     if (!val.trim()) {
  //       return errMsg;
  //     }
  //   }
  // };
  // 需要校验的函数集合
  var caches = [];
  // 错误数量
  var errNum = 0;
  return {
    start: function() {

    },
    add: function() {

    },
    isCheckAll: function() {

    }
  };
})({
  isNotEmpty: function(val, errMsg) {
    if (!val.trim()) {
      return errMsg;
    }
  }
});

var postData = function() {
  console.log('发送数据给后台');
}

// 增强了postData函数的功能
// var formSubmit = before(validate, postData);
var formSubmit = postData.before(function() {
  validator.add(username, 'isNotEmpty', '用户名必填');
  validator.start();
  return validator.isCheckAll();
});
formSubmit();


function Chain(fn) {
  this.fn = fn;
  this.nextChain = null;
}
Chain.prototype.setNextChain = function(nextChain) {
  this.nextChain = nextChain;
}
Chain.prototype.next = function() {
  var ret = this.fn.apply(this, arguments);
  if (ret === 'next') {
    return this.nextChain && this.nextChain.next.apply(this.nextChain, arguments);
  }
  return ret;
}

Function.prototype.after = function (fn) {
  var _that = this;
  return function () {
      var ret = _that.apply(this, arguments);
      if (ret === 'next') {
          return fn.apply(this, arguments);
      }
      return ret;
  }
}
var start = fn1.after(fn2).after(fn3);
start(18);


Function.prototype.before = function (fn) {
  var _that = this; // 保存原函数的引用
  return function () {
      fn.apply(this, arguments) === 0 && _that.apply(this, arguments)
  }
}
Function.prototype.after = function (fn) {
  var _that = this;
  return function () {
      var ret = _that.apply(this, arguments);
      // 最坏原则，这次校验通过，假设后面有校验不会通过
      if (typeof ret === 'undefined') {
          return fn.apply(this, arguments);
      }
      // 如果这次校验不通过，那么停止校验，返回错误信息
      return ret;
  }
}

var validataor = (function (validataRules) {
  var caches = [];
  var errNum = 0;
  return {
      add: function (dom, rules, errShowDom) {
          var fnsArr = [];
          for (var i = 0, ruleObj; ruleObj = rules[i++];) {
              var ruleArr = ruleObj.rule.split(':');
              var rule = ruleArr.shift();
              ruleArr.unshift(dom);
              ruleArr.push(ruleObj.errMsg);
              fnsArr.push(validataRules[rule].bind(dom, ...ruleArr));
          }
          if (fnsArr.length) {
              var fn = fnsArr.shift();
              while (fnsArr.length) {
                  fn = fn.after(fnsArr.shift());
              }
              caches.push({
                  fn: fn,
                  container: errShowDom
              });
          }

      },
      start: function () {
          for (var i = 0, cacheObj; cacheObj = caches[i++];) {
              var msg = cacheObj.fn();
              cacheObj.container.innerHTML = msg || '';
              imsg && ++errNum;
          }
          caches = [];
          var num = errNum;
          errNum = 0;
          return num;
      }
  }
})({
  isNotEmpty: function (dom, errMsg) {
      if (!dom.value) {
          return errMsg;
      }
  },
  isPhone: function () {
      // 校验是否是手机号码
  },
  minlength: function (dom, length, errMsg) {
      if (dom.value.length < length) {
          return errMsg;
      }
  }
});

var postData = function () {
  console.log('发送数据给后台');
}
var fomrSubmit = postData.before(function () {
  validataor.add(username, [
    { rule: 'isNotEmpty', errMsg: '用户名必填' }
  ], usernameErrText);
  validataor.add(password, [
    { rule: 'isNotEmpty', errMsg: '密码必填' },
    { rule: 'minlength:10', errMsg: '密码长度必须大于等于10位' },
  ], passworErrText);
  return validataor.start();
});

submit.onclick = function (e) {
  e.preventDefault();
  fomrSubmit();
}
