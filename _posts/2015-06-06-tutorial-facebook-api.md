---
layout:     post
title:      Tutorial Facebook API
date:       2015-06-06 8:30:20
categories: Tutorial PHP
tags:		facebook api
---

Pada kesempatan kali ini saya akan berbagi cara penggunaan Facebook API dengan PHP. Kebetulan juga saya mendapat tugas ini di kampus. Pada contoh ini kita hanya akan mencoba menampilkan profil publik dari akun Facebook kita. Jadi semoga bisa membantu untuk yang sedang mengerjakannya. 

Oke, hal pertama yang harus dilakukan adalah mendaftarkan diri kita sebagai developer di [developers.facebook.com](http://developers.facebook.com). Klik "My Apps" dan pilih Register.

![register](/images/fbapi/1.png)

Setelah berhasil kita harus membuat aplikasi baru agar bisa menggunakan Facebook API. Kembali klik menu "My Apps" -> "Add a New App". Karena kita akan membuat aplikasi berbasis PHP maka yang kita pilih adalah "WWW".

![www](/images/fbapi/2.png)

Beri nama aplikasi yang kita buat. Sebagai catatan saja, nama aplikasi kita tidak boleh mengandung kata fb atau facebook.

![name](/images/fbapi/3.png)

Kita juga diwajibkan memilih kategori aplikasi yang kita buat.

![category](/images/fbapi/4.png)

Setelah berhasil membuat aplikasi baru, kita harus mengisi url website yang kita bangun. URL ini harus sama dengan alamt di mana kita akan menjalankan file PHP nantinya. Sebagai contoh URL web saya adalah http://localhost/fbapi/

![url](/images/fbapi/9.png)

Sampai di sini aplikasi kita sudah siap digunakan. Untuk mengetahui App ID dan App Secret dari aplikasi kita, buka My Apps -> nama aplikasi yang dibuat. Akan tampil dashboard seperti berikut.

![register](/images/fbapi/8.png)

 Berikutnya kita akan mulai menulis program di PHP. Sebelum itu kita harus mendownload facebook php sdk  [di sini](https://github.com/facebook/facebook-php-sdk-v4). Ekstrak sdk tersebut dan copykan ke folder di mana Anda akan menjalankan aplikasi ini. Misal: C:\xampp/htdocs/fbapi/. Rename folder sdk tersebut menjadi facebook-php-sdk.

Buat file baru dengan nama FBTest.php. Copy kode di bawah ini dan sesuaikan beberapa kode dengan aplikasi Anda. Seperti App ID dan App Secret.

{% highlight php %}
<?php
session_start();

require_once 'facebook-php-sdk/autoload.php';

// Make sure to load the Facebook SDK for PHP via composer or manually

use Facebook\FacebookSession;
use Facebook\FacebookRedirectLoginHelper;
use Facebook\FacebookRequest;


// start session

// init app with app id and secret
FacebookSession::setDefaultApplication( 'APP_ID','APP_SECRET' );

// login helper with redirect_uri

$helper = new FacebookRedirectLoginHelper('http://localhost/fbapi/FBTest.php' );

try {
  $session = $helper->getSessionFromRedirect();
} catch( FacebookRequestException $ex ) {
  // When Facebook returns an error
  echo $ex->getMessage();
} catch( Exception $ex ) {
  // When validation fails or other local issues
  echo $ex->getMessage();
}

// see if we have a session
if ( isset( $session ) ) {
  // graph api request for user data
  $request = new FacebookRequest( $session, 'GET', '/me' );
  $response = $request->execute();
  // get response
  $graphObject = $response->getGraphObject();

  // print data
  echo '<pre>' . print_r( $graphObject, 1 ) . '</pre>';


} else {
  // show login url
  echo '<a href="' . $helper->getLoginUrl() . '">Login</a>';
}

?>
{% endhighlight %}

Selanjutnya coba buka file tersebut di browser.

![browser](/images/fbapi/5.png)

Klik login dan izinkan aplikasi mengakses profil publik Anda.

![allow](/images/fbapi/6.png)

Jika tidak ada kesalahan, akan tampil informasi diri Anda seperti berikut.

![profile](/images/fbapi/7.png)

Anda bisa mendownload file FBTest.php [di sini](https://github.com/didikk/fbapi-php/blob/master/FBTest.php)