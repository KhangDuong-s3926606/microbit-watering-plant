input.onButtonPressed(Button.A, function () {
    MoistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    basic.showNumber(Math.round(MoistureReading))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 4; index++) {
        led.plotBarGraph(
        0,
        5
        )
    }
})
input.onButtonPressed(Button.B, function () {
    MoistureReading = Math.map(pins.digitalReadPin(DigitalPin.P1), 0, 1023, 0, 100)
})
let MoistureReading = 0
pins.digitalWritePin(DigitalPin.P8, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(2000)
})
basic.forever(function () {
    MoistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    if (MoistureReading < 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (MoistureReading > 1 && MoistureReading <= 60) {
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
