
export const getAuthorHostUrl = () => {
    const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("authorHost")) {
		return searchParams.get("authorHost");
	} else {
		return process.env.REACT_APP_AUTHOR_HOST;
	}
}

export const getPublishHostUrl = () => {
    const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("publishHost")) {
		return searchParams.get("publishHost");
	} else {
		return process.env.REACT_APP_PUBLISH_HOST;
	}
}