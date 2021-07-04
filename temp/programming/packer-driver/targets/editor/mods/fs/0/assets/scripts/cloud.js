System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Collider2D, Contact2DType, _dec, _class, _crd, ccclass, property, Cloud;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f652miVb9B/r+3UvxypgeG", "cloud", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Cloud", Cloud = (_dec = ccclass('Cloud'), _dec(_class = class Cloud extends Component {
        onLoad() {
          // 注册单个碰撞体的回调函数
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        } // 碰撞开始时回调


        onBeginContact(selfCollider, otherCollider, contact) {
          setTimeout(() => {
            var _selfCollider$body;

            (_selfCollider$body = selfCollider.body) === null || _selfCollider$body === void 0 ? void 0 : _selfCollider$body.node.destroy();
          });
        } // 碰撞结束时回调


        onEndContact(selfCollider, otherCollider, contact) {// console.dir(this.node);
        }

        start() {// [3]
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cloud.js.map