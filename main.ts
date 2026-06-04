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
let distance: number = null

// make the servo a heading of 80 degrees during startup
robotbit.Servo(servoNumber8, 80)

// runs forever
while (true) {

    // get the distance using the sonar
    const distance = sonar.ping(
        DigitalPin.P14, // trigger
        DigitalPin.P15, // echo
        PingUnit.Centimeters,
    )

    // if the distance is <= 10 open the trash can lid and wait for 3.5 seconds else close the trash can lid
    if (distance > 0 && distance <= 7) {
        robotbit.Servo(servoNumber8, -5)
        basic.pause(3500)
    } else {
        robotbit.Servo(servoNumber8, 80)
    }
}
