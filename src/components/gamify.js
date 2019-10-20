import moment from "moment";

var Gamify = {
    on: false,

    // Countdown variables
    defaultTime: 30,
    timeLeft: 0,
    interval: undefined,

    run: function() {
        if(!this.on) return;

        // Setup

        // Run Timer

        // Check Score
    },

    startCountdown: function(allocatedTime, timestep) {
        if(!this.on) return;
        
        this.timeLeft = (allocatedTime || this.defaultTime) * 1000;
        var endTime = moment().add(this.timeLeft, 'milliseconds');

        this.interval = setInterval(function() {
            this.timeLeft = endTime.diff(moment(), "seconds", true);
            console.log(this.timeLeft);

            if(this.timeLeft <= 0) {
                clearInterval(this.interval);
                this.timeLeft = 0;
            }
        }.bind(this), timestep);
    }
};

export default Gamify;