const initialState = {
	name: 'Shehan',
};

export default function testReducer(state = initialState, action) {
	switch (action.type) {
		case 'TEST':
			return {
				name: 'Iroshani',
			};
		default:
			return state;
	}
}
