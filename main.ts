input.onButtonPressed(Button.A, function () {
    player1_score += 1
})
input.onButtonPressed(Button.B, function () {
    player2_score += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(" Player 1:")
    basic.showString("" + (player1_score))
    basic.showString(" Player 2:")
    basic.showString("" + (player1_score))
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let hand = 0
let player1_score = 0
player1_score = 0
let player2_score = 0
