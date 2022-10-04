input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            player.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            player.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            player.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            player.change(LedSpriteProperty.X, -1)
            basic.pause(100)
        }
    }
})
let player: game.LedSprite = null
player = game.createSprite(0, 0)
