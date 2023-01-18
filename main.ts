input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    basic.showString("9")
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(180)
    basic.showString("8")
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(0)
    basic.showString("0")
})
