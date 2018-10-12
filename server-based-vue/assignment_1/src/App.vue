<template>
    <div class="container">
        <server-header></server-header>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <app-server-list v-for="index in 5" :index='index'> 
                        
                    </app-server-list>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import ServerList from './ServerList.vue'
export default {
	name: 'Home',
	props: [],
	components: {
		'app-server-list': ServerList,
	},
}
</script>

<style>
</style>                      