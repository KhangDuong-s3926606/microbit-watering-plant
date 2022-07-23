input.onButtonPressed(Button.A, function () {
    MoistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    basic.showNumber(Math.round(MoistureReading))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showString("NEO")
    MoistureReading = Math.map(pins.digitalReadPin(DigitalPin.P1), 0, 1023, 0, 100)
})
let MoistureReading = 0
basic.showString("NEO")
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # #
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.pause(2000)
basic.forever(function () {
    MoistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    led.plotBarGraph(
    MoistureReading,
    100
    )
    if (MoistureReading < 30) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showNumber(Math.round(MoistureReading))
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(2000)
    } else if (MoistureReading > 30 && MoistureReading <= 60) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showNumber(Math.round(MoistureReading))
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(2000)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showNumber(Math.round(MoistureReading))
        basic.pause(2000)
    }
})
