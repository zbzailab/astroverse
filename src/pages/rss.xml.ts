import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    let posts = await getCollection('posts');
    
    posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

    posts = posts.slice(0, 3);

    return rss({
        title: 'VisVrs: An Astro Theme for Visual Storytelling',
        description: 'VisVrs is an Astro theme specifically designed for photo and text blogging, making it ideal for blog authors and content creators.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `${post.slug}/`,
            customElements: [
                {
                    name: 'media:content',
                    attributes: {
                        url: post.data.cover, // 图片的URL，根据你的数据结构来选择正确的字段
                        medium: 'image',
                        type: 'image/jpeg', // 图片的类型，根据你的需要选择合适的类型
                    },
                },
            ],
        })),
        customData: `<language>zh-cn</language>`
    });
}