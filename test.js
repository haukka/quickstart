var HttpCall = (function () {
    function HttpCall() {
    }
    HttpCall.prototype.Get = function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', encodeURI(url));
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                alert(xhr.responseText);
            }
            else {
                console.log(xhr.status);
                alert("error : " + xhr.status);
            }
        };
        xhr.send();
    };
    HttpCall.prototype.GetOne = function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', encodeURI(url));
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                alert(xhr.responseText);
            }
            else {
                console.log(xhr.status);
                alert("error : " + xhr.status);
            }
        };
        xhr.send();
    };
    HttpCall.prototype.GetOneAddresses = function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', encodeURI(url));
        xhr.onload = function () {
            if (xhr.status === 200) {
                var user = JSON.parse(xhr.responseText);
                alert(JSON.stringify(user.addresses));
            }
            else {
                console.log(xhr.status);
                alert("error : " + xhr.status);
            }
        };
        xhr.send();
    };
    HttpCall.prototype.Create = function (url, object) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', encodeURI(url));
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            if (xhr.status === 201) {
                console.log(xhr.responseText);
                alert(xhr.responseText);
            }
            else {
                console.log(xhr.status);
                alert("error : " + xhr.status);
            }
        };
        xhr.send(JSON.stringify(object));
    };
    HttpCall.prototype.Update = function (url, object) {
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', encodeURI(url));
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                alert(xhr.responseText);
            }
            else {
                console.log(xhr.status);
                alert("error : " + xhr.status);
            }
        };
        xhr.send(JSON.stringify(object));
    };
    HttpCall.prototype.Delete = function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open('Delete', encodeURI(url));
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                alert(xhr.responseText);
            }
            else {
                console.log(xhr.status);
                alert("error : " + xhr.status);
            }
        };
        xhr.send();
    };
    return HttpCall;
}());
var test = new HttpCall();
var obj = {
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "addresses": [
        {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        }
    ],
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
};
test.Get("http://json-server.azurewebsites.net/api/users"); //GET
test.GetOne("http://json-server.azurewebsites.net/api/1"); // GET one
//test.Delete("http://localhost:3000/users/2");  // DELETE
//test.GetOneAddresses("http://localhost:3000/users/10"); // GET adresses
//test.Create("http://localhost:3000/users", obj); // POST
//test.Update("http://localhost:3000/users/11", obj); // PUT