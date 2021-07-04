System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, Node, RigidBody2D, systemEvent, SystemEvent, Vec2, _decorator, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MoveBroad;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      Node = _cc.Node;
      RigidBody2D = _cc.RigidBody2D;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Vec2 = _cc.Vec2;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b903e6NGvRGNZZvBWI2zYgn", "moveBroad", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MoveBroad", MoveBroad = (_dec = ccclass('MoveBroad'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class MoveBroad extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ball", _descriptor, this);

          _defineProperty(this, "mousePositionX", 480);

          _defineProperty(this, "notShoot", true);
        }

        onLoad() {
          // 注册鼠标移动事件
          systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        onMouseMove(event) {
          this.mousePositionX = event.getUILocationX();
        }

        onMouseUp(event) {
          if (this.notShoot) {
            this.shoot();
          }
        }

        update() {
          // 节点坐标与鼠标坐标一致
          this.node.setWorldPosition(this.mousePositionX, this.node.getWorldPosition().y, 0);

          if (this.notShoot) {
            var _this$ball;

            (_this$ball = this.ball) === null || _this$ball === void 0 ? void 0 : _this$ball.setWorldPosition(this.mousePositionX, this.ball.getWorldPosition().y, 0);
          }
        }

        shoot() {
          var _this$ball2;

          // 获取世界坐标系下的刚体质心
          let rigidBody = (_this$ball2 = this.ball) === null || _this$ball2 === void 0 ? void 0 : _this$ball2.getComponent(RigidBody2D);
          let center = new Vec2(10, 10);
          rigidBody.linearVelocity = center;
          this.notShoot = false;
        }

        start() {// [3]
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=moveBroad.js.map