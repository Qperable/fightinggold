System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, Node, RigidBody2D, systemEvent, SystemEvent, Vec2, _decorator, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MoveBroad;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MoveBroad", MoveBroad = (_dec = ccclass('MoveBroad'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MoveBroad, _Component);

        function MoveBroad() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "ball", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "mousePositionX", 480);

          _defineProperty(_assertThisInitialized(_this), "notShoot", true);

          return _this;
        }

        var _proto = MoveBroad.prototype;

        _proto.onLoad = function onLoad() {
          // 注册鼠标移动事件
          systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
        };

        _proto.onMouseMove = function onMouseMove(event) {
          this.mousePositionX = event.getUILocationX();
        };

        _proto.onMouseUp = function onMouseUp(event) {
          if (this.notShoot) {
            this.shoot();
          }
        };

        _proto.update = function update() {
          // 节点坐标与鼠标坐标一致
          this.node.setWorldPosition(this.mousePositionX, this.node.getWorldPosition().y, 0);

          if (this.notShoot) {
            var _this$ball;

            (_this$ball = this.ball) === null || _this$ball === void 0 ? void 0 : _this$ball.setWorldPosition(this.mousePositionX, this.ball.getWorldPosition().y, 0);
          }
        };

        _proto.shoot = function shoot() {
          var _this$ball2;

          // 获取世界坐标系下的刚体质心
          var rigidBody = (_this$ball2 = this.ball) === null || _this$ball2 === void 0 ? void 0 : _this$ball2.getComponent(RigidBody2D);
          var center = new Vec2(10, 10);
          rigidBody.linearVelocity = center;
          this.notShoot = false;
        };

        _proto.start = function start() {// [3]
        };

        return MoveBroad;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=moveBroad.js.map