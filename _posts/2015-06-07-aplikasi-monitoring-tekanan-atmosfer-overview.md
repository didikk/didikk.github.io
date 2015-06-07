---
layout:     post
title:      Aplikasi Monitoring Tekanan Atmosfer (Overview)
date:       2015-06-07 9:45:20
categories: TA Tutorial Docs
tags:		atmospheric pressure monitoring libelium waspmote smart agriculture
---

Beberapa waktu yang lalu ketika melakukan bimbingan, dosen pembibing meminta saya untuk membuat dokumentasi apa yang telah saya lakukan selama mengerjakan tugas akhir. Kebetulan sekali, karena saya juga ingin menuliskannya di sini. Jadi di beberapa artikel ke depan saya akan membuat beberapa seri yang membahas tugas akhir saya.

Oke, sebelum itu saya akan menjelaskan deskripsi singkat tugas akhir yang saya kerjakan dan teknologi apa saja yang saya gunakan.

####Apa yang saya kerjakan?

Dalam tugas akhir ini saya  mendapat judul dari dosen tentang monitoring tekanan atmosfer. Jadi dengan sebuah sensor tekanan atmosfer, saya diminta untuk memonitoring data yang diperoleh dari sensor tersebut dan mencari hubungannya dengan pertanian.

Sebenarnya ini agak sulit, karena biasanya sensor ini digabungkan dengan sensor-sensor lain agar bisa menjadi sebuah aplikasi yang berguna. Tapi kemudian saya menemukan sebuah _paper_ yang menjelaskan bahwa tekanan atmosfer bisa mempengaruhi produksi jagung. Dari situ saya memutuskan untuk membuat aplikasi yang menentukan tempat dan waktu yang tepat untuk menanam jagung.

Namun sampai saat ini saya masih mencari data tanaman lain yang berhubungan atau dipengaruhi oleh tekanan atmosfer. Karena saat sidang TPPA (Tugas Pendahuluan Proyek Akhir) dosen penguji meminta saya mencari data selain jagung. Jadi saya mencoba mencari data di Dinas Pertanian Surabaya. Semoga saja ada.

####Apa yang saya gunakan?

Untuk hardwarenya saya menggunakan produk-produk dari Libelium, yaitu: Smart Agriculture Board dengan Atmospheric Pressure Sensor, serta Waspmote Starter Kit. Sedangkan untuk softwarenya saya menggunakan MeteorJS untuk mengambil data dari sensor, memanage data dan menampilkan data real time. MongoDB sebagai databasenya. Dan untuk OS saya tetap menggunakan Ubuntu 14.04.

Sepertinya cukup itu yang bisa saya jelaskan. Di artikel berikutnya saya akan menjelaskan tentang instalasi waspmote IDE dan contoh penggunaannya.