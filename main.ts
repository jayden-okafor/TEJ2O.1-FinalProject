/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

// variables
const servoNumber8 = robotbit.Servos.S1

// show happy face
basic.showIcon(IconNames.Happy)

// when button "A" is clicked
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    robotbit.Servo(servoNumber8, 170)
    basic.showIcon(IconNames.Happy)
})
