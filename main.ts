basic.forever(function () {
    if (30 < input.temperature()) {
        music.playMelody("A C5 B C5 A B C5 B ", 120)
    } else if (input.temperature() < 15) {
        music.playMelody("C D C D C D C D ", 120)
    }
})
