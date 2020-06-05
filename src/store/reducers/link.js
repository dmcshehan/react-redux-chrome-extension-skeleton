const initialState = {
	favLinks: [
		{
			_id: '01',
			url: 'https://www.irenetomaini.com',
			title: 'My Portfolio',
		},
		{
			_id: '02',
			url: 'https://www.netflix.com',
			title: 'Netflix',
		},
		{
			_id: '03',
			url: 'https://www.pluralsight.com',
			title: 'Pluralsight',
		},
	],
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
