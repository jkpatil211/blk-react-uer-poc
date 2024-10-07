const AUTHOR_HOST = process.env.REACT_APP_DEFAULT_AUTHOR_HOST;

export const getAuthorHostUrl = () => {
    const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("authorHost")) {
		return searchParams.get("authorHost");
	} else {
		return AUTHOR_HOST;
	}
}