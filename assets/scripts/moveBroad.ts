
import { Component, EventMouse, Node, RigidBody2D, systemEvent, SystemEvent, Vec2, _decorator } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveBroad')
export class MoveBroad extends Component {

    @property({ type: Node })
    public ball: Node | null = null;

    // 鼠标初始位置
    private mousePositionX = 480;

    // 还没发射
    private notShoot = true;

    onLoad() {
        // 注册鼠标移动事件
        systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
        systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    onMouseMove(event: EventMouse) {
        this.mousePositionX = event.getUILocationX();
    }

    onMouseUp(event: EventMouse) {
        if (this.notShoot) {
            this.shoot();
        }
    }

    update() {
        // 节点坐标与鼠标坐标一致
        this.node.setWorldPosition(this.mousePositionX, this.node.getWorldPosition().y, 0);
        if (this.notShoot) {
            this.ball?.setWorldPosition(this.mousePositionX, this.ball.getWorldPosition().y, 0);
        }
    }

    shoot() {
        // 获取世界坐标系下的刚体质心
        let rigidBody = this.ball?.getComponent(RigidBody2D) as RigidBody2D;
        let center = new Vec2(10, 10);
        rigidBody.linearVelocity = center;
        this.notShoot = false;
    }

    start() {
        // [3]
    }

}
