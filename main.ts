let min = 0
let max = 100
let guess = Math.round((min + max) / 2)
let pokusy = 1
basic.showNumber(guess)

while (true) {
    if (input.buttonIsPressed(Button.A)) {

        // Tvoje číslo je menší

        max = guess - 1
        guess = Math.round((min + max) / 2)
        pokusy += 1
        basic.showNumber(guess)

    } else if (input.buttonIsPressed(Button.B)) {

        // Tvoje číslo je větší

        min = guess + 1
        guess = Math.round((min + max) / 2)
        pokusy += 1
        basic.showNumber(guess)

    } else if (input.buttonIsPressed(Button.AB)) {

        // Uhodl jsem!

        basic.showString("Pokusy:")
        basic.showNumber(pokusy)
        break
    }
}
