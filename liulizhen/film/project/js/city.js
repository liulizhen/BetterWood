function City(opt) {
    this.wrap = opt.wrap;
}
City.prototype = {
    rander: function () {
        this.tep = '<div class="city">' +
            ' <header class="head">' +
            '<h1>更换城市</h1>' +
            '<span class="close">×</span>' +
            '</header>' +
            '<div class="search">' +
            '<img src="img/seach.png">' +
            '<input type="text" placeholder="找城市" class="input">' +
            '</div>' +
            '<div class="seach-city"></div>' +
            '<div class="pos">' +
            '<span class="pos-big">北京</span>' +
            '<span class="pos-small">当前定位城市</span>' +
            '</div>' +
            '<div id="wrap"><div id="scroll">' +
            '<div class="hot-city" id="hot-city"><h2>热门</h2><ul></ul></div>' +
            '<div id="list-city" class="hot-city"></div>' +
            '</div></div>' +
            '</div>';
        this.container = this.wrap.html(this.tep);
        this.init();
        this.bindEvent();
    },
    init: function () {
        var Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
        var html = "",
            str = "";
        $.each(hotList, function (key, val) {
            html += '<li> ' + val[0] + ' </li>';
        })
        for (var i = 0; i < Alphabet.length; i++) {
            str += '<h2>' + Alphabet[i] + '</h2><ul>'
            $.each(cityList, function (key, val) {
                if (val[1].charAt(0) == Alphabet[i].toLocaleLowerCase()) {
                    str += '<li class="li2">' + val[0] + '</li>'
                }
            })
            str += '</ul>';
        }
        $('#list-city').html(str);
        $('#hot-city').find('ul').html(html);
        var yourScroll;
        yourScroll = new iScroll('wrap', {
            onBeforeScrollStart: function (e) {
                var target = e.target.nodeName.toLowerCase()
                if (target != "input" && target != "select" && target != "textarea") {
                    e.preventDefault();
                }
            }
        });
    },
    bindEvent: function () {
        var that = this;
        $('.close').off().on('click', function () {
            that.hide();
        })
        $('ul').on('click', 'li', function () {
            txt = $(this).text();
            $('.pos-big').text(txt);
            tet = $('.pos-big').text();
            $('.beijing').text(tet);
        })
        $('.input').on("keyup", function () {
            if ($(this).val() != "") {
                $('.seach-city').show();
                that.findCity($(this).val());
            } else {
                $('.seach-city').hide();
            }
        })
    },
    findCity: function (value) {
        // var search = val.toUpperCase();

        var str = "";
        $.each(cityList, function (key, val) {
                console.log(value)
                console.log(val[1])
                console.log(val[1].substr(0, 1))
                console.log(val[1].substr(0, 1).indexOf(value))
                    /*if (value.length >= 1 && val[1].substr(0, 1).indexOf(value) >= 0) {
                        str += '<div>' + val[0] + '</div>';
                    } else if (value.length >= 2 && val[1].substr(0, 2).indexOf(value) >= 0) {
                        str += '<div>' + val[0] + '</div>';
                    } else if (value.length > 2 && val[1].indexOf(value) >= 0) {
                        str += '<div>' + val[0] + '</div>';
                    } else if (val[1].indexOf(value) >= 0) {
                        str += '<div>' + val[0] + '</div>';
                    }*/
            })
            // $('.seach-city').empty().html(str);
    },
    show: function () {
        this.rander();
        this.wrap.css({
            'transform': 'translateX(0)',
            'transition': 'all .7s'
        })
    },
    hide: function () {
        var that = this;
        this.wrap.css({
            'transform': 'translateX(100%)',
            'transition': 'all .7s'
        })
        setTimeout(function () {
            $('.plugin').html('')
        }, 700)
    }
}
var city = new City({
    wrap: $('.plugin')
})