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
let detectedSince: number = 0

// make the servo a heading of 80 degrees during startup
robotbit.Servo(servoNumber8, 80)

// runs forever
while (true) {

    // get the distance using the sonar
    distance = sonar.ping(
        DigitalPin.P14, // trigger
        DigitalPin.P15, // echo
        PingUnit.Centimeters,
    )

    // if the distance is <= 12 open the trash can lid and wait for 3.5 seconds. else close the trash can lid
    if (distance > 0 && distance <= 12) {

        // assigns the time the object was detected to the variable "detectedSince"
        if (detectedSince == 0) {
            detectedSince = input.runningTime()
        }

        // open the trash can lid ONLY if the hand has been there for at least 200ms. 
        // this is to stop the servo from randomly opening when the distance sensor gets random spikes making it detect false data.
        if (input.runningTime() - detectedSince >= 200) {
            robotbit.Servo(servoNumber8, -5)
            basic.pause(3500)
        }
    } else {

        // reset the timer and close the lid
        detectedSince = 0
        robotbit.Servo(servoNumber8, 80)
    }
}

/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden and Josiah
 * Created on: Jun 2026
 * This program automatically opens a trash can when something gets close to it. and closes it back when the object moves away
*/

/*
// show happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
const servoNumber8 = robotbit.Servos.S1
let distance: number = null
let detectedSince: number = 0

// make the servo a heading of 80 degrees during startup
robotbit.Servo(servoNumber8, 80)

// runs forever
while (true) {

    // get the distance using the sonar
    distance = sonar.ping(
        DigitalPin.P14, // trigger
        DigitalPin.P15, // echo
        PingUnit.Centimeters,
    )

    // if the distance is <= 12 open the trash can lid and wait for 3.5 seconds. else close the trash can lid
    if (distance > 0 && distance <= 12) {

        // assigns the time the object was detected to the variable "detectedSince"
        if (detectedSince == 0) {
            detectedSince = input.runningTime()
        }

        // open the trash can lid ONLY if the hand has been there for at least 200ms. 
        // this is to stop the servo from randomly opening when the distance sensor gets random spikes making it detect false data.
        if (input.runningTime() - detectedSince >= 200) {
            robotbit.Servo(servoNumber8, -5)
            basic.pause(3500)

            // make the lid close slowly instead of slamming shut
            for (let angle = -5; angle <= 80; angle++) {
                robotbit.Servo(servoNumber8, angle)
                basic.pause(10)
            }
        }
    } else {

        // reset the timer and close the lid
        detectedSince = 0
        robotbit.Servo(servoNumber8, 80)
    }
}

*/