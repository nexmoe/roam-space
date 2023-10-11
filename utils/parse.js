export const getFirstImageSrc = (html) => {
	if (!html) return;
	// 匹配第一个 <img> 标签的 src 属性内容
	const regex = /<img[^>]+src="([^">]+)"/;
	const match = html.match(regex);

	// 如果匹配成功，则返回第一个匹配结果的 src 属性内容
	if (match && match.length > 1) {
		return match[1].replace("http://", "https://");
	}

	// 如果没有匹配结果，则返回空字符串
	return;
};

export const extractTextFromHTML = (html) => {
	if (!html) return;
	// 去除 HTML 标签和空白字符，提取纯文本内容
	const text = html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ");

	// 提取前 300 个字符
	const extractedText = text.substring(0, 300);

	return extractedText;
};
