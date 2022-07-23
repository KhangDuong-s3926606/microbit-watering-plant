def on_button_pressed_a():
    global MoistureReading
    MoistureReading = Math.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 0, 100)
    basic.show_number(Math.round(MoistureReading))
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global MoistureReading
    MoistureReading = Math.map(pins.digital_read_pin(DigitalPin.P1), 0, 1023, 0, 100)
input.on_button_pressed(Button.B, on_button_pressed_b)

MoistureReading = 0
pins.digital_write_pin(DigitalPin.P8, 0)

def on_forever():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(2000)
basic.forever(on_forever)

def on_forever2():
    global MoistureReading
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P8, 0)
    MoistureReading = Math.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 0, 100)
    if MoistureReading < 1:
        basic.show_leds("""
            # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        """)
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P8, 0)
    elif MoistureReading > 1 and MoistureReading <= 60:
        basic.show_leds("""
            # . . . #
                        # . . . #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P8, 0)
    else:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P8, 0)
basic.forever(on_forever2)
