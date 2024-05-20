---
title: Content Collections
slug: content-collections
description: Content collections help organize your Markdown and type-check your frontmatter with schemas.
category:
  - One
tags:
  - Tailwind
  - Astro
  - Jamstack
pubDate: 2023-09-02
cover: https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=1960&h=1102&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJsYWNrfGVufDB8MHwwfHx8Mg%3D%3D
coverAlt: AstroVerse-Content Collections
author: VV
---

**Content collections** are the best way to manage and author content in any Astro project. Collections help to organize your documents, validate your frontmatter, and provide automatic TypeScript type-safety for all of your content.

## What are Content Collections?

A **content collection** is any top-level directory inside the reserved `src/content` project directory, such as `src/content/newsletter` and `src/content/authors`. Only content collections are allowed inside the `src/content` directory. This directory cannot be used for anything else.

A **collection entry** is any piece of content stored inside of your content collection directory. Entries can use content authoring formats including Markdown (`.md`) and MDX (`.mdx` using the [MDX integration](/en/guides/integrations-guide/mdx/)) or as data formats including YAML (`.yaml`) and JSON (`.json`). We recommend using a consistent naming scheme (lower-case, dashes instead of spaces) for your files to make it easier to find and organize your content, but this is not required. You can also [exclude entries from being built](/en/core-concepts/routing/#excluding-pages) by prefixing the filename with an underscore (\_).
