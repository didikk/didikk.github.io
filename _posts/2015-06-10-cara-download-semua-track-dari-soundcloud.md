---
layout:     post
title:      Cara Download Semua Track dari Account SoundCloud
date:       2015-06-10 7:56:20
categories: Tutorial
tags:		download all track soundcloud
---

Jadi ceritanya saya iseng-iseng mengunjungi SoundCloud-nya [Suara Cerita](https://soundcloud.com/suaracerita). Setelah saya dengarkan beberapa track ternyata isinya bagus. Oleh karena itu saya ingin menyimpannya. Tapi karena jumlah track-nya 80 lebih, maka tidak mungkin saya melakukannya secara manual. Pasti melelahkan.

Kemudian saya mencari-cari di google dan menemukan sebuah aplikasi berbasis CLI yang lumayan powerfull. Namanya "SoundCloud Music Downloader", bisa Anda kunjungi Githubnya [di sini](https://github.com/flyingrub/scdl). Untuk menggunakan aplikasi ini Laptop/PC Anda sudah harus terinstall python3 dan pip3. Jika Anda sudah menginstall kedua software tersebut, silahkan ikuti langkah-langkah berikut.

Install "SoundCloud Music Downloader".
<pre><code>sudo pip3 install scdl</code></pre>

Dapatkan auth_token dengan mengunjungi halaman [ini](http://flyingrub.tk/soundcloud/).

![auth](/images/scdl/1.png)

Klik "Connect with SoundCloud". Kemudian silahkan login atau mendaftar jika belum punya akun SoundCloud.

![auth](/images/scdl/2.png)

Jika Anda sudah login, klik "Connect".

![auth](/images/scdl/3.png)

Anda akan mendapatkan auth_token seperti di bawah ini. Copy kode token tersebut.

![auth](/images/scdl/4.png)

Selanjutnya edit file konfigurasi scdl.
<pre><code>nano ~/.config/scdl/scdl.cfg</code></pre>

_Nb: Di sini saya menggunakan Ubuntu, jadi untuk OS lain silahkan disesuaikan._

Tambahkan auth_token yang Anda dapatkan sebelumnya dan tentukan di mana Anda akan menyimpan file hasil download. Sebagai contoh berikut ini file konfigurasi milik saya.

<pre><code>[scdl]
auth_token = 1-126453-157378800-b4e773d9211ac
path = /home/didik/Downloads</code></pre>

Untuk mengecek apakah scdl sudah terinstal dengan baik, jalankan perintah "scdl -h". Pastikan hasilnya seperti berikut.

![auth](/images/scdl/5.png)

Sampai di sini Anda sudah bisa mendownload semua track di SoundCloud favorit Anda. Sebagai contoh saya akan mendownload track dari [Suara Cerita](https://soundcloud.com/suaracerita).

<pre><code>$ scdl -l https://soundcloud.com/suaracerita -t</code></pre>

![auth](/images/scdl/6.png)

Tunggu sampai proses download selesai dan selamat menikmati track favorit Anda.
