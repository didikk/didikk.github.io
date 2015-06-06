---
layout:     post
title:      Setting Proxy di Terminal Ubuntu
date:       2015-05-09 19:39:20
categories: Tips Ubuntu
tags:		ubuntu terminal setting proxy
---

Pernahkah Anda malakukan perintah _apt-get update_ di terminal ketika Anda tersambung dengan internet yang menggunakan proxy? Tentu Anda akan menemui masalah seperti "can not download" atau semacamnya sedangkan ketika browsing tidak ada masalah. Hal ini terjadi karena kita belum mengatur setting proxy di terminal. Berikut langkah-langkahnya.

1. Buka terminal dan edit (buat) file apt.conf di direktori /etc/apt/<br>
<pre><code>sudo nano /etc/apt/apt.conf</code></pre>

2. Tambahkan baris kode berikut.<br>
<pre><code>Acquire::http::proxy "http://proxy_username:password@proxy_ip:port";
Acquire::https::proxy "https://proxy_username:password@proxy_ip:port" ;
Acquire::ftp::proxy "ftp://proxy_username:password@proxy_ip:port";</code></pre>

3. Ubah proxy server dan username sesuai dengan proxy yang Anda gunakan.