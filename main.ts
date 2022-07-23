let MoistureReading = 0
input.onButtonPressed(Button.A, function () {
    MoistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    basic.showNumber(Math.round(MoistureReading))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    MoistureReading = Math.map(pins.digitalReadPin(DigitalPin.P1), 0, 1023, 0, 100)
})
basic.forever(function () {
    MoistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Math.round(MoistureReading))
    }
    if (MoistureReading < 30) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (MoistureReading > 30 && MoistureReading <= 60) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
