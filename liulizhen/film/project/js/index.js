alert(1)
(function ($) {
    $.ajax({
        url: "data/data.json",
        type: "post",
        dataType: "json",
        success: function (data) {
            var str = "",
                cinema = data.cinemaInfo;
            if (data.result == 0) {
                $.each(cinema, function (key, val) {
                    // <div class="info">
                    //     <h5>回龙观沃美影城</h5>
                    //     <p>昌平区回龙观育知东路30号华联商厦4层<span>5km</span></p>
                    //     <p class="p4">可退票</p><p class="p3">新野蛮女友 特惠</p>
                    // </div>
                    str += '<div class="info">' +
                            '<h5>' + val.cinemaName + '</h5>' +
                            '<p>' + val.cinemaAdd + '<span>5km</span></p>' +
                            '<p class="p3"><small>ATMOS</small></p>' +
                        '</div>';
                })

            }
            $('.section').append(str);
            // var myScroll;
            // myScroll = new iScroll("section", {
            //     onBeforeScrollStart: function (e) {
            //         var target = e.target.nodeName.toLowerCase()
            //         if (target != "input" && target != "select" && target != "textarea") {
            //             e.preventDefault();
            //         }
            //     }
            // })
            // document.addEventListener('touchmove', function (e) {
            //     e.preventDefault();
            // }, false)
        }
    })

    $('.beijing').on('click', function () {
        city.show();
    })

})(jQuery)