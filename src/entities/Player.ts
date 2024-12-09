export class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "dino-idle");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.init();
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  init() {
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.setOrigin(0, 1)
      .setGravityY(5000)
      .setCollideWorldBounds(true)
      .setBodySize(55, 90);

    this.registerAnimations();

    // this.registerPlayerControl();
  }

  update() {
    const { space } = this.cursors;
    const isSpaceJustDown = Phaser.Input.Keyboard.JustDown(space);

    const onFloor = (this.body as Phaser.Physics.Arcade.Body).onFloor();
    console.log(onFloor);
    if (isSpaceJustDown && onFloor) {
      this.setVelocityY(-1600);
    }
  }

  //   registerPlayerControl() {
  //     const spaceBar = this.scene.input.keyboard.addKey(
  //       Phaser.Input.Keyboard.KeyCodes.SPACE
  //     );
  //     spaceBar.on("down", () => {
  //       this.setVelocityY(-900);
  //       console.log("pressing space");
  //     });
  //   }
  playRunAnimation() {
    this.play("dino-run-anim", true);
  }

  registerAnimations() {
    this.anims.create({
      key: "dino-run-anim",
      frames: this.anims.generateFrameNames("dino-run", {start: 2, end: 3}),
      frameRate: 10,
      repeat: -1
    });
  }
}
