scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(true, effects.starField)
})
scene.setBackgroundColor(12)
tiles.setTilemap(tilemap`level1`)
let beam = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . 5 . . . . . 5 . . . . 
    . . . . . . 5 . 5 . 5 . . . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . 5 . 5 . 5 . 5 . 5 . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . 5 . 5 . 5 . . . . . 
    . . . . . 5 . . . . . 5 . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
beam.setPosition(98, 3)
scene.cameraFollowSprite(beam)
controller.moveSprite(beam, 100, 100)
info.setLife(100)
info.setScore(10)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(-1)
    if (info.score() == 0) {
        game.over(false, effects.clouds)
    }
})
