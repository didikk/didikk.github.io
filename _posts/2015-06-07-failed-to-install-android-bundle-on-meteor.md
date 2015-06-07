---
layout:     post
title:      Failed to Install Android Bundle on Meteor
date:       2015-06-07 9:30:20
categories: Error Meteor
tags:		meteor android bundle failed install ubuntu
---

Beberapa hari yang lalu saya mencoba menginstall Android sdk di aplikasi Meteor yang saya kerjakan untuk tugas akhir. Kebetulan saya diminta untuk membuat versi mobile dari web saya. Daripada membuat aplikasi native, saya berencana untuk mendeploy aplikasi Meteor saya menjadi Android app. Dengan Meteor hal ini bisa dilakukan dengan sebaris perintah. Namun saat menginstall Android sdk, saya menemui masalah seperti berikut. Oh ya, untuk informasi saja, saya menggunakan OS Ubuntu 14.04.

![error](/images/android-sdk.png)

Setelah beberapa hari searching dan bertanya di forum-forum programming, akhirnya berhasil juga. Solusinya sederhana sekali: menghapus direktori android_bundle. Oke, begini langkah-langkahnya.

1. Pastikan Anda berada di home direktori dengan mengetik perintah "pwd".<br>
{% highlight text %}
~$ pwd
/home/didik
~$
{% endhighlight %}

2. Jika Anda sudah berada di home direktori, hapus folder android_bundle.<br>
{% highlight text %}
rm -rf android_bundle.xxx
{% endhighlight %}

Dengan cara di atas Anda sudah bisa menginstall Android sdk. Ketik kembali perintah "meteor install-sdk android".

_Well_, semoga bisa membantu untuk yang menemui masalah seperti saya.
	