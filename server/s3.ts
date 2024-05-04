import {
	S3Client,
	PutObjectCommand,

} from '@aws-sdk/client-s3'

const config = useRuntimeConfig()

const S3 = new S3Client({
	region: 'auto',
	endpoint: config.s3.endpoint,
	credentials: {
		accessKeyId: config.s3.accessKeyId,
		secretAccessKey: config.s3.secretAccessKey,
	},
})

export async function uploadRemoteImageToS3(imageUrl: string, s3Key: string) {
	try {
		// 下载图片
		const response = await fetch(imageUrl)
		if (!response.ok) {
			throw new Error(`Failed to fetch image: ${response.statusText}`)
		}

		// 获取图片的二进制数据
		const blob = await response.blob()

		// 将Blob转换为ArrayBuffer，因为PutObjectCommand需要Body为Buffer类型的参数
		const arrayBuffer = await new Response(blob).arrayBuffer()
		const buffer = Buffer.from(arrayBuffer)

		// 上传到S3
		const command = new PutObjectCommand(
			{
				Bucket: config.s3.bucket,
				Key: s3Key, // 图片在S3中的路径和名称
				Body: buffer,
				ContentType: response.headers.get('content-type') || undefined, // 保持原始的MIME类型
			},
		)
		const result = await S3.send(command)
		return result
	}
	catch (error) {
		console.error('Error uploading image:', error)
		throw error
	}
}
