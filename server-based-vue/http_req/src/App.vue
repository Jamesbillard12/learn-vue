<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" class="form-control" v-model="user.name">
        </div>
        <div class="form-group">
          <label for="">email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button @click="submit" class="btn btn-primary">Submit</button>
        <hr>
        <button @click="getReq" class="btn btn-primary">Get Data</button>
        <br>
        <br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(u, i) in users"
            :key="i"
          >{{u.name}} - {{u.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: '',
				email: '',
			},
			users: [],
		}
	},
	methods: {
		submit() {
			this.$http.post('', this.user).then(
				res => {
					console.log(res)
				},
				error => {
					console.log(error)
				}
			)
		},
		getReq() {
			this.$http
				.get('')
				.then(res => {
					return res.json()
				})
				.then(data => {
					const resultArr = []
					for (let key in data) {
						resultArr.push(data[key])
					}
					this.users = resultArr
				})
		},
	},
}
</script>

<style>
</style>
