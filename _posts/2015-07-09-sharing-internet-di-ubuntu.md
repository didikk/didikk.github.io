---
layout:     post
title:      Sharing Internet di Ubuntu
date:       2015-07-09 4:54:20
categories: Tutorial Ubuntu
tags:		share internet ubuntu wifi
---

Seperti yang kita tahu, di Windows, jika ingin berbagi koneksi melalui wifi kita bisa menggunakan netsh. Namun berbeda lagi ceritanya jika di Linux, khususnya Ubuntu. Untuk itu saya mencoba mencari di google untuk menemukan cara yang paling mudah. Kurang lebih seperti ini langkah yang saya temukan.

1. Pastikan koneksi internet kita sudah berjalan dengan baik. Entah Anda menggunakan modem atau koneksi lainnya, tidak masalah. Yang penting bisa mengakses internet.

2. Klik icon network (jaringan) di panel Ubuntu Anda, kemudian klik "Create New Wi-Fi Network".

3. Isi nama wifi yang akan dibuat beserta password. Klik Create untuk melanjutkan.<br>
![create](/images/wifiubuntu/1.png)

4. Klik icon network lagi, di sana Anda akan menemukan wifi yang baru saja dibuat.

5. Selanjutnya buka "Network Connections", bisa melalui start atau dari icon network kemudian klik edit.<br>
![edit](/images/wifiubuntu/2.png)

6. Pilih wifi yang sudah Anda buat dan klik Edit. Berikutnya ubah mode dari Ad-hoc menjadi Infrastructure. Klik Save untuk menyimpan.<br>
![mode](/images/wifiubuntu/3.png)

7. Langkah berikutnya yang harus dilakukan adalah mengubah konfigurasi wifi tersebut melalui terminal. Buka terminal dan masuk ke direktori _/etc/NetworkManager/system-connections/_.<br>
<pre><code>cd /etc/NetworkManager/system-connections/</code></pre>

8. Ketik "ls" untuk melihat daftar file yang ada di sana. Pastikan Anda menemukan nama file yang sesuai dengan nama wifi yang telah Anda buat sebelumnya. Sebagai contoh, nama file saya adalah wifi-didik. Sama seperti nama wifi yang saya buat.<br>
![wifi](/images/wifiubuntu/4.png)

9. Edit file tersebut dengan editor kesayangan Anda seperti nano atau vim.<br>
<pre><code>sudo nano wifi-didik</code></pre>

10. Ganti _mode=infrastructure_ menjadi _mode=ap_.<br>
![ap](/images/wifiubuntu/5.png)

11. Sampai di sini, jika tidak ada kesalahan, kita sudah bisa berbagi internet dengan perangkat lain. Silahkan gunakan smartphone atau laptop lain untuk mencobanya.<br>
![hp](/images/wifiubuntu/6.png)

Selamat mencoba.
