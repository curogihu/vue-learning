new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false
	},

	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},

		attack: function() {
			this.monsterHealth -= this.getRandomDamage(10, 3);

			if(this.checkWin()) {
				return;
			}

			this.playerHealth -= this.getRandomDamage(12, 5);
			this.checkWin();
		},

		getRandomDamage: function(max, min) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},

		checkWin: function() {
			if(this.monsterHealth <= 0) {
				if(confirm('You won!  New Game?')) {
					this.startGame();

				}else {
					this.gameIsRunning = false;
				}

				return true;

			} else if (this.playerHealth <= 0) {
				if(confirm('You lost!  New Game?')) {
					this.startGame();

				}else {
					this.gameIsRunning = false;
				}

				return true;
			}

			return false;
		},

		specialAttack: function() {

		},

		heal: function() {

		},

		giveUp: function() {

		}
	}
});