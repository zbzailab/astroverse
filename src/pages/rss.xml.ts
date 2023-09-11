import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get() {
	let posts = await getCollection('posts')

	posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))

	posts = posts.slice(0, 3)

	return rss({
		title: 'VisVrs: An Astro Theme for Visual Storytelling',
		description: 'VisVrs is an Astro theme specifically designed for photo and text blogging, making it ideal for blog authors and content creators.',
		site: 'https://visvrs.vercel.app',
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `${post.slug}/`
		})),
		customData: `<language>en</language>`
	})
}
