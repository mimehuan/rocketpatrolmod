let config = {
    type: Phaser.CANVAS,
    width: 700,
    height: 500,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;
// push second update for pages