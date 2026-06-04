/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden and Josiah
 * Created on: Jun 2026
 * This program automatically opens a trash can when something gets close to it. and closes it back when the object moves away
*/

// show happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
const servoNumber8 = robotbit.Servos.S1

/*
while (true) {

    // get the distance using the sonar
    const distance = sonar.ping(
        DigitalPin.P1, // trigger
        DigitalPin.P2, // echo
        PingUnit.Centimeters,
    )

    if (distance > 0 && distance <= 10) {
        robotbit.Servo(servoNumber8, 118)
        basic.pause(3500)
    } else {
        robotbit.Servo(servoNumber8, 180)
    }
}
*/

input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber8, 118)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber8, 180)
    basic.showIcon(IconNames.Happy)
})

// dead center == 118 degreees
// left == 180 degrees