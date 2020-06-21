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

    static toast(text: string, container: egret.DisplayObjectContainer) {
        const wrapper: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        const shp: egret.Shape = new egret.Shape();
        const panel: egret.TextField = new egret.TextField();
        panel.text = text;
        // panel.textAlign = egret.HorizontalAlign.CENTER;
        // panel.verticalAlign = egret.VerticalAlign.MIDDLE;
        const paddingLeft = 10;
        const paddingUp = 20;
        wrapper.width = panel.width + paddingLeft * 2;
        wrapper.height = panel.height + paddingUp * 2;
        // 居中
        panel.x = paddingLeft;
        panel.y = paddingUp;
        shp.graphics.beginFill(0x00000);
        shp.graphics.drawRoundRect(0, 0, wrapper.width, wrapper.height, 20, 20);
        shp.graphics.endFill();
        wrapper.addChild(shp);
        wrapper.addChild(panel);
        wrapper.x = container.width / 2 - wrapper.width / 2;
        wrapper.y = container.height / 2 - wrapper.height / 2;
        wrapper.zIndex = 1000;
        container.addChild(wrapper);
        egret.setTimeout(() => {
            container.removeChild(wrapper);
        }, container, 1000);
    }
}