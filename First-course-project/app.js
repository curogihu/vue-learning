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

			if(this.monsterHealth <= 0) {
				alert('You won!');
				this.gameIsRunning = false;
			}

			this.playerHealth -= this.getRandomDamage(12, 5);

			if(this.playerHealth <= 0) {
				alert('You lost!');
				this.gameIsRunning = false;
			}
		},

		getRandomDamage: function(max, min) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},

		specialAttack: function() {

		},

		heal: function() {

		},

		giveUp: function() {

		}
	}
});