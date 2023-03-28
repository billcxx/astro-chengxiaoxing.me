# Personal website using Astro + Cloudflare Page + Cloudflare Workers

[![Deploy to Cloudflare Pages](https://github.com/billcxx/astro-chengxiaoxing.me/actions/workflows/cf_pages.yml/badge.svg)](https://github.com/billcxx/astro-chengxiaoxing.me/actions/workflows/cf_pages.yml)
[![Deploy Severless](https://github.com/billcxx/astro-chengxiaoxing.me/actions/workflows/serverless.yml/badge.svg)](https://github.com/billcxx/astro-chengxiaoxing.me/actions/workflows/serverless.yml)

## What I'm trying to achieve

A personal website with:

- landing page
- CV, publications, projects pages to describe my accomplishments
- blogs to share my thoughts and experiences (tag enabled)
- allowing users to subscribe to my email list on sendgrid
-

## Why not GitHub Pages

The initial version of my website is using GitHub Pages. Then I want to add a serverless function to handle subscription. I use Cloudflare because it's super easy to use.

## Astro

Astro is great for static site, pretty easy and fun to write even without any front end frameworks. Literally the best static site generator that I have ever used as of March 2023.

## Serverless

Using serverless function on Cloudflare has two choices:

1. Pages function
2. Workers

After some experiments, I go for the Workers approach for the following reasons：

- SSR in Astro is not quite ready yet, particularly the Astro-icon requires some patches to work
- Since I put the subscribe button in the footer, all pages become SSR, which I don't like
