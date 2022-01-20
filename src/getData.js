export const GetData = async (url) => {
	let data = await fetch(url).then(
		(result) => result.json()
	);
	return data;
};
