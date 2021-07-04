
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


export type Props = {
    propsId: string,
    name: string,
    pic: string,
    effect: Effect
}

export type Effect = {
    effectId: string,
    name: string,
    pic: string,
    dic: string,
}

export class PropList {
    private static propList: { [key: string]: Props } = {};

    public static batchProp(...propsList: Props[]) {
        for (const props of propsList) {
            this.setProp(props);
        }
    }

    public static setProp(props: Props) {
        this.propList[props.propsId] = props;
    }

    public static getProp(propsId: string) {
        return this.propList[propsId];
    }
}

export function initProp() {
    let effect1 = {
        effectId: "1",
        name: "string",
        pic: "string",
        dic: "string",
    } as Effect

    let prop1 = {
        propsId: "1",
        name: "",
        pic: "",
        effect: effect1
    } as Props

    

    PropList.setProp(prop1);
}