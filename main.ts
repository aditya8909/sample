let mySprite = sprites.create(img`
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . 4 4 4 4 5 4 4 4 4 . . . . 
    . . 4 4 4 4 4 4 4 4 4 4 . . . . 
    . 4 4 4 4 4 4 4 4 4 4 . . . . . 
    . 4 4 4 4 4 4 4 4 . . . . . . . 
    . 4 4 4 4 4 4 4 . . . . . . . . 
    . 4 4 4 4 4 4 4 . . . . . . . . 
    . 4 4 4 4 4 4 4 4 . . . . . . . 
    . 4 4 4 4 4 4 4 4 4 . . . . . . 
    . 4 4 4 4 4 4 4 4 4 4 . . . . . 
    . . 4 4 4 4 4 4 4 4 4 . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
