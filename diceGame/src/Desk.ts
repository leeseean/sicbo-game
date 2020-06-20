class Desk extends egret.DisplayObjectContainer {
    constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    private onAddToStage() {
        console.log(this)
        this.drawDesk()
        this.drawChips()
        this.drawCup()
    }
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
        console.log(SicboConfig)
        for (let key in SicboConfig) {
            if (SicboConfig[key].length === 0) {
                continue;
            }
            const roundRect = Utils.drawRoundRect(0x0000ff, SicboConfig[key]);
            this.addChild(roundRect);
        }
    }
    private drawChips() {
        for (let key in ChipsConfig) {
            const config = ChipsConfig[key]
            const chip1 = Utils.createBitmapByName(`chips_json#${key}`);
            chip1.width = config[2];
            chip1.height = config[3];
            chip1.x = config[0];
            chip1.y = config[1];
            this.addChild(chip1);
        }
    }
    // 画盅
    private drawCup() {
        const container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        container.x = 895;
        container.y = 112;
        this.addChild(container);
        const cup = Utils.createBitmapByName('cup_json#diceCup');
        cup.width = 126;
        cup.height = 120;
        container.addChild(cup);
        const diceLeft = Utils.createBitmapByName('cup_json#dice1');
        diceLeft.width = 18;
        diceLeft.height = 18;
        diceLeft.x = 36;
        diceLeft.y = 45;
        const diceCenter = Utils.createBitmapByName('cup_json#dice2');
        diceCenter.width = 18;
        diceCenter.height = 18;
        diceCenter.x = 58;
        diceCenter.y = 45;
        const diceRight = Utils.createBitmapByName('cup_json#dice3');
        diceRight.width = 18;
        diceRight.height = 18;
        diceRight.x = 80;
        diceRight.y = 45;
        container.addChild(diceLeft);
        container.addChild(diceCenter);
        container.addChild(diceRight);
    }

}