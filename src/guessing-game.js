class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessX = Math.ceil((this.min + this.max) / 2);
        return this.guessX;
    }

    lower() {
        this.max = this.guessX;
    }

    greater() {
        this.min = this.guessX;
    }
}

module.exports = GuessingGame;
