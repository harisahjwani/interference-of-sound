let FREQUENCY = 0
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    FREQUENCY = 2000
    pins.digitalWritePin(DigitalPin.P0, FREQUENCY)
    music.ringTone(FREQUENCY)
    pins.digitalWritePin(DigitalPin.P1, FREQUENCY)
    music.ringTone(FREQUENCY)
})
