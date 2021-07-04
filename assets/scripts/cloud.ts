
import { _decorator, Component, Node, Collider2D, IPhysics2DContact, Contact2DType, PhysicsSystem2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Cloud')
export class Cloud extends Component {

    onLoad() {
        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }

    // 碰撞开始时回调
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        setTimeout(() => {
            selfCollider.body?.node.destroy();
        })
    }
    
    // 碰撞结束时回调
    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // console.dir(this.node);
        
    }

    start() {
        // [3]
    }

}

