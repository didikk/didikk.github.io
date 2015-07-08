---
layout:     post
title:      LocationBased Documentation
date:       2015-06-21 7:56:20
categories: Tutorial Android Webservice
tags:		android location based AR webservice metaio
---

_This article is specially delivered to Anggar._

###Demo App

Kalau mau mencoba aplikasi yang sudah jadi bisa langsung download [di sini](https://drive.google.com/file/d/0BypWiFeYv99tRFM1bW5pa0ZVWEE/view?usp=sharing). Sebelum menggunakan, pastikan kamu punya akses internet. Karena harus mengakses API yang sudah kuupload ke file hosting.

Sedangkan jika mau menambah atau mengubah data bisa buka [halaman ini](http://lbs.honor.es/). Untuk username dan password bisa PM aku.

###Step by step Configuration

Agar kamu bisa menggunakan aplikasi di jaringan lokal / gak perlu internet, ada beberapa hal yang harus dilakukan. Berikut ini langkah-langkahnya.

####Setup server

1. Pertama, download file serverlbs [di sini](https://github.com/didikk/serverlbs). Kalau belum tahu caranya download di github, di sebelah kanan itu ada tombol "Download ZIP". Klik dan tunggu proses hingga selesai.

2. Ekstrak file hasil download tersebut ke xampp-mu. Pastikan juga xampp sudah aktif. Tapi jangan dibuka di browser dulu.

3. Download hasil export sql-ku dulu [di sini](https://drive.google.com/file/d/0BypWiFeYv99teG81VE9GU3R3MTQ/view?usp=sharing). Import file tersebut ke databasemu. Caranya buka phpmyadmin, klik nama databasemu, kemudian import.

4. Oke, setelah itu buka folder serverlbs lagi. Edit file config.php di dalam folder includes. Ubah sesuai dengan konfigurasi servermu. Biasanya di windows gak pake password, jadi hapus saja passwordnya.{% highlight php %}
<?php
	$connection = mysql_connect('localhost','root','');
	if (!$connection){
		die("Database Connection Failed". mysql_error());
	}
	$select_db = mysql_select_db('lbs');
	if (!$select_db){
		die("Database Selection Failed". mysql_error());
	}
?>
{% endhighlight %}

5. Coba buka http://localhost/serverlbs/. Kalau muncul halaman login, berarti server sudah berjalan dengan baik.

####Setup Android App

1. Sebelum membuka eclipse, pastikan kamu sudah men-sharing wifimu. Caranya bisa dilihat [di sini](http://www.7tutorials.com/how-turn-your-windows-81-laptop-wifi-access-point).

2. Kemudian kita perli mengetahui IP Address laptop. Buka cmd dan ketikkan "ipconfig", cari ip dari wifimu. Biasanya kalau sharing dengan netsh IP-nya jadi 192.168.137.1.

3. Coba buka IP itu dari hpmu, kalau muncul dashboard-nya xampp berarti koneksi sudah oke.

4. Download project Android-nya di [sini](https://github.com/didikk/lbs).

5. Ekstrak dan import ke eclipsemu. Jangan lupa hapus dulu yang lama biar gak bentrok.

6. Kalau muncul error setelah import, gak usah bingung. Itu wajar. Soalnya API yang kugunakan sudah 22. Jadi silahkan update dulu android-sdkmu ke API yang paling baru.

7. Oke, selanjutnya mengedit url API. Buka file Url.java dan ubah urlnya dengan IPmu.

8. Coba run ke hpmu.

9. Selamat mencoba.
