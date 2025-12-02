input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
basic.forever(function () {
	
})
