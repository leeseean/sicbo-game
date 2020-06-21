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
        this.drawDesk();
        this.drawChips();
        this.drawCup();
    };
    // 画桌面
    Desk.prototype.drawDesk = function () {
        var _this = this;
        var desk = Utils.createBitmapByName('desktop_png');
        this.addChild(desk);
        desk.x = (this.stage.stageWidth - desk.width) / 2;
        desk.y = (this.stage.stageHeight - desk.height) / 2;
        //启用舞台的鼠标支持
        mouse.enable(this.stage);
        desk.touchEnabled = true;
        var _loop_1 = function (key) {
            if (SicboConfig[key].length === 0) {
                return "continue";
            }
            var roundRect = Utils.drawRoundRect(0x000000, SicboConfig[key]);
            roundRect.alpha = 0;
            roundRect.touchEnabled = true;
            this_1.addChild(roundRect);
            roundRect.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
                if (!GlobalData.activeChipKey) {
                    Utils.toast('请点击底部选择一个筹码', _this);
                }
                else {
                    // 飞出筹码
                    var chip = Utils.createBitmapByName("chips_json#" + GlobalData.activeChipKey.slice(0, -1));
                    var config = ChipsConfig[GlobalData.activeChipKey];
                    chip.width = config[2];
                    chip.height = config[3];
                    chip.x = config[0];
                    chip.y = config[1];
                    var point = _this.globalToLocal(event.stageX, event.stageY);
                    _this.addChild(chip);
                    egret.Tween.get(chip).to({
                        x: SicboConfig[key][0] + (SicboConfig[key][2] - chip.width) / 2,
                        y: SicboConfig[key][1] + (SicboConfig[key][3] - chip.height) / 2,
                    }, 360).call(function () { });
                }
            }, this_1);
        };
        var this_1 = this;
        // desk.addEventListener(mouse.MouseEvent.ROLL_OVER, (e) => console.log(e), this);
        // desk.addEventListener(mouse.MouseEvent.MOUSE_MOVE, (e) => console.log(e), this);
        // desk.addEventListener(mouse.MouseEvent.ROLL_OUT, (e) => console.log(e), this);
        // desk.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e) => console.log(e), this);
        // desk.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => console.log(e), this);
        // desk.addEventListener(mouse.MouseEvent.MOUSE_OUT, (e) => console.log(e), this);
        for (var key in SicboConfig) {
            _loop_1(key);
        }
    };
    // 画底部飞盘
    Desk.prototype.drawChips = function () {
        var yPlus = -20;
        var yPlusedChip;
        var _loop_2 = function (key) {
            var config = ChipsConfig[key];
            var chip = Utils.createBitmapByName("chips_json#" + key);
            chip.width = config[2];
            chip.height = config[3];
            chip.x = config[0];
            chip.y = config[1];
            chip.touchEnabled = true;
            this_2.addChild(chip);
            chip.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
                if (yPlusedChip !== chip) {
                    chip.y = chip.y + yPlus;
                    chip.texture = RES.getRes("chips_json#" + key.slice(0, -1));
                    if (yPlusedChip) {
                        yPlusedChip.y = yPlusedChip.y - yPlus;
                        yPlusedChip.texture = RES.getRes("chips_json#" + GlobalData.activeChipKey);
                    }
                    yPlusedChip = chip;
                    GlobalData.activeChipKey = key;
                }
            }, this_2);
        };
        var this_2 = this;
        for (var key in ChipsConfig) {
            _loop_2(key);
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