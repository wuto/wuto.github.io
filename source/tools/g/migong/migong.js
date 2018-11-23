(function mapGen(b, c, e, a, m) {
    function character(a, b) {
        var h = d.getImageData(13 * f + 7 + 6 * a, 13 * g + 7 + 6 * b, 1, 1);
        0 == h.data[0] && 0 == h.data[1] && 0 == h.data[2] && 255 == h.data[3] ? a = b = 0 : document.querySelector("#step").innerHTML = Math.floor(document.querySelector("#step").innerHTML) + 1;
        d.clearRect(13 * f + 3, 13 * g + 3, 10, 10);
        f += a;
        g += b;
        d.fillRect(3 + 13 * f, 3 + 13 * g, 10, 10);
        f >= c && mapGen("#canvas", c, e, 0, m + 1)
    }
    b = document.querySelector(b);
    var d = b.getContext("2d");
    document.querySelector("#step").innerHTML = Math.floor(a);
    document.querySelector("#complete").innerHTML = Math.floor(m);
    b.width = 13 * c + 3;
    b.height = 13 * e + 3;
    d.fillStyle = "black";
    d.fillRect(0, 0, 13 * c + 3, 13 * e + 3);
    a = Array(c);
    b = Array(c);
    var k = Array(c),
    q = 1;
    for (cr_l = 0; cr_l < e; cr_l++) {
        for (i = 0; i < c; i++) 0 == cr_l && (a[i] = 0),
        d.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 10),
        k[i] = 0,
        1 == b[i] && (b[i] = a[i] = 0),
        0 == a[i] && (a[i] = q++);
        for (i = 0; i < c; i++) {
            k[i] = Math.floor(2 * Math.random()),
            b[i] = Math.floor(2 * Math.random());
            if ((0 == k[i] || cr_l == e - 1) && i != c - 1 && a[i + 1] != a[i]) {
                var l = a[i + 1];
                for (j = 0; j < c; j++) a[j] == l && (a[j] = a[i]);
                d.clearRect(13 * i + 3, 13 * cr_l + 3, 15, 10)
            }
            cr_l != e - 1 && 0 == b[i] && d.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 15)
        }
        for (i = 0; i < c; i++) {
            var p = l = 0;
            for (j = 0; j < c; j++) a[i] == a[j] && 0 == b[j] ? p++:l++;
            0 == p && (b[i] = 0, d.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 15))
        }
    }
    d.clearRect(13 * c, 3, 15, 10);
    var f = 0,
    g = 0;
    d.fillStyle = "red";
    character( - 1, -1);
    document.body.onkeydown = function(a) {
        a.preventDefault();
        36 < a.keyCode && 41 > a.keyCode && character((a.keyCode - 38) % 2, (a.keyCode - 39) % 2)
    }
})("#canvas", 25, 30, 0, 0);