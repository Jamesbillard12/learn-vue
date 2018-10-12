<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server #{{selectedServer.id}}</p>
        <p>Server Status: {{selectedServer.status}}</p>
        <button v-if='Object.keys(this.selectedServer).length !== 0' @click='updateServerNormal'>NORMAL</button>
    </div>

</template>

<script>
import { serverBus } from '../../main'
export default {
	data: function() {
		return {
			selectedServer: {},
			servers: serverBus.servers,
		}
	},
	methods: {
		updateServerNormal() {
			if (
				Object.keys(this.selectedServer).length !== 0 &&
				this.selectedServer.constructor === Object
			) {
				let tempArr = [...this.servers]
				for (let server of tempArr) {
					if (this.selectedServer.id === server.id) {
						server.status = 'Normal'
						this.servers = tempArr
						serverBus.$emit('servers', this.servers)
						return
					}
				}
			}
		},
	},
	created() {
		serverBus.$on('selectedServer', server => {
			this.selectedServer = server
		})
	},
}
</script>

<style>
</style>
