---
layout:     post
title:      Tidak Bisa Menginstal Aplikasi dari Ubuntu Software Center
date:       2015-05-09 19:10:20
categories: Tips Linux
tags:		ubuntu software center disable network manager
---

Mungkin beberapa dari Anda yang menggunakan Ubuntu pernah menemui masalah tidak bisa menginstal aplikasi dari Ubuntu Software Center meskipun sudah tersambung dengan internet. Salah satu yang mungkin menjadi penyebabnya adalah __network manager__ yang tidak mengenali koneksi Anda. Hal ini bisa terjadi ketika Anda menggunakan modem atau semacamnya. Untuk mengatasinya cukup disable __network manager__ melalui terminal.<br>
<pre><code>sudo stop network-manager</code></pre>