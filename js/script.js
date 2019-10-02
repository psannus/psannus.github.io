var clientAllowed = false;

function getCoupon() {
	if (!clientAllowed) {
		return;
	}
	document.getElementById("qr").setAttribute("src","");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://analytics.internationalservicecheck.com/QRCodeGenerator/Baltics_Code.aspx?ctry=ee", false); // false for synchronous request
    xmlHttp.send();
    var code = xmlHttp.responseText;
    document.getElementById("generated-code").value = code;
    document.getElementById("qr").setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + code);
}

window.addEventListener("load", function() {
    if (document.cookie.includes("safecookie=safevalue")) {
        clientAllowed = true;
        document.getElementById("generate-button").disabled = false;
        getCoupon();
    } else {
        document.getElementById("generated-code").value = "sorry 🥺";
        document.getElementById("text").innerHTML = "Sorry! 😔 This has been great fun, but recently this page has gotten too many visitors, and because of this, I must close it.<br><a href='https://github.com/psannus'>🎉 Follow me on GitHub</a><br>and if you have any questions...<br><a href='mailto:petersten.annus@gmail.com'>you can contact me via email</a> 😎";
    }
}, false);
