---
layout:     post
title:      Cara Penggunaan Aplikasi Monitoring Atmospheric Pressure
date:       2015-08-13 9:50:20
categories: TA Tutorial Docs
tags:		atmospheric pressure monitoring libelium waspmote smart agriculture
---

Dalam tulisan ini akan dijelaskan tentang cara penggunaan aplikasi "Monitoring Atmospheric Pressure". Berikut ini langkah-langkahnya.

1. Pastikan semua perangkat yang diperlukan seperti sensor, ZigBee, dan baterai sudah terpasang dengan baik.<br>
![waspmote](/images/apmonitoring/1.jpg)

2. Juga pastikan ZigBee Receiver sudah terpasang di laptop.<br>
![laptop](/images/apmonitoring/2.jpg)

3. Sebelum menjalankan aplikasi, ada baiknya untuk mengetes koneksi ZigBee terlebih dahulu. Buka Waspmote IDE dan jalankan "Serial Monitor". Jika hasilnya seperti di bawah ini maka koneksi sudah terjalin dengan baik.<br>
<center>![ide](/images/apmonitoring/3.png)</center>

4. Langkah selanjutnya yaitu menjalankan aplikasi yang telah dibuat. Buka terminal dan masuk ke direktori aplikasi.<br>
<center>![cd](/images/apmonitoring/4.png)</center><br>Ketikkan perintah "meteor" untuk menjalankan aplikasi.

5. Buka browser dan arahkan ke alamat "localhost:3000". Jika tidak ada kesalahan, maka akan tampil seperti gambar di bawah ini.<br>
![browser](/images/apmonitoring/5.png)

6. Aplikasi ini memiliki 3 fitur yaitu: Real Time Data, Information dan History. Fitur "Real Time Data" akan menampilkan chart dari nilai tekanan yang didapat dari sensor. Fitur "Information" akan menampilkan nilai tekanan saat itu serta rata-rata dari tekanan yang telah diambil. Sedangkan fitur "History" akan menampilkan data yang telah disimpan ke dalam database. Data tersebut disimpan setiap 10 menit sekali.<br>
![browser](/images/apmonitoring/5.png)<br>
<center><small>_Fitur Real Time Data_</small></center><br><br>
![info](/images/apmonitoring/6.png)<br>
<center><small>_Fitur Information_</small></center><br><br>
![history](/images/apmonitoring/7.png)<br>
<center><small>_Fitur History_</small></center><br><br>