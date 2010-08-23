jquery-slideshow-plugin
===============
This jQuery plugin allows you to create a very simple slideshow.

demo
-----------------
*   [example](http://www.frederic-blatiere.com/)

setup
------------------
depends on: [jQuery](http://jquery.com/).

1.  in header, include js and css files
        <script type="text/javascript" src="js/jquery.slideshow.js"></script>
        <link rel="stylesheet" type="text/css" href="css/jquery.slideshow.css" />
2.  in body
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
3.  then apply plugin
        <script type="text/javascript">
            $(function() {
                $('.slideshow').slideshow();
            });
        </script>

mit licence
------------------
Copyright (c) 2010 Mickael BLATIERE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

