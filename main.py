basic.show_icon(IconNames.SAD)
basic.pause(500)
basic.clear_screen()

def on_forever():
    basic.show_string("0x27(39)")
    lcd.display_text("MakerEDU", 1, 1)
basic.forever(on_forever)
