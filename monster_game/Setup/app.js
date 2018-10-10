new Vue({
	el: '#app',
	data: {
		gameStarted: false,
		gameEnded: true,
		userHealth: 100,
		monsterHealth: 100,
		bgColorUser: 'green',
		bgColorMonster: 'green',
		rounds: []
	},
	computed: {
		userStyle: function() {
			return {
				backgroundColor: this.bgColorUser,
				width: this.userHealth + '%',
				margin: 0,
				color: 'white'
			}
		},
		monsterStyle: function() {
			return {
				backgroundColor: this.bgColorMonster,
				width: this.monsterHealth + '%',
				margin: 0,
				color: 'white'
			}
		}
	},
	watch: {
		userHealth: function() {
			if (this.userHealth > 65) {
				this.bgColorUser = 'green'
			}
			if (this.userHealth <= 65) {
				this.bgColorUser = 'orange'
			}
			if (this.userHealth <= 35) {
				this.bgColorUser = 'red'
			}
			if (this.userHealth <= 0 && this.gameEnded == false) {
				this.userHealth = 0
				this.bgColorUser = 'black'
				this.gameEnded = true
				let that = this
				setTimeout(() => {
					if (
						confirm('The monster killed you! Would you like to play again?')
					) {
						that.newGame()
					} else {
						that.gameStarted = false
					}
				}, 300)
			}
		},
		monsterHealth: function() {
			if (this.monsterHealth > 65) {
				this.bgColorMonster = 'green'
			}
			if (this.monsterHealth <= 65) {
				this.bgColorMonster = 'orange'
			}
			if (this.monsterHealth <= 35) {
				this.bgColorMonster = 'red'
			}
			if (this.monsterHealth <= 0 && this.gameEnded == false) {
				console.log('WE ARE IN')
				this.monsterHealth = 0
				this.bgColorMonster = 'black'
				this.gameEnded = true
				let that = this
				setTimeout(() => {
					if (
						confirm('You killed this monster! Would you like to play again?')
					) {
						that.newGame()
					} else {
						that.gameStarted = false
					}
				}, 300)
			}
		}
	},
	methods: {
		newGame: function() {
			this.userHealth = 100
			this.monsterHealth = 100
			this.gameEnded = false
			this.gameStarted = true
			this.rounds = []
		},
		giveUp: function() {
			this.gameEnded = true
			this.gameStarted = false
			this.rounds = []
		},
		userAttack: function() {
			let attack = Math.floor(Math.random() * 10)
			this.monsterHealth -= attack
			this.rounds.unshift({ type: 'player', action: 'attack', amount: attack })
			this.monsterMove()
		},
		userSpecial: function() {
			let special = Math.floor(Math.random() * 20)
			this.monsterHealth -= special
			this.rounds.unshift({
				type: 'player',
				action: 'special attack',
				amount: special
			})
			this.monsterMove()
		},
		userHeal: function() {
			let heal = Math.floor(Math.random() * 15)
			if (this.userHealth < 100 && this.userHealth + heal <= 100) {
				this.userHealth += heal
				this.rounds.unshift({
					type: 'player',
					action: 'heal',
					amount: heal
				})
			} else if (this.userHealth < 100 && this.userHealth + heal > 100) {
				this.userHealth = 100
				this.rounds.unshift({
					type: 'player',
					action: 'heal',
					amount: 'full health'
				})
			} else {
				this.rounds.unshift({
					type: 'player',
					action: 'heal',
					amount: 'full health'
				})
			}
			this.monsterMove()
		},
		monsterMove: function() {
			let move = Math.floor(Math.random() * 3)
			if (move === 0) {
				let attack = Math.floor(Math.random() * 10)
				this.rounds.unshift({
					type: 'monster',
					action: 'attack',
					amount: attack
				})
				this.userHealth -= attack
			} else if (move === 1) {
				let special = Math.floor(Math.random() * 20)
				this.rounds.unshift({
					type: 'monster',
					action: 'special attack',
					amount: special
				})
				this.userHealth -= special
			} else if (move === 2) {
				let heal = Math.floor(Math.random() * 10)
				if (this.monsterHealth < 100 && this.monsterHealth + heal <= 100) {
					this.monsterHealth += heal
					this.rounds.unshift({
						type: 'monster',
						action: 'heal',
						amount: heal
					})
				} else if (
					this.monsterHealth < 100 &&
					this.monsterHealth + heal > 100
				) {
					this.monsterHealth = 100
					this.rounds.unshift({
						type: 'monster',
						action: 'heal',
						amount: 'full health'
					})
				} else {
					this.rounds.unshift({
						type: 'monster',
						action: 'heal',
						amount: 'full health'
					})
				}
			}
		}
	}
})
