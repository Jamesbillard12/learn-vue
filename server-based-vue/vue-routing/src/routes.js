const Home = resolve => {
	require.ensure(['./components/Home.vue'], () => {
		resolve(require('./components/Home.vue'))
	})
}

const User = resolve => {
	require.ensure(['./components/user/User.vue'], () => {
		resolve(require('./components/user/User.vue'))
	})
}
const UserStart = resolve => {
	require.ensure(['./components/user/UserStart.vue'], () => {
		resolve(require('./components/user/UserStart.vue'))
	}),
		'user'
}
const UserDetail = resolve => {
	require.ensure(['./components/user/UserDetail.vue'], () => {
		resolve(require('./components/user/UserDetail.vue'))
	})
}
const UserEdit = resolve => {
	require.ensure(['./components/user/UserEdit.vue'], () => {
		resolve(require('./components/user/UserEdit.vue'))
	})
}

export const routes = [
	{ path: '', component: Home },
	{
		path: '/user',
		component: User,
		children: [
			{ path: '', component: UserStart },
			{
				path: ':id',
				component: UserDetail,
				beforeEach: (to, from, next) => {
					console.log('ROUTE')
					next()
				},
			},
			{ path: ':id/edit', component: UserEdit, name: 'userEdit' },
		],
	},
	{ path: '*', redirect: '/' },
]
