---
title: "AnyData (1)"
description: "A data science cookbook for non-programmer"
tags: [Sijin, python, data science]
publishDate: "2023-03-05"
draft: false
---

## 起因

周五，老婆让我帮忙处理一个数据。
一般的数据，她自己可以用stata处理，但是因为这次的数据特别大（~2T），所以需要我来帮忙。

后来我发现，虽然具体干得事儿有一点不一样，但其实同样的数据我以前就帮她处理过。
这次我为了能快一点，用了多线程处理，结果发现瓶颈是在文件的读写上，多线程可能有点帮助但是不大，
也忽然意识到怪不得我以前的代码没用多线程，最后搞了很久才弄完。
总之，我就感觉有很多时候都是因为时间久远，会忘记了当时有什么经验了，
所以我萌生了要把每次帮她处理数据的经验记录下来的想法，最好是要让她们这些不太会编程的人，
也能够用到。

同时，我个人用jupyter notebook总是觉得很别扭，感觉就只能用来一次性的处理数据，
不是拿来编程用的，最主要没法不断把自己常用的操作固定下来，积累个人的函数库，
所以我个人也非常希望有个工具能够把jupyter notebook的处理数据，和正经的python编程有效的结合起来。

## 目标

1. 分享python处理数据的经验
2. 分享python处理数据的实例
3. 开发一套工具让notebook和python脚本能有效的结合起来，让用户自己积累自己的函数库
4. 集合大家开源的函数库，形成一个比pandas更傻瓜的python包

## 人群

社会学、商学院等需要处理数据，但是又没有经过编程训练的人。

## 路线

第一阶段，先收集我给我老婆处理数据的经验和代码
第二阶段，把收集的代码整理成python的包发布
第三阶段，开发命令行工具等，把notebook和python脚本结合起来

## 链接

[Git repo](https://github.com/sijintech/AnyData),
[Landing site](https://anydata.sijintech.com/)