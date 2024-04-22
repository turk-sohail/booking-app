const compareTime = (d1, d2) => {
	let date1 = new Date(d1);
	let date2 = new Date(d2);

	return date1.getTime() > date2.getTime();
};

module.exports = {
	compareTime,
};
