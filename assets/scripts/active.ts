
import { CCInteger, Component, instantiate, Node, Prefab, UITransform, _decorator } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Active')
export class Active extends Component {

    @property({ type: Node })
    public blockLayout: Node | null = null;

    @property({ type: Prefab })
    public blockPrefab: Prefab | null = null;

    @property({ type: CCInteger })
    public totalNum: number = 9;

    @property({type: CCInteger})
    public colNum: number = 5;

    @property({type: CCInteger})
    public spacingX: number = 5;

    @property({type: CCInteger})
    public spacingY: number = 5;

    onLoad() {
        let layoutX = this.blockLayout?.getPosition().x;
        let layoutY = this.blockLayout?.getPosition().y;

        if (this.blockPrefab && layoutX && layoutY) {
            // 计算该方块是第几行第几个，获得其坐标
            for (let i = 1, col = 0, row = 0; i <= this.totalNum; i++, col++) {
                let block = instantiate(this.blockPrefab);
                if (i - row * this.colNum > this.colNum) {
                    row += 1;
                    col = 0;
                }
                block.setPosition(
                    layoutX + col * (this.blockPrefab.data.getComponent(UITransform).width + this.spacingX), 
                    layoutY - row * (this.blockPrefab.data.getComponent(UITransform).height + this.spacingY));
                this.blockLayout?.addChild(block);
                console.log(`${layoutX}, ${block.getPosition().x}, ${col}, ${row}`);
                console.dir(this.blockPrefab.data.getComponent(UITransform).width);
            }
        }

    }

    start() {

    }

}


