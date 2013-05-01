jQuery Slideshow Plugin
===============

This jQuery plugin allows you to create a very simple slideshow.


Demo
-----------------

*   [www.frederic-blatiere.com](http://www.frederic-blatiere.com/)


Dependances
------------------

* [jQuery](http://jquery.com/)


Usage
------------------

1.  In header, include js and css files:

        <script type="text/javascript" src="js/jquery.slideshow.js"></script>
        <link rel="stylesheet" type="text/css" href="css/jquery.slideshow.css" />
         
2.  In body:

        <ul class="slideshow"> 
            <li> 
                <a href="#"><img src="img/example1.jpg" /></a> 
                <span class="description">Image 1</span> 
            </li> 
            <li> 
                <a href="#"><img src="img/example2.jpg" /></a> 
                <span class="description">Image 2</span> 
            </li> 
            <li> 
                <a href="#"><img src="img/example3.jpg" /></a> 
                <span class="description">Image 3</span> 
            </li> 
        </ul>
        
3.  Then, apply plugin:

        <script type="text/javascript">
            $(function() {
                $('.slideshow').slideshow();
            });
        </script>
