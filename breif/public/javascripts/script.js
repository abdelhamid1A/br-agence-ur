$(document).ready(function () {

    function confirmPswrd() {

        var num = /[0-9]/;
        var alph = /[A-Za-z]/;
        var speCar = /\W|_/;

        //  //  //

        $("#password").keyup(function () {

            if (RegExp(num).test($("#password").val())
                ||
                RegExp(alph).test($("#password").val())
                ||
                (($("#password").val()).length < 8
                    &&
                    ($("#password").val()).length > 0)) {
                $("#faible").show(); $("#moyen").hide(); $("#fort").hide();
            }
            //
            if (
                (RegExp(num).test($("#password").val())
                    &&
                    (RegExp(alph).test($("#password").val()))
                    &&
                    ($("#password").val()).length >= 8)
                ||
                (RegExp(num).test($("#password").val())
                    &&
                    (RegExp(speCar).test($("#password").val()))
                    &&
                    ($("#password").val()).length >= 8)
                ||
                (RegExp(alph).test($("#password").val())
                    &&
                    (RegExp(speCar).test($("#password").val()))
                    &&
                    ($("#password").val()).length >= 8)
            ) {
                $("#faible").hide(); $("#moyen").show(); $("#fort").hide();
            }
            //
            if (RegExp(num).test($("#password").val())
                &&
                (RegExp(alph).test($("#password").val()))
                &&
                (RegExp(speCar).test($("#password").val()))
                &&
                ($("#password").val()).length >= 8) {
                $("#faible").hide(); $("#moyen").hide(); $("#fort").show();
            }
            //
            if (($("#password").val().length) == 0) {
                $("#faible").slideUp(); $("#moyen").slideUp(); $("#fort").slideUp();
            }

            function testPswrd() {

                $("#cnfrm-password").keyup(function () {
    
                    if (($("#cnfrm-password").val()) == ($("#password").val())) {
                        $("#cnfrm-password").css("border", "2px solid green")
                    } else {
                        $("#cnfrm-password").css("border", "2px solid red")
                    }

                    if (($("#cnfrm-password").val().length) == 0) {
                        $("#cnfrm-password").css("border", "none")
                    }
    
                })
    
            }

            testPswrd()

        })
    }

    confirmPswrd()

})