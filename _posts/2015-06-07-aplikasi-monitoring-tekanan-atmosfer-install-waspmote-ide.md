---
layout:     post
title:      Aplikasi Monitoring Tekanan Atmosfer (Install Waspmote IDE)
date:       2015-06-07 9:50:20
categories: TA Tutorial Docs
tags:		atmospheric pressure monitoring libelium waspmote smart agriculture ide install
---

Untuk memprogram Waspmote Starter Kit kita memerlukan sebuah software yang bernama Waspmote IDE. IDE ini yang akan kita gunakan untuk menulis dan mengupload program ke controller. Dengan IDE ini kita juga bisa menampilkan data yang diperoleh dari sensor.

Untuk instalasi di Ubuntu sendiri sebenarnya cukup mudah. Hal yang pertama dilakukan adalah mendownload paket softwarenya [di sini](http://www.libelium.com/development/waspmote/sdk_applications/). Ekstrak file tersebut dan jalankan file bernama "waspmote" dengan mengklik 2 kali.

<center>![waspmote](/images/waspmoteide/1.png)<br>
<small>_Tampilan awal waspmote IDE_</small></center>

Di dalam IDE ini juga sudah disediakan banyak contoh kode yang siap digunakan. Untuk saat ini kita akan mencoba kode example dari atmosphheric pressure. Klik File -> Examples -> Sensors -> Agriculture -> Ag_03_pressure_sensor_reading.

Sampai di sini kode sudah siap diupload. Tapi sebelum itu, buka Tools -> Board dan centang waspmote API yang tersedia di situ. Buka lagi Tools -> Serial port dan pilih port usb yang Anda gunakan untuk menyambungkan Starter Kit ke laptop/PC. Oh, ya, pastikan Anda sudah merakit Agriculture Board dan Starter Kit serta telah menyambungkan dengan laptop melalui kabel USB yang disediakan.

Jika saat memilih serial port Anda tidak bisa menjumpai satu port pun atau menu serial port berwarna abu-abu, berarti ada sedikit masalah. Mungkin Starter Kitnya belum dinyalakan, kabel USB tidak terpasang dengan sempurna, atau juga bisa Anda harus menjalankan Waspmote IDE sebagai user root. Untuk masalah yang terakhir Anda bisa membuka "Aplication Finder" dengan menekan keyboard Alt + F2. Kemudian ketik "gksu nautilus" atau "gksu thunar" untuk XFCE dan tekan Enter. Dengan cara ini kita bisa membuka IDE sebagai root.

Langkah selanjutnya yaitu mengupload program ke Starter Kit. Klik File -> Upload atau Ctrl + U. Tunggu beberapa saat indikator di bawah menunjukkan "Done uploading" atau sejenisnya. Buka serial monitor dari menu Tools -> Serial monitor, pada dropdown baud pilih yang 115200. Dan pastikan Anda akan mendapat hasil seperti berikut.

<center>![serial monitor](/images/waspmoteide/2.jpg)<br>
<small>_Serial monitor_</small>
</center>