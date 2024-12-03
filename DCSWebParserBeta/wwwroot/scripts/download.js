// This downloads it as an html file yet doesn't open it in a new tab
window.downloadFileFromStream = async (fileName, contentStreamReference) => {
	const arrayBuffer = await contentStreamReference.arrayBuffer();
	const blob = new Blob([arrayBuffer]);
	const url = URL.createObjectURL(blob);
	const anchorElement = document.createElement('a');

	anchorElement.href = url;

	if (fileName) {
		anchorElement.download = fileName;
	}

	anchorElement.click();
	anchorElement.remove();

	URL.revokeObjectURL(url);
}

// This opens it in a new tab but loads the html as text
window.displayLog = async (contentStreamReference) => {
	const arrayBuffer = await contentStreamReference.arrayBuffer();
	const blob = new Blob([arrayBuffer], { type: "text/html" });

	url = URL.createObjectURL(blob);

	window.open(url, '_blank').focus();

	URL.revokeObjectURL(url);
}