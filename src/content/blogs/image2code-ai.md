---
title: "Convert web design image to code (1)"
description: "Use AI to convert a website image into html and css"
tags: [AI, web]
publishDate: "2023-02-28"
draft: true
---

网上简单搜索居然没有相关的开源项目，准备自己花点时间研究下，顺便可以作为我的AI正式上手的第一个项目，要是做的好说不定还能商业化呢。

## 目标

最好要unsupervised learning，可能要分成两部分

1. 是训练能够把网页分割成html tags，这跟一般的yolo还不太一样
2. 是训练安排css的style

## 环境配置

使用falcon，jupyterhub。

## 准备数据

1. 写爬虫去自动截图网页，要截取完整网页，而不是就一屏
2. 存网页的html和css