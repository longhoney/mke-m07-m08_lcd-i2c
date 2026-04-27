basic.showIcon(IconNames.Sad)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    lcd.displayText("MakerEDU Product", 1, 1)
    lcd.displayText("LCD1602/LCD2004", 1, 2)
    basic.showString("0x27(39)")
})
