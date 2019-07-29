$.fn.extend({
    clock: function() {
        var HL = {};
        HL.$el = $(this);
        HL.ZHCNArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        var _0xfa64 = ["\x63\x68\x61\x6E\x67\x65\x5A\x48\x43\x4E", "\x5A\x48\x43\x4E\x41\x72\x72", "", "\x63\x68\x61\x72\x41\x74"];
        HL[_0xfa64[0]] = function(_0x7c14x1) {
            if (_0x7c14x1 < 10) {
                return this[_0xfa64[1]][_0x7c14x1]
            }
            ;var _0x7c14x2 = _0x7c14x1.toString()
              , _0x7c14x3 = _0xfa64[2];
            if (_0x7c14x2[_0xfa64[3]](1) == 0) {
                if (_0x7c14x2[_0xfa64[3]](0) != 1) {
                    _0x7c14x3 = this[_0xfa64[1]][parseInt(_0x7c14x2[_0xfa64[3]](0), 10)]
                }
                ;_0x7c14x3 += this[_0xfa64[1]][10];
                return _0x7c14x3
            }
            ;if (_0x7c14x1 < 20) {
                _0x7c14x3 = this[_0xfa64[1]][10] + this[_0xfa64[1]][parseInt(_0x7c14x2[_0xfa64[3]](1), 10)];
                return _0x7c14x3
            }
            ;_0x7c14x3 = this[_0xfa64[1]][parseInt(_0x7c14x2[_0xfa64[3]](0), 10)] + this[_0xfa64[1]][10] + this[_0xfa64[1]][parseInt(_0x7c14x2[_0xfa64[3]](1), 10)];
            return _0x7c14x3
        }
        var _0x5d71 = ["\x73\x65\x74\x44\x61\x74\x65", "", "\x79\x65\x61\x72", "\x64\x61\x74\x65\x49\x6E\x66\x6F", "\x6C\x65\x6E\x67\x74\x68", "\x63\x68\x61\x72\x41\x74", "\x63\x68\x61\x6E\x67\x65\x5A\x48\x43\x4E", "\x6D\x6F\x6E\x74\x68", "\x64\x61\x79", "\x65\x6C\x73", "\u5E74", "\u6708", "\u65E5", "\x68\x74\x6D\x6C", "\x64\x61\x74\x65", "\x3C\x6C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x64\x61\x74\x65\x22\x3E", "\x3C\x2F\x6C\x69\x3E", "\x61\x70\x70\x65\x6E\x64", "\x24\x65\x6C", "\x73\x65\x74\x48\x6F\x75\x72", "\x70\x75\x73\x68", "\x3C\x64\x69\x76\x3E\x3C\x64\x69\x76\x3E", "\u65F6\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E", "\x3C\x6C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x68\x6F\x75\x72\x20\x6F\x6E\x2D\x68\x6F\x75\x72\x22\x3E", "\x72\x6F\x74\x61\x74\x65\x28", "\x64\x65\x67\x29", "\x63\x73\x73", "\x65\x61\x63\x68", "\x2E\x6F\x6E\x2D\x68\x6F\x75\x72\x3E\x64\x69\x76", "\x66\x69\x6E\x64", "\x73\x65\x74\x4D\x69\x6E\x75\x74\x65"];
        HL[_0x5d71[0]] = function() {
            var _0xfefex1 = _0x5d71[1]
              , _0xfefex2 = _0x5d71[1]
              , _0xfefex3 = _0x5d71[1];
            var _0xfefex4 = this[_0x5d71[3]][_0x5d71[2]].toString();
            for (var _0xfefex5 = 0; _0xfefex5 < _0xfefex4[_0x5d71[4]]; _0xfefex5++) {
                _0xfefex1 += this[_0x5d71[6]](parseInt(_0xfefex4[_0x5d71[5]](_0xfefex5), 10))
            }
            ;_0xfefex2 = this[_0x5d71[6]](this[_0x5d71[3]][_0x5d71[7]]);
            _0xfefex3 = this[_0x5d71[6]](this[_0x5d71[3]][_0x5d71[8]]);
            if (this[_0x5d71[9]]) {
                this[_0x5d71[9]][_0x5d71[14]][_0x5d71[13]](_0xfefex1 + _0x5d71[10] + _0xfefex2 + _0x5d71[11] + _0xfefex3 + _0x5d71[12])
            } else {
                this[_0x5d71[18]][_0x5d71[17]](_0x5d71[15] + (_0xfefex1 + _0x5d71[10] + _0xfefex2 + _0x5d71[11] + _0xfefex3 + _0x5d71[12]) + _0x5d71[16])
            }
        }
        ;
        HL[_0x5d71[19]] = function() {
            var _0xfefex6 = _0x5d71[1]
              , _0xfefex7 = [];
            for (var _0xfefex5 = 1; _0xfefex5 <= 24; _0xfefex5++) {
                _0xfefex7[_0x5d71[20]](r = 360 / 24 * (_0xfefex5 - 1) * -1);
                _0xfefex6 += _0x5d71[21] + (this[_0x5d71[6]](_0xfefex5)) + _0x5d71[22]
            }
            ;this[_0x5d71[18]][_0x5d71[17]](_0x5d71[23] + _0xfefex6 + _0x5d71[16]);
            setTimeout(function() {
                HL[_0x5d71[18]][_0x5d71[29]](_0x5d71[28])[_0x5d71[27]](function(_0xfefex8, _0xfefex9) {
                    $(_0xfefex9)[_0x5d71[26]]({
                        "\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D": _0x5d71[24] + _0xfefex7[_0xfefex8] + _0x5d71[25]
                    })
                });
                setTimeout(function() {
                    HL[_0x5d71[30]]()
                }, 300)
            }, 100)
        }
        HL.setMinute = function() {
            var str = ''
              , rotateArr = [];
            for (var i = 1; i <= 60; i++) {
                rotateArr.push(360 / 60 * (i - 1) * -1);
                str += '<div><div>' + (this.changeZHCN(i)) + '分</div></div>';
            }
            this.$el.append('<li class="hour minute on-minute">' + str + '</li>');
            setTimeout(function() {
                HL.$el.find(".on-minute>div").each(function(index, el) {
                    $(el).css({
                        "transform": "rotate(" + rotateArr[index] + "deg)"
                    })
                });
                setTimeout(function() {
                    HL.setSec();
                }, 300)
            }, 100);
        }
        ;
        HL.setSec = function() {
            var str = ''
              , rotateArr = [];
            for (var i = 1; i <= 60; i++) {
                rotateArr.push(360 / 60 * (i - 1) * -1);
                str += '<div><div>' + (this.changeZHCN(i)) + '秒</div></div>';
            }
            this.$el.append('<li class="hour sec on-sec">' + str + '</li>');
            setTimeout(function() {
                HL.$el.find(".on-sec>div").each(function(index, el) {
                    $(el).css({
                        "transform": "rotate(" + rotateArr[index] + "deg)"
                    })
                });
                setTimeout(function() {
                    HL.initRotate();
                }, 1300);
            }, 100);
        }
        ;
        HL.initRotate = function() {
            this.rotateInfo = {
                "h": 360 / 24 * (this.dateInfo.hour - 1),
                "m": 360 / 60 * (this.dateInfo.minute - 1),
                "s": 360 / 60 * (this.dateInfo.sec - 1),
            };
            this.els = {
                "date": this.$el.find(".date"),
                "hour": this.$el.find(".on-hour"),
                "minute": this.$el.find(".on-minute"),
                "sec": this.$el.find(".on-sec")
            };
            this.els.hour.css({
                "transform": "rotate(" + this.rotateInfo.h + "deg)"
            });
            this.els.minute.css({
                "transform": "rotate(" + this.rotateInfo.m + "deg)"
            });
            this.els.sec.css({
                "transform": "rotate(" + this.rotateInfo.s + "deg)"
            });
            setTimeout(function() {
                HL.$el.find("hr").addClass("active").css({
                    "width": "49%"
                });
                HL.start();
            }, 300);
        }
        ;
        HL.start = function() {
            setTimeout(function() {
                if (HL.dateInfo.sec <= 60) {
                    HL.dateInfo.sec++;
                    var r = 360 / 60 * (HL.dateInfo.sec - 1);
                    HL.els.sec.css({
                        "transform": "rotate(" + r + "deg)"
                    });
                    HL.minuteAdd();
                    HL.start();
                } else {
                    console.log(HL.dateInfo.sec)
                }
            }, 1000);
        }
        ;
        HL.minuteAdd = function() {
            if (HL.dateInfo.sec == 60 + 1) {
                setTimeout(function() {
                    HL.els.sec.css({
                        "transform": "rotate(0deg)",
                        "transition-duration": "0s"
                    });
                    HL.dateInfo.sec = 1;
                    setTimeout(function() {
                        HL.els.sec.attr("style", "transform:rotate(0deg)");
                    }, 100);
                    HL.dateInfo.minute++;
                    var r = 360 / 60 * (HL.dateInfo.minute - 1);
                    HL.els.minute.css({
                        "transform": "rotate(" + r + "deg)"
                    });
                    HL.hourAdd();
                }, 300);
            }
        }
        ;
        HL.hourAdd = function() {
            if (HL.dateInfo.minute == 60 + 1) {
                setTimeout(function() {
                    HL.els.minute.css({
                        "transform": "rotate(0deg)",
                        "transition-duration": "0s"
                    });
                    HL.dateInfo.minute = 1;
                    setTimeout(function() {
                        HL.els.minute.attr("style", "transform:rotate(0deg)");
                    }, 100);
                    HL.dateInfo.hour++;
                    var r = 360 / 24 * (HL.dateInfo.hour - 1);
                    HL.els.hour.css({
                        "transform": "rotate(" + r + "deg)"
                    });
                    HL.dayAdd();
                }, 300);
            }
        }
        ;
        HL.dayAdd = function() {
            if (HL.dateInfo.hour == 24 + 1) {
                setTimeout(function() {
                    HL.els.hour.css({
                        "transform": "rotate(0deg)",
                        "transition-duration": "0s"
                    });
                    HL.dateInfo.hour = 1;
                    setTimeout(function() {
                        HL.els.hour.attr("style", "transform:rotate(0deg)");
                    }, 100);
                    var nowDate = new Date();
                    HL.dateInfo.year = nowDate.getFullYear();
                    HL.dateInfo.month = nowDate.getMonth() + 1;
                    HL.dateInfo.day = nowDate.getDate();
                    HL.setDate();
                }, 300);
            }
        }
        ;
        HL.init = function() {
            var nowDate = new Date();
            this.dateInfo = {
                "year": nowDate.getFullYear(),
                "month": nowDate.getMonth() + 1,
                "day": nowDate.getDate(),
                "hour": nowDate.getHours(),
                "minute": nowDate.getMinutes(),
                "sec": nowDate.getSeconds()
            };
            console.log(this.dateInfo);
            this.setDate();
            this.setHour();
        }
        ;
        HL.init();
    }
});
