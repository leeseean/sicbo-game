class Desk extends egret.DisplayObjectContainer {
    constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    private onAddToStage() {
        console.log(this.stage)
        this.drawDesk()
    }
    private drawDesk() {
        let desk = Utils.createBitmapByName('desktop_png');
        this.addChild(desk);
        desk.x = (this.stage.stageWidth - desk.width) / 2;
        desk.y = (this.stage.stageHeight - desk.height) / 2;
        //启用舞台的鼠标支持
        mouse.enable(this.stage);
        desk.touchEnabled = true;
        // desk.addEventListener(mouse.MouseEvent.ROLL_OVER, (e) => console.log(e), this);
        // desk.addEventListener(mouse.MouseEvent.MOUSE_MOVE, (e) => console.log(e), this);
        // desk.addEventListener(mouse.MouseEvent.ROLL_OUT, (e) => console.log(e), this);
        desk.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e) => console.log(e), this);
        desk.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => console.log(e), this);
        // desk.addEventListener(mouse.MouseEvent.MOUSE_OUT, (e) => console.log(e), this);
        const rect = Utils.drawRect(0x0000ff, [250, 240, 250, 150]);
        console.log(rect)
        const roundRect = Utils.drawRoundRect(0x0000ff, [400, 400, 100, 100, 20, 20]);
        this.addChild(rect);
        this.addChild(roundRect);
    }
}