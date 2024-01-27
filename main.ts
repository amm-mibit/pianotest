cokoinoTouchPiano.TP_ShowRGB(
cokoinoTouchPiano.TP_SetColor(RGB_COLOR.RED),
cokoinoTouchPiano.TP_SetColor(RGB_COLOR.RED),
cokoinoTouchPiano.TP_SetColor(RGB_COLOR.RED),
cokoinoTouchPiano.TP_SetColor(RGB_COLOR.RED)
)
basic.forever(function () {
    while (cokoinoTouchPiano.TP_Press(TP_PIANO.C)) {
        cokoinoTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Quarter))
    }
})
