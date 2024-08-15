// import Phaser from "phaser";

import { SpriteWithDynamicBody } from "../types";

class PlayScene extends Phaser.Scene {
  player: SpriteWithDynamicBody;

  get gameHeight() {
    return this.game.config.height as number;
  }

  constructor() {
    super("PlayScene");
  }

  create() {
    this.createEnviroment();
    this.createPlayer();
    this.registerPlayerControl();
  }

  createPlayer() {
    this.player = this.physics.add
      .sprite(0, this.gameHeight, "dino-idle")
      .setOrigin(0, 1);

    this.player
      .setGravityY(2500)
      .setCollideWorldBounds(true)
      .setBodySize(55, 90);
  }

  createEnviroment() {
    this.add.tileSprite(0, this.gameHeight, 88, 26, "ground").setOrigin(0, 1);
  }

  registerPlayerControl() {
    const spaceBar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    spaceBar.on("down", () => {
      this.player.setVelocityY(-900);
      console.log("pressing space");
    });
  }
}

export default PlayScene;
