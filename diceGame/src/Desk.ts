class Desk extends egret.DisplayObjectContainer {
    constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    private onAddToStage() {
        this.drawDesk()
        this.drawChips()
        this.drawCup()
    }
    // 画桌面
    private drawDesk() {
        const desk = Utils.createBitmapByName('desktop_png');
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
        for (let key in SicboConfig) {
            if (SicboConfig[key].length === 0) {
                continue;
            }
            const roundRect = Utils.drawRoundRect(0x000000, SicboConfig[key]);
            roundRect.alpha = 0;
            roundRect.touchEnabled = true;
            this.addChild(roundRect);
            roundRect.addEventListener(egret.TouchEvent.TOUCH_TAP, (event) => {
                if (!GlobalData.activeChipKey) {
                    Utils.toast('请点击底部选择一个筹码', this);
                } else {
                    // 飞出筹码
                    const chip = Utils.createBitmapByName(`chips_json#${GlobalData.activeChipKey.slice(0, -1)}`);
                    const config = ChipsConfig[GlobalData.activeChipKey];
                    chip.width = config[2];
                    chip.height = config[3];
                    chip.x = config[0];
                    chip.y = config[1];
                    const point: egret.Point = this.globalToLocal(event.stageX, event.stageY);
                    this.addChild(chip);
                    egret.Tween.get(chip).to({
                        x: SicboConfig[key][0] + (SicboConfig[key][2] - chip.width) / 2,
                        y: SicboConfig[key][1] + (SicboConfig[key][3] - chip.height) / 2,
                    }, 360).call(() => { });
                }
            }, this);
        }
    }
    // 画底部飞盘
    private drawChips() {
        const yPlus = -20;
        let yPlusedChip;
        for (let key in ChipsConfig) {
            const config = ChipsConfig[key]
            const chip = Utils.createBitmapByName(`chips_json#${key}`);
            chip.width = config[2];
            chip.height = config[3];
            chip.x = config[0];
            chip.y = config[1];
            chip.touchEnabled = true;
            this.addChild(chip);
            chip.addEventListener(egret.TouchEvent.TOUCH_TAP, (event) => {
                if (yPlusedChip !== chip) {
                    chip.y = chip.y + yPlus;
                    chip.texture = RES.getRes(`chips_json#${key.slice(0, -1)}`);
                    if (yPlusedChip) {
                        yPlusedChip.y = yPlusedChip.y - yPlus;
                        yPlusedChip.texture = RES.getRes(`chips_json#${GlobalData.activeChipKey}`);
                    }
                    yPlusedChip = chip
                    GlobalData.activeChipKey = key
                }
            }, this);
        }
    }
    // 画盅
    private drawCup() {
        const container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        container.x = CupConfig.container.x;
        container.y = CupConfig.container.y;
        this.addChild(container);
        const cup = Utils.createBitmapByName('cup_json#diceCup');
        cup.width = CupConfig.cup.width;
        cup.height = CupConfig.cup.height;
        container.addChild(cup);
        const diceLeft = Utils.createBitmapByName('cup_json#dice1');
        diceLeft.width = CupConfig.diceLeft.width;
        diceLeft.height = CupConfig.diceLeft.height;
        diceLeft.x = CupConfig.diceLeft.x;
        diceLeft.y = CupConfig.diceLeft.y;
        const diceCenter = Utils.createBitmapByName('cup_json#dice2');
        diceCenter.width = CupConfig.diceCenter.width;
        diceCenter.height = CupConfig.diceCenter.height;
        diceCenter.x = CupConfig.diceCenter.x;
        diceCenter.y = CupConfig.diceCenter.y;
        const diceRight = Utils.createBitmapByName('cup_json#dice3');
        diceRight.width = CupConfig.diceRight.width;
        diceRight.height = CupConfig.diceRight.height;
        diceRight.x = CupConfig.diceRight.x;
        diceRight.y = CupConfig.diceRight.y;
        container.addChild(diceLeft);
        container.addChild(diceCenter);
        container.addChild(diceRight);
    }

}