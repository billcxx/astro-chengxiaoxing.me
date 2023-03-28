---
title: "Convert web design image to code (1)"
description: "Use AI to convert a website image into html and css"
tags: [AI, web]
publishDate: "2023-02-28"
draft: true
---

网上简单搜索居然没有相关的开源项目，准备自己花点时间研究下，顺便可以作为我的 AI 正式上手的第一个项目，要是做的好说不定还能商业化。

## 目标

最好要 unsupervised learning，可能要分成两部分

1. 是训练能够把网页分割成 html tags，这跟一般的 yolo 还不太一样
2. 是训练安排 css 的 style

要有 Robustness，不希望是 1 对 1 式的函数转化，要像人一样有自动取舍的能力，要能够提取出网页的框架，而不是简单的每个 element 都翻译出来。

我觉得可以通过中间加一层语言的 embedding 来实现，也就是先用 AI 把网页的图片转化成文字的描述，然后再把文字描述转化成网页的 html+css。

这样网页的图片和代码就实现了脱钩。

## 环境配置

使用 falcon，jupyterhub。

## 准备数据

1. 写爬虫去自动截图网页，要截取完整网页，而不是就一屏
2. 存网页的 html 和 css
