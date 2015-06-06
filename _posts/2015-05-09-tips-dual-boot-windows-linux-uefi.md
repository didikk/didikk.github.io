---
layout:     post
title:      Tips Dual Boot Windows dan Linux Mode UEFI
date:       2015-05-09 16:11:19
categories: Tips Linux
tags:		uefi dualboot windows ubuntu
---

Beberapa tahun terakhir ini kita mulai mengenal yang namanya UEFI. UEFI adalah sebuah firmware yang digunakan untuk menggantikan BIOS tradisional. Salah satu fitur baru yang dibawa oleh teknologi ini adalah _Secure Boot_. Fitur ini akan menyeleksi program yang boleh dijalankan saat komputer menyala. Sehingga bisa mencegah virus atau program jahat berjalan ketika _start up_.

Namun, fitur tersebut menimbulkan sedikit masalah ketika kita ingin melakukan dual boot Linux dengan Windows. Akan muncul beberapa permasalahan yang sebelumnya tidak kita temui ketika melakukan _dual boot_ dengan BIOS tradisional. Nah, untuk mencegah dan mengatasi masalah-masalah yang disebabkan oleh UEFI, saya akan berbagi sedikit tips yang mungkin berguna untuk Anda. _Check it out_.

##### 1. Gunakan Distro yang Telah Support UEFI.

Hal pertama yang harus diperhatikan adalah pemilihan distro. Pastikan distro yang akan Anda gunakan sudah mendukung UEFI dan _Secure Boot_. Waktu itu distro yang pertama saya coba adalah Debian 7. Meskipun sudah support UEFI, tapi Debian 7 masih belum support _Secure Boot_. Sehingga installer tidak bisa dijalankan jika _Secure Boot_ tidak dimatikan. Jadi pastikan distro yang Anda pilih sudah mendukung keduanya.

##### 2. Buat Partisi Baru Melalui Disk Management Windows

Ini penting karena UEFI hanya mengenali partisi yang bertipe GPT. Jadi gunakan _Disk Management_ untuk mengalokasikan partisi yang akan digunakan oleh Linux.

##### 3. Lakukan Manual Partisi

Lakukan instalasi seperti biasa. Namun yang harus diperhatikan adalah saat memilih mode partisi. Pilih _Something else_ atau _Custom_ untuk membuat partisi secara manual. Di sana Anda akan menemukan partisi dengan nama UEFI. Selanjutnya silahkan lakukan partisi seperti biasanya.

##### 4. Fix Boot Loader

Jangan bingung ketika setelah melakukan instalasi Anda tidak menemukan grub Linux. Sebagian besar orang juga mengalaminya. Kita hanya perlu melakukan sedikit usaha. Ketik perintah berikut di _Command Prompt_ Windows. Sesuaikan dengan distro yang Anda gunakan.
<pre><code>bcdedit /set "{bootmgr}" path \EFI\ubuntu\grubx64.efi</code></pre><br>

##### 5. Disable Fast Boot dan Hibernate di Windows

Langkah terakhir yang perlu dilakukan adalah menonaktifkan fitur _Fast Boot_ dan _Hibernate_ Windows. Hal ini perlu dilakukan agar kita bisa membuka partisi Windows di Linux.

Disable _Fast Boot_:

1. Buka _Control Panel_.
2. Klik "System and Security".
3. Pilih "Power Options".
4. Selanjutnya pilih "Choose what the power button does".
5. Klik "Change settings that are currently unavalable".
6. Hilangkan centang pada "Turn on fast boot" dan save.

Disable Hibernate:

1. Jalankan cmd sebagai Administrator.
2. Ketikkan perintah berikut.<br>
<pre><code>powercfg -h off</code></pre>

