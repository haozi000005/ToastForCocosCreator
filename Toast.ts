import { ToastObject } from "./ToastObject";

export class Toast {
    public static LENGTH_LONG_LARGE: number = 4;
    public static LENGTH_LONG: number = 2;
    public static LENGTH_SHORT: number = 1.2;

    public static CENTER: number = 0;
    public static TOP: number = 1;
    public static TOP_LEFT: number = 2;
    public static LEFT: number = 3;
    public static BOTTOM_LEFT: number = 4;
    public static BOTTOM: number = 5;
    public static BOTTOM_RIGHT: number = 6;
    public static RIGHT: number = 7;
    public static TOP_RIGHT: number = 8;


    private static toastObj: ToastObject = null;

    static makeText(text: string, duration: any): void {        
        this.toastObj = new ToastObject(text, duration);
        // this.toastObj.setGravity(Toast.BOTTOM,0,0);//可以自定义Toast的位置
        this.toastObj.show();
    }
  
    public static ShowText(text: string, duration?: any): void {
        Toast.makeText(text, duration);
    }
}
