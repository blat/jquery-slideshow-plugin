.slideshow {
    position: relative;
    width: 450px;
    float: right;
    border: 1px solid #72797f;
    height: 245px;
}

.slideshow .previous,
.slideshow .next {
    display: none;
    position: absolute;
    top: 0;
    width: 55px;
    background: url(/img/overlay.png);
    cursor: pointer;
    padding: 106px 0;
    text-align: center;
    z-index: 100;
}

.slideshow .next {
    right: 0;
}

.slideshow li {
    position: absolute;
    top: 0;
    list-style: none;
}
.slideshow a img {
    border: none;
}

.slideshow .description {
    position: absolute;
    left: -310px;
    bottom: 10px;
    width: 300px;
    text-align: right;
    color: #EAEAEA;
}
.slideshow .description a {
    color: #EAEAEA;
    text-decoration: underline;
}
.slideshow .description img {
    border: none;
    margin-left: 5px;
}

