var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Desk = (function (_super) {
    __extends(Desk, _super);
    function Desk() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Desk.prototype.onAddToStage = function () {
        console.log(this);
        this.drawDesk();
        this.drawChips();
        this.drawCup();
    };
    Desk.prototype.drawDesk = function () {
        var desk = Utils.createBitmapByName('desktop_png');
        this.addChild(desk);
        desk.x = (this.stage.stageWidth - desk.width) / 2;
        desk.y = (this.stage.stageHeight - desk.height) / 2;
        //启用舞台的鼠标支持
        mouse.enable(this.stage);
        desk.touchEnabled = true;
        // desk.addEventListener(mouse.MouseEvent.ROLL_OVER, (e) => console.log(e), this);
        // desk.addEventListener(mouse.MouseEvent.MOUSE_MOVE, (e) => console.log(e), this);
        // desk.addEventListener(mouse.MouseEvent.ROLL_OUT, (e) => console.log(e), this);
        // desk.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e) => console.log(e), this);
        // desk.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => console.log(e), this);
        // desk.addEventListener(mouse.MouseEvent.MOUSE_OUT, (e) => console.log(e), this);
        console.log(SicboConfig);
        for (var key in SicboConfig) {
            if (SicboConfig[key].length === 0) {
                continue;
            }
            var roundRect = Utils.drawRoundRect(0x0000ff, SicboConfig[key]);
            this.addChild(roundRect);
        }
    };
    Desk.prototype.drawChips = function () {
        for (var key in ChipsConfig) {
            var config = ChipsConfig[key];
            var chip1 = Utils.createBitmapByName("chips_json#" + key);
            chip1.width = config[2];
            chip1.height = config[3];
            chip1.x = config[0];
            chip1.y = config[1];
            this.addChild(chip1);
        }
    };
    // 画盅
    Desk.prototype.drawCup = function () {
        var container = new egret.DisplayObjectContainer();
        container.x = CupConfig.container.x;
        container.y = CupConfig.container.y;
        this.addChild(container);
        var cup = Utils.createBitmapByName('cup_json#diceCup');
        cup.width = CupConfig.cup.width;
        cup.height = CupConfig.cup.height;
        container.addChild(cup);
        var diceLeft = Utils.createBitmapByName('cup_json#dice1');
        diceLeft.width = CupConfig.diceLeft.width;
        diceLeft.height = CupConfig.diceLeft.height;
        diceLeft.x = CupConfig.diceLeft.x;
        diceLeft.y = CupConfig.diceLeft.y;
        var diceCenter = Utils.createBitmapByName('cup_json#dice2');
        diceCenter.width = CupConfig.diceCenter.width;
        diceCenter.height = CupConfig.diceCenter.height;
        diceCenter.x = CupConfig.diceCenter.x;
        diceCenter.y = CupConfig.diceCenter.y;
        var diceRight = Utils.createBitmapByName('cup_json#dice3');
        diceRight.width = CupConfig.diceRight.width;
        diceRight.height = CupConfig.diceRight.height;
        diceRight.x = CupConfig.diceRight.x;
        diceRight.y = CupConfig.diceRight.y;
        container.addChild(diceLeft);
        container.addChild(diceCenter);
        container.addChild(diceRight);
    };
    return Desk;
}(egret.DisplayObjectContainer));
__reflect(Desk.prototype, "Desk");
//# sourceMappingURL=Desk.js.map