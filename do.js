new_tag = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.0/css/all.css" integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h" crossorigin="anonymous">

    <style>
        @import "${chrome.runtime.getURL('do.css')}";
    </style>

    <span id="ys_arrow" class="side_button" style="font-size: 3em; color: Tomato;">
        <i class="fas fa-angle-double-down"></i>
    </span>

    <div 
        id="ys_navigation"
        class="side_navigation"
    >
    </div>
`


var html_element = document.getElementsByTagName("html")[0]
html_element.insertAdjacentHTML('afterbegin', new_tag)

var arrow = document.getElementById("ys_arrow");
var navigation = document.getElementById("ys_navigation");

function mouse_in() {
    console.log("in");
    navigation.style.display = "block";
}

function mouse_out() {
    console.log("out");
    navigation.style.display = "none";
}

arrow.onmouseover = mouse_in;
arrow.onmouseout = mouse_out;

console.log("done")
