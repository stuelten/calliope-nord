basic.showIcon(IconNames.Diamond, 600)
basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 1)
basic.showIcon(IconNames.Heart)
basic.showString("hi!")
basic.setLedColor(0x00ff00)
basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00, 1)
basic.forever(function () {
    basic.showCompass(10)
    if (input.compassHeading() > 350 || input.compassHeading() < 10) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00, 1)
    } else {
        if (input.compassHeading() > 170 && input.compassHeading() < 190) {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 1)
        } else {
            if (input.compassHeading() > 190) {
                basic.setLedColors(0xff0000, 0xff0000, 0x00ff00, 1)
            } else {
                basic.setLedColors(0x00ff00, 0xff0000, 0xff0000, 1)
            }
        }
    }
})
