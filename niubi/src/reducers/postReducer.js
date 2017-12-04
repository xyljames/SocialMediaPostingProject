import constants from '../constants'

var initialState = {
	currentLocation: {
		lat: 40.543222,
		lng: -74.534686
	},
	list: null
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){
		case constants.POSTS_RECEIVED:
			// console.log('POSTS_RECEIVED: '+JSON.stringify(action.posts))
			updated['list'] = action.posts
			return updated

		case constants.POST_CREATED:
			let updatedList = (updated['list']==null) ? [] : Object.assign([], updated['list'])
			updatedList.unshift(action.post)
			updated['list'] = updatedList

			return updated

		case constants.CURRENT_LOCATION_CHANGED:
//			console.log('CURRENT_LOCATION_CHANGED: '+JSON.stringify(action.location))
			updated['currentLocation'] = action.location
			updated['list'] = null
			return updated

		default:
			return updated

	}



}