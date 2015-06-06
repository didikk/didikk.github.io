---
layout:     post
title:      Menampilkan Foto dengan Facebook API
date:       2015-06-06 8:40:20
categories: Tutorial PHP
tags:		facebook api
---

Pada artikel sebelumnya kita sudah berhasil menampilkan profil publik Facebook kita dengan PHP. Kali ini kita akan belajar menampilkan foto Facebook kita. Kita masih menggunakan proyek sebelumnya. Jadi buka kembali folder yang Anda buat sebelumnya. Buat file baru dengan nama FBPhoto.php. Tapi sebelum mengedit file tersebut, kita harus melakukan beberapa hal.

Pertama, buka [Graph API Explorer](https://developers.facebook.com/tools/explorer/). Pada dropdown Graph API Explorer, pilih aplikasi yang telah kita buat sebelumnya.

![explorer](/images/fbphoto/1.png)

Pada "Get Token" pilih "Get Access Token".

![token](/images/fbphoto/2.png)

Centang pada user_photos dan klik Get Access Token.

![photo_token](/images/fbphoto/3.png)

Kemudian pada kotak editing query ubah menjadi seperti berikut.

![query](/images/fbphoto/3a.png)

Klik Submit dan jika berhasil akan tampil seperti data foto dari profil kita.

![submit](/images/fbphoto/4.png)

Langkah berikutnya adalah mengedit file FBPhoto.php yang telah kita buat sebelumnya. Seperti biasa, sesuaikan kode di bawah dengan kebutuhan Anda.

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
FacebookSession::setDefaultApplication( '866649816735914','0bfe100ca611aff09c6a1957c2a18cb7' );

// login helper with redirect_uri

$helper = new FacebookRedirectLoginHelper('http://localhost/fbapi/FBPhoto.php' );

try {
  $session = $helper->getSessionFromRedirect();
} catch( FacebookRequestException $ex ) {
  // When Facebook returns an error
  echo $ex->getMessage();
} catch( Exception $ex ) {
  // When validation fails or other local issues
  echo $ex->getMessage();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>FB Photo</title>
  <!--Import materialize.css-->
  <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
  <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

  <!--Let browser know website is optimized for mobile-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</head>

<body>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper light-blue darken-4">
        <a href="/" class="brand-logo center">FB Photo</a>
      </div>
    </nav>
  </div>
  <div class="container">
    <div class="row">
    <?php
      if ( isset( $session ) ) { 
        // graph api request for user data
        $request = new FacebookRequest( $session, 'GET', '/me/photos?fields=images' );
        $response = $request->execute();
        // get response
        $graphObject = $response->getGraphObject()->asArray();
         $i=0;
        while (list($key, $val) = each($graphObject)) { if (is_array($val)){
          while (list($key1, $val1) = each($val)) { 
            while (list($key2, $val2) = each($val1)) { if (is_array($val2)){ 
              while (list($key3, $val3) = each($val2)) {
                while (list($key4, $val4) = each($val3)) {
                  if ($key4=="source") {$gambar[$i]=$val4;$i++;}
           
                  }
                }       
            }}
          }
        }}
        // print data
        //echo '<pre>' . print_r( $graphObject, 1 ) . '</pre>';
        for ($i=1;$i<=20;$i++){
          echo '<div class="card">
                 <div class="card-image">
                   <img src="'.$gambar[$i].'">
                 </div>
               </div>'; 
        }

      } else {
        // show login url
        echo '<br><a href="' . $helper->getLoginUrl() . '" class="btn">Login</a>';
      }
    ?>

   </div>
   <!--Import jQuery before materialize.js-->
   <script type="text/javascript" src="js/jquery.min.js"></script>
   <script type="text/javascript" src="js/materialize.min.js"></script>
 </body>
 </html>
{% endhighlight %}

Buka file tersebut di browser dan silahkan Login seperti sebelumnya.

![login](/images/fbphoto/5.png)

Jika tidak ada kesalahan, akan tampil 20 foto yang diambil dari Facebook Anda.

![photos](/images/fbphoto/6.png)

Jika Anda ingin mendownload source code di atas bisa mengunjungi halaman github saya [di sini](https://github.com/didikk/fbapi-php).