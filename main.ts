input.onButtonPressed(Button.A, function () {
    cant0 += 1
    sumam0 = sumam0 + med0
    prom0 = sumam0 / cant0
    basic.pause(1000)
    cant1 += 1
    sumam1 = sumam1 + med1
    prom1 = sumam1 / cant1
    basic.pause(1000)
    cant2 += 1
    sumam2 = sumam2 + med2
    prom2 = sumam2 / cant2
    basic.showString("Count:" + cant0)
})
input.onButtonPressed(Button.AB, function () {
    promTotal = (prom0 + prom1 + prom2) / 3
    basic.showString("Pr.T:" + promTotal)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Pr.0:" + prom0)
    basic.pause(1000)
    basic.showString("Pr.1:" + prom1)
    basic.pause(1000)
    basic.showString("Pr.2:" + prom2)
    basic.pause(1000)
    basic.clearScreen()
})
let promTotal = 0
let prom2 = 0
let med2 = 0
let prom1 = 0
let med1 = 0
let prom0 = 0
let med0 = 0
let sumam2 = 0
let sumam1 = 0
let sumam0 = 0
let cant2 = 0
let cant1 = 0
let cant0 = 0
cant0 = 0
cant1 = 0
cant2 = 0
sumam0 = 0
sumam1 = 0
sumam2 = 0
basic.showString("pres. P0,P1,P2" + "." + "Luego, pres.A")
basic.forever(function () {
    med0 = pins.analogReadPin(AnalogPin.P0)
    med1 = pins.analogReadPin(AnalogPin.P1)
    med2 = pins.analogReadPin(AnalogPin.P2)
})
