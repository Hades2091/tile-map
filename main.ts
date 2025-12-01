scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    Level_number += -1
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        f f f f f c d b 1 b d f f f f f 
        f 1 b 1 b 1 1 f c b 1 b 1 b 1 f 
        f b f b f c d f f d c f b f b f 
        f f f f b d 1 d d 1 1 b f f f f 
        . . . f b 1 . 1 1 . 1 b f . . . 
        . . f f c 1 1 d d 1 1 c c f . . 
        . . f b 1 d f f f f 1 d b f . . 
        . . f b d f f . . f f 1 b f . . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 1 . 1 1 . 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        f f f f f c d b 1 b d f f f f f 
        f 1 b 1 b 1 1 f c b 1 b 1 b 1 f 
        f b f b f c d f f d c f b f b f 
        f f f f b d 1 d d 1 1 b f f f f 
        . . . f b 1 . 1 1 . 1 b f . . . 
        . . f f c 1 1 d d 1 1 c c f . . 
        . . f b 1 d f f f f 1 d b f . . 
        . . f b d f f . . f f 1 b f . . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 1 . 1 1 . 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        f f f f f c d b 1 b d f f f f f 
        f 1 b 1 b 1 1 f c b 1 b 1 b 1 f 
        f b f b f c d f f d c f b f b f 
        f f f f b d 1 d d 1 1 b f f f f 
        . . . f b 1 . 1 1 . 1 b f . . . 
        . . f f c 1 1 d d 1 1 c c f . . 
        . . f b 1 d f f f f 1 d b f . . 
        . . f b d f f . . f f 1 b f . . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    Game_level(Level_number)
})
function Game_level (Level_number: number) {
    if (Level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
    } else if (Level_number == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
    } else if (Level_number == -1) {
        tiles.setCurrentTilemap(tilemap`level5`)
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    Level_number += 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        f f f f f c d b 1 b d f f f f f 
        f 1 b 1 b 1 1 f c b 1 b 1 b 1 f 
        f b f b f c d f f d c f b f b f 
        f f f f b d 1 d d 1 1 b f f f f 
        . . . f b 1 . 1 1 . 1 b f . . . 
        . . f f c 1 1 d d 1 1 c c f . . 
        . . f b 1 d f f f f 1 d b f . . 
        . . f b d f f . . f f 1 b f . . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 1 . 1 1 . 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        f f f f f c d b 1 b d f f f f f 
        f 1 b 1 b 1 1 f c b 1 b 1 b 1 f 
        f b f b f c d f f d c f b f b f 
        f f f f b d 1 d d 1 1 b f f f f 
        . . . f b 1 . 1 1 . 1 b f . . . 
        . . f f c 1 1 d d 1 1 c c f . . 
        . . f b 1 d f f f f 1 d b f . . 
        . . f b d f f . . f f 1 b f . . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 1 . 1 1 . 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        f f f f f c d b 1 b d f f f f f 
        f 1 b 1 b 1 1 f c b 1 b 1 b 1 f 
        f b f b f c d f f d c f b f b f 
        f f f f b d 1 d d 1 1 b f f f f 
        . . . f b 1 . 1 1 . 1 b f . . . 
        . . f f c 1 1 d d 1 1 c c f . . 
        . . f b 1 d f f f f 1 d b f . . 
        . . f b d f f . . f f 1 b f . . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    Game_level(Level_number)
})
let Level_number = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . f f 1 1 1 1 f f . . . . 
    . . . f b 1 1 1 1 1 1 b f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . f d d d 1 1 1 1 d d d f . . 
    . . f b d b f d d f b d b f . . 
    . . f c d c f 1 1 f c d c f . . 
    f f f f f c d b 1 b d f f f f f 
    f 1 b 1 b 1 1 f c b 1 b 1 b 1 f 
    f b f b f c d f f d c f b f b f 
    f f f f b d 1 d d 1 1 b f f f f 
    . . . f b 1 . 1 1 . 1 b f . . . 
    . . f f c 1 1 d d 1 1 c c f . . 
    . . f b 1 d f f f f 1 d b f . . 
    . . f b d f f . . f f 1 b f . . 
    . . f f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
Level_number = 1
Game_level(Level_number)
