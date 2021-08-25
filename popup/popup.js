var link = window.location;
//if(link)
var url = link.search.split("v=")[1];



// $.ajax({url: 'https://vil.systems/views/getadhd.api.php?v='+ url +'',
// dataType: "jsonp",
// headers: {'Access-Control-Allow-Origin':'*'},
// success: function(result){
//     console.log($getJSON(result));
//     // $('#gameplay-perc').prepend(result);
// },
// error: function(result){
//     console.log(result);
//     $('#gameplay-perc').prepend(result.responseText);
// }
// });

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            $('#gameplay-perc').prepend(this.responseText);
        }
    };
    xhttp.open("GET", 'https://vil.systems/views/getadhd.api.php?v='+ url +'', true);
    xhttp.send();
}

loadXMLDoc();