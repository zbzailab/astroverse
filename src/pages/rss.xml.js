import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "@consts";
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

export async function GET(context) {
  let posts = await getCollection("posts");

  posts = posts
    .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
    .slice(0, 3);

  const markdown = new MarkdownIt();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    customData: `<language>en-US</language>`,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${post.slug}`,
      pubDate: post.data.pubDate,
      content: sanitizeHtml(markdown.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']),
      }),
      customData: post.data.customData,
    })),
  });
}