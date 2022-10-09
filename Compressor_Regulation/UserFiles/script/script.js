var Q0_0;

$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    setInterval(function () {
        $.getJSON("s7.html", function (result) {
            Q0_0 = result["q0_0"];
            if (Q0_0 == 1) {
                document.getElementById("state1").src = "./images/on.png";
            }
            else {
                document.getElementById("state1").src = "./images/off.png";
            }
            document.getElementById("demoGauge2_1").style.setProperty('--gauge-display-value', result["mw12"]);
            document.getElementById("demoGauge2_1").style.setProperty('--gauge-value', result["mw12"]);

        });
    }, 500);
});


function on1() {
    ulr = 's7.html';
    name = '"Tag_18"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { });
}

function release_on1(){
    ulr = 's7.html';
    name = '"Tag_18"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function off1() {
    ulr = 's7.html';
    name = '"Tag_19"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { });
}

function release_off1(){
    ulr = 's7.html';
    name = '"Tag_19"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}