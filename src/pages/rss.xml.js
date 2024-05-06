import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "@consts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context) {
  let posts = await getCollection("posts");

  posts = posts
    .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
    .slice(0, 3);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    customData: `<language>en-us</language>`,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${post.slug}`,
      pubDate: post.data.pubDate,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      customData: post.data.customData,
    })),
  });
}
