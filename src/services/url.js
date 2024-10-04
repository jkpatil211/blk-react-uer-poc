const REACT_APP_DEFAULT_AUTHOR_HOST = 'https://author-p140494-e1441216.adobeaemcloud.com/';

export const getHostUrl = () => {
    const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("authorHost")) {
		return searchParams.get("authorHost");
	} else {
		return REACT_APP_DEFAULT_AUTHOR_HOST;
	}
}