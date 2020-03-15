export const addZero = num => {
	return num > 9 ? num.toString() : '0' + num
}