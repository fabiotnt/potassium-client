<?php defined('SYSPATH') OR die('No direct script access.'); ?>

2015-04-13 22:52:57 --- EMERGENCY: Kohana_Exception [ 0 ]: A valid cookie salt is required. Please set Cookie::$salt in your bootstrap.php. For more information check the documentation ~ SYSPATH/classes/Kohana/Cookie.php [ 158 ] in /Volumes/Things/Projects/BananaGroove/git/potassium-client/build/system/classes/Kohana/Cookie.php:67
2015-04-13 22:52:57 --- DEBUG: #0 /Volumes/Things/Projects/BananaGroove/git/potassium-client/build/system/classes/Kohana/Cookie.php(67): Kohana_Cookie::salt('session', NULL)
#1 /Volumes/Things/Projects/BananaGroove/git/potassium-client/build/system/classes/Kohana/Request.php(151): Kohana_Cookie::get('session')
#2 /Volumes/Things/Projects/BananaGroove/git/potassium-client/build/index.php(117): Kohana_Request::factory(true, Array, false)
#3 {main} in /Volumes/Things/Projects/BananaGroove/git/potassium-client/build/system/classes/Kohana/Cookie.php:67