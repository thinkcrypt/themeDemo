export const colors = {
	primary: '#C09671',
	lightPrimary: '#e7b990',
	secondary: '#F9F1EA',
	footer: '#332F2A',
	white: '#ffffff',
	lightWhite: '#f0e7de',
	success: '#008060',
	dark: '#332F2A',
	warning: '#FFB800',
	textColor: '#828282',
	black: '#000000',
	menuTextColor: '#322e2a',
	titleColor: '#322e2a',
};

export const fonts = {
	marcellus: 'Marcellus, serif',
	inter: 'Inter, sans-serif',
};

const useCustomStyle = () => {
	return {
		colors,
		fonts,
	};
};

export default useCustomStyle;
