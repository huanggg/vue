  keyup(e) {
            var that = this
            if (e.keyCode != 38 || e.keyCode != 40 || e.keyCode != 13) {
                clearTimeout(window.settime)
                window.settime = setTimeout(function () {
                    that.Obtain()
                }, 2000)

            }
        },
