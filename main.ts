namespace SpriteKind {
    export const Text = SpriteKind.create()
    export const Obj = SpriteKind.create()
    export const HazzardSpike = SpriteKind.create()
    export const Boosterpad = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`High gravity`, function (sprite, location) {
    platformer.setGravity(1000)
    platformer.setConstantDefault(platformer.PlatformerConstant.MaxJumpHeight, 10)
})
function Boostpad () {
    platformer.jump(Cube)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spike`, function (sprite, location) {
    if (Current_level == 17 || (Current_level == 13 || Current_level == 15)) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(1, 14))
    } else {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Boost`, function (sprite, location) {
    if (controller.A.isPressed() || controller.up.isPressed()) {
        Boostpad()
    }
})
function Start_Game () {
    platformer.setConstantDefault(platformer.PlatformerConstant.MaxJumpHeight, 45)
    Current_level = 1
    Cube = platformer.create(assets.image`Player`, SpriteKind.Player)
    Portal = sprites.create(assets.image`Portal`, SpriteKind.Obj)
    scene.setBackgroundColor(1)
    scene.cameraFollowSprite(Cube)
    tiles.setCurrentTilemap(tilemap`level1`)
    platformer.moveSprite(Cube, true, 80)
    platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnAPressed, true)
    platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnUpPressed, true)
    platformer.setFeatureEnabled(platformer.PlatformerFeatures.MovementMomentum, true)
    platformer.setFeatureEnabled(platformer.PlatformerFeatures.WallJumps, true)
    platformer.setGravity(500)
    tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`SmallSpike`, function (sprite, location) {
    if (Current_level == 13) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(1, 14))
    } else {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Upsidedownspike`, function (sprite, location) {
    if (Current_level == 13 || Current_level == 15) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(1, 14))
    } else {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
    }
})
function Level () {
    platformer.setGravity(500)
    platformer.setConstantDefault(platformer.PlatformerConstant.MaxJumpHeight, 45)
    if (Current_level == 2) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 3) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 4) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 5) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 6) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 7) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 8) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level10`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 9) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level12`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 10) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 11) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level15`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 12) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level19`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 13) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(1, 14))
        tiles.setCurrentTilemap(tilemap`level17`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 14) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level21`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 15) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(1, 14))
        tiles.setCurrentTilemap(tilemap`level23`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 16) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level25`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 17) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(1, 14))
        tiles.setCurrentTilemap(tilemap`level27`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 18) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level29`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 19) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level31`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    } else if (Current_level == 20) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
        tiles.setCurrentTilemap(tilemap`level33`)
        tiles.placeOnRandomTile(Portal, assets.tile`Portal hitbox`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Block`, function (sprite, location) {
    if (Current_level == 17 || (Current_level == 13 || Current_level == 15)) {
        tiles.placeOnTile(Cube, tiles.getTileLocation(1, 14))
    } else {
        tiles.placeOnTile(Cube, tiles.getTileLocation(0, 6))
    }
})
function Portal_Overlap () {
    Current_level += 1
    Level()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obj, function (sprite, otherSprite) {
    Portal_Overlap()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Uqual gravity`, function (sprite, location) {
    platformer.setGravity(500)
    platformer.setConstantDefault(platformer.PlatformerConstant.MaxJumpHeight, 45)
})
let Portal: Sprite = null
let Current_level = 0
let Cube: Sprite = null
Start_Game()
