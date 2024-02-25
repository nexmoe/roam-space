/**
 * Extracts text from HTML content and returns the first 300 characters.
 *
 * @param {string} html - The HTML content to extract text from
 * @return {string} The extracted text, up to 300 characters
 */
export function extractTextFromHTML(html) {
	if (!html)
		return
	// 去除 HTML 标签和空白字符，提取纯文本内容
	const text = html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ')

	// 提取前 300 个字符
	const extractedText = text.substring(0, 300)

	return extractedText
}
