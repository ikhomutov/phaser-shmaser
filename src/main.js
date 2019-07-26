import Phaser from 'phaser'

let game
let gameOptions = {
  width: 720,
  height: 1280,
  debug: true,
}

window.onload = function() {
  game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'phaser-app',
    width: gameOptions.width,
    height: gameOptions.height,
    physics: {
      default: 'arcade',
      arcade: {
        debug: gameOptions.debug,
      }
    },
    scene: [ ]
  });
  window.focus();
}
