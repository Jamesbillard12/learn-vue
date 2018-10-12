<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                :key='server.id'
                @click='selectServer(server)'
                class="list-group-item"
                style="cursor: pointer"
                v-for="server in servers">
                Server #{{ server.id }} Status: {{server.status}}
            </li>
        </ul>
        <p v-if='selectedServer'>{{selectedServer.id}}</p>
    </div>
</template>

<script>
import { serverBus } from '../../main'
export default {
	data: function() {
		return {
			servers: serverBus.servers,
			selectedServer: {},
		}
	},
	methods: {
		selectServer(server) {
			this.selectedServer = server
			serverBus.$emit('selectedServer', this.selectedServer)
		},
	},
}
</script>

<style>
</style>
