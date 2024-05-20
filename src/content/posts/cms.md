---
title: Use a CMS with Astro
slug: use-cms
description: How to use a CMS to add content to Astro
category:
  - Two
tags:
  - Tailwind
  - Find
  - SEO
pubDate: 2023-09-01
cover: https://images.unsplash.com/photo-1638184984605-af1f05249a56?w=1960&h=1102&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJsYWNrfGVufDB8MHwwfHx8Mg%3D%3D
coverAlt: AstroVerse-Aliases
author: VV
---

**Ready to connect a Headless CMS to your Astro project?** Follow one of our guides to integrate a CMS.

:::tip
Find [community-maintained integrations](https://astro.build/integrations/?search=cms) for connecting a CMS to your project in our integrations directory.
:::

## CMS Guides

Note that many of these pages are **stubs**: they're collections of resources waiting for your contribution!

<CMSGuidesNav />

## Why use a CMS?

A Content Management System lets you write content and manage assets outside of your Astro project.

This unlocks new features for working with content. Most CMSes give you a visual content editor, the ability to specify standard types of content, and a way to collaborate with others.

A CMS can be useful for content that follows a particular structure, often giving you a dashboard-like experience and WYSIWYG editing tools. You might use a CMS to write blog posts using a CMS's rich text editor instead of Markdown files. Or you might use a CMS to maintain product listings for an eCommerce shop, making certain fields required to avoid incomplete listings.

Your Astro project can then fetch your content from your CMS and display it, wherever and however you want on your site.

## Which CMSes work well with Astro?

Because Astro takes care of the _presentation_ of your content, you'll want to choose a _headless_ CMS, like those in the list above. This means that the CMS helps you write your content, but doesn't generate a site that displays it. Instead, you fetch the content data and use in your Astro project.

Some headless CMSes, like Storyblok, provide an Astro [integration](/en/guides/integrations-guide/) that helps fetch the content specifically for an Astro site. Others provide a JavaScript SDK, a library that you install and use to fetch your remote content.

## Can I use Astro without a CMS?

Yes! Astro provides built-in ways to [author content](/en/guides/content/), including support for Markdown pages.
