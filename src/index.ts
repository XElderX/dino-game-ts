import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";

export const PRELOAD_CONFIG = {
  cactusesCount: 6
}
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1000,
  height: 340,
  pixelArt: true,
  transparent: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
    // arcade: {
    //   gravity: { y: 200 }
    // }
  },
  scene: [PreloadScene, PlayScene],
};

new Phaser.Game(config);
