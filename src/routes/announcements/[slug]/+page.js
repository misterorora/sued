// src/routes/blog/[slug]/+page.js
export const load = async({ fetch, params }) => {
	const response = await fetch('/api/stuff/' + params.slug);
	const post = await response.json();
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		slug
	};
};