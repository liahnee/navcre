
const mobileStatus = (state = {
	isMobile: false,
	open: false
}, action) => {
	switch (action.type) {
		case 'IS_MOBILE':
			if (action.payload) {
				console.log(state.isMobile)
				return { ...state, isMobile: true };
			} else if (!action.payload) {
				return { ...state, isMobile: false };
			} else {
				return state;
			}
		case 'OPEN':
			if (action.payload) {
				return { ...state, open: true };
			} else if (!action.payload) {
				return { ...state, open: false };
			} else {
				return state;
			}

		default:
			return state;
	}
};

export default mobileStatus;
