class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/button.wav');
        this.load.audio('sfx_explosion', './assets/duck_quack.wav');
        this.load.audio('sfx_rocket', './assets/gun_shot.mp3');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Segoe UI',
            fontSize: '32px',
            backgroundColor: '#EEDC82',
            color: '#234625',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'DUCK PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/1.9, game.config.height/2, 'Use ←→ arrows to move & (F) to fire gun', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#C4B454';
        menuConfig.color = '#5F5636';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press (E) for Easy or (H) for Hard', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 3.4,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 4.3,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
}