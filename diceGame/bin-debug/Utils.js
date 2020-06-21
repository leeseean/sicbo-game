var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Utils = (function () {
    function Utils() {
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Utils.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Utils.drawRect = function (color, arr) {
        var shape = new egret.Shape();
        shape.graphics.beginFill(color);
        shape.graphics.drawRect(arr[0], arr[1], arr[2], arr[3]);
        shape.graphics.endFill();
        return shape;
    };
    Utils.drawRoundRect = function (color, arr) {
        var shape = new egret.Shape();
        shape.graphics.beginFill(color);
        shape.graphics.drawRoundRect(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
        shape.graphics.endFill();
        return shape;
    };
    Utils.toast = function (text, container) {
        var wrapper = new egret.DisplayObjectContainer();
        var shp = new egret.Shape();
        var panel = new egret.TextField();
        panel.text = text;
        // panel.textAlign = egret.HorizontalAlign.CENTER;
        // panel.verticalAlign = egret.VerticalAlign.MIDDLE;
        var paddingLeft = 10;
        var paddingUp = 20;
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
        egret.setTimeout(function () {
            container.removeChild(wrapper);
        }, container, 1000);
    };
    return Utils;
}());
__reflect(Utils.prototype, "Utils");
//# sourceMappingURL=Utils.js.map