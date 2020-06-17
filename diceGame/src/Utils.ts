class Utils {
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    static drawRect(color: number, arr: Array<number>): egret.Shape {
        const shape: egret.Shape = new egret.Shape();
        shape.graphics.beginFill(color);
        shape.graphics.drawRect(arr[0], arr[1], arr[2], arr[3]);
        shape.graphics.endFill();
        return shape;
    }

    static drawRoundRect(color: number, arr: Array<number>): egret.Shape {
        const shape: egret.Shape = new egret.Shape();
        shape.graphics.beginFill(color);
        shape.graphics.drawRoundRect(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
        shape.graphics.endFill();
        return shape;
    }
}