System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CCInteger, Component, instantiate, Node, Prefab, UITransform, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, Active;

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
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0acc9jCGC9Nj4bxY6g6O0z/", "active", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Active", Active = (_dec = ccclass('Active'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: CCInteger
      }), _dec5 = property({
        type: CCInteger
      }), _dec6 = property({
        type: CCInteger
      }), _dec7 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Active, _Component);

        function Active() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "blockLayout", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "blockPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "totalNum", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "colNum", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spacingX", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spacingY", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Active.prototype;

        _proto.onLoad = function onLoad() {
          var _this$blockLayout, _this$blockLayout2;

          var layoutX = (_this$blockLayout = this.blockLayout) === null || _this$blockLayout === void 0 ? void 0 : _this$blockLayout.getPosition().x;
          var layoutY = (_this$blockLayout2 = this.blockLayout) === null || _this$blockLayout2 === void 0 ? void 0 : _this$blockLayout2.getPosition().y;

          if (this.blockPrefab && layoutX && layoutY) {
            // 计算该方块是第几行第几个，获得其坐标
            for (var i = 1, col = 0, row = 0; i <= this.totalNum; i++, col++) {
              var _this$blockLayout3;

              var block = instantiate(this.blockPrefab);

              if (i - row * this.colNum > this.colNum) {
                row += 1;
                col = 0;
              }

              block.setPosition(layoutX + col * (this.blockPrefab.data.getComponent(UITransform).width + this.spacingX), layoutY - row * (this.blockPrefab.data.getComponent(UITransform).height + this.spacingY));
              (_this$blockLayout3 = this.blockLayout) === null || _this$blockLayout3 === void 0 ? void 0 : _this$blockLayout3.addChild(block);
              console.log(layoutX + ", " + block.getPosition().x + ", " + col + ", " + row);
              console.dir(this.blockPrefab.data.getComponent(UITransform).width);
            }
          }
        };

        _proto.start = function start() {};

        return Active;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blockPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "totalNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 9;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "colNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spacingX", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spacingY", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=active.js.map