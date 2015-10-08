/*	// Create the XHR object.
	
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
	console.log("it is not working");

  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // All HTML5 Rocks properties support CORS.
  var url = 'https://github.com/andysm1th/Data/blob/master/tester.json';
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    $.getJSON(url, function(data) {
        var output="<ul>";
        for (var i in data.users) {
            output+="<li>" + data.users[i].firstName + " " + data.users[i].lastName + "--" + data.users[i].joined.month+"</li>";
        }

        output+="</ul>";
        document.getElementById("placeholder").innerHTML=output;
  });
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
*/
	/*function loadData() {
	$.ajax({
  dataType: 'jsonp',
  data: 'id=10',
  url: 'https://github.com/andysm1th/Data/blob/master/tester.json',
  success: function () {
 $.getJSON(url, function(data) {
        var output="<ul>";
        for (var i in data.users) {
            output+="<li>" + data.users[i].firstName + " " + data.users[i].lastName + "--" + data.users[i].joined.month+"</li>";
        }

        output+="</ul>";
        document.getElementById("placeholder").innerHTML=output;
  });
  },
});
	} */
	
	function loadData() {
	(function($) {
	var url = 'https://github.com/andysm1th/Data/blob/master/tester.json';
	// url = 'C:\Users/asmith/Desktop/feeder.json';
	$.ajax({
	   type: 'GET',
		url: url,
		async: false,
		contentType: "application/json",
		dataType: 'jsonp'
	});
})(jQuery);
	}
