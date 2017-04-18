/*
-start
-pause
-change timer
*/

class Timer {
    constructor(){
        this.counter = 0;
    }

    start(callback) {
         this.timer = setInterval(callback, 1000)
         console.log("started")
    }

    stop() {
        clearInterval(this.timer)
        console.log("finished")
    }

    changeActiveTimer() {

    }
}

export default Timer;