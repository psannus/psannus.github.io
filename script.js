function getCoupon() {
	document.getElementById("qr").setAttribute("src","");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://analytics.internationalservicecheck.com/QRCodeGenerator/Baltics_Code.aspx?ctry=ee", false); // false for synchronous request
    xmlHttp.send(null);
    var code = xmlHttp.responseText;
    document.getElementById("generated-code").value = code;
    document.getElementById("qr").setAttribute("src","https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+code);
}