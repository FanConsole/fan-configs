interface InlineStylePxTransformOptions {
	platform?: 'h5' | 'mp' | 'rn' | 'px'
	designWidth?: number
	deviceRatio?: Record<string, number>
	unitPrecision?: number
	minPixelValue?: number
	exclude?: RegExp
}

declare function VuePluginInlineStylePxTransform(options?: InlineStylePxTransformOptions): {
	name: string
	transform(
		code: string,
		id: string
	): {
		code: string
	}
}

export { type InlineStylePxTransformOptions, VuePluginInlineStylePxTransform as default }
