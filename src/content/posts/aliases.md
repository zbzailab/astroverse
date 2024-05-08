---
title: Aliases
slug: aliases
description: An intro to aliases with Astro.
category:
  - One
tags:
  - Tailwind
  - Astro
  - Jamstack
pubDate: 2023-09-01
cover: https://images.unsplash.com/photo-1516557070061-c3d1653fa646?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2t8ZW58MHwwfDB8fHwy
coverAlt: AstroVerse-Aliases
author: VV
---

An **alias** is a way to create shortcuts for your imports.

Aliases can help improve the development experience in codebases with many directories or relative imports.

```astro title="src/pages/about/company.astro" del="../../components" del="../../assets"


You can add import aliases from either `tsconfig.json` or `jsconfig.json`.


```
