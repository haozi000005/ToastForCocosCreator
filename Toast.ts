import { ToastObject } from "./ToastObject";

export class Duration {
    public static LONG_LARGE: number = 4;
    public static LONG: number = 2;
    public static SHORT: number = 1.2;
}
export enum Position {
    CENTER = 0,
    TOP = 1,
    TOP_LEFT = 2,
    LEFT = 3,
    BOTTOM_LEFT = 4,
    BOTTOM = 5,
    BOTTOM_RIGHT = 6,
    RIGHT = 7,
    TOP_RIGHT = 8
}

export class Toast {

    private static toastObj: ToastObject = null;

    private static makeText(text: string, duration?: number, pos?: Position): void {
        this.toastObj = new ToastObject(text, duration);
        this.toastObj.setPosition(pos, 0, 0);//可以自定义Toast的位置
        this.toastObj.show();
    }

    public static ShowText(text: string, duration?: number, pos?: Position): void {
        Toast.makeText(text, duration, pos);
    }
}
