new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},

	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},

		attack: function() {
			var damage = this.getRandomDamage(3, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage;
			});

			if(this.checkWin()) {
				return;
			}

			this.monsterAttacks();
		},

		getRandomDamage: function(min, max) {
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
			this.monsterHealth -= this.getRandomDamage(10, 20);

			if(this.checkWin()) {
				return;
			}

			this.monsterAttacks();
		},

		monsterAttacks: function() {
			var damage = this.getRandomDamage(5, 12);

			this.playerHealth -= damage;
			this.checkWin();

			this.turns.unshift({
				isPlayer: false,
				text: 'Player hits Monster for ' + damage;
			});
		},

		heal: function() {
			// not more than 100
			if(this.playerHealth <= 90) {
				this.playerHealth += 10
			}else {
				this.playerHealth = 100;
			}

			this.monsterAttacks();
		},

		giveUp: function() {
			this.gameIsRunning = false;
		}
	}
});