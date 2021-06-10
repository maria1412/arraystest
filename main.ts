input.onGesture(Gesture.LogoUp, function () {
    basic.showString("" + (animals[index]))
})
input.onGesture(Gesture.LogoDown, function () {
    basic.clearScreen()
    if (index < animals.length - 1) {
        index += 1
    } else {
        game.gameOver()
    }
})
let index = 0
let animals: string[] = []
animals = ["cat", "dog", "elephant", "bird", "bear", "giraffe"]
basic.showNumber(index + 1)
basic.showLeds(`
    . # # # .
    . # . # .
    . . . # .
    . . . . .
    . . # . .
    `)
basic.pause(1000)
basic.showString("" + (animals[index]))
basic.forever(function () {
	
})
