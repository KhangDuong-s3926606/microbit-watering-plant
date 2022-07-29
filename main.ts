function manuallystop () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        `)
    index = 1
    while (index > 0) {
        index += 1
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showNumber(index)
        if (input.buttonIsPressed(Button.AB)) {
            basic.showLeds(`
                . # # . .
                . # # # .
                . # # # #
                . # # # .
                . # # . .
                `)
            index = 0
        }
    }
}
function Autowatering () {
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
        basic.pause(1000)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showNumber(Math.round(MoistureReading))
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    manuallywater()
})
function manuallywater () {
    basic.showIcon(IconNames.Yes)
    index = 1
    while (index > 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        index += 1
        basic.showNumber(index)
        if (input.buttonIsPressed(Button.AB)) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
            index = 0
        }
    }
}
input.onButtonPressed(Button.B, function () {
    manuallystop()
})
let MoistureReading = 0
let index = 0
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
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.pause(1000)
index = 0
basic.forever(function () {
    while (index == 0) {
        Autowatering()
    }
})
