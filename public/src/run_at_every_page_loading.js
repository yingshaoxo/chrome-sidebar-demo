new_tag = `
    <style>
        .side_iframe {
            height: 100%; /* Full-height: remove this if you want "auto" height */
            width: 1px; /* Set the width of the sidebar */
            position: fixed; /* Fixed Sidebar (stay in place on scroll) */
            z-index: 999999; /* Stay on top */
            top: 0; /* Stay at the top */
            left: 0;

            overflow-x: hidden; /* Disable horizontal scroll */
            frameborder: 0;
            scrolling: no;
        }
    </style>

    <iframe
        id = "ys_frame"
        src = "${chrome.runtime.getURL('index.html')}"
        class = "side_iframe"
    ></iframe>
`


var html_element = document.getElementsByTagName("html")[0]
html_element.insertAdjacentHTML('afterbegin', new_tag)

var ys_frame = document.getElementById("ys_frame");

function mouse_in() {
    console.log("in");
    ys_frame.style.width = "10vw";
}

function mouse_out() {
    console.log("out");
    ys_frame.style.width = "1px";
}

ys_frame.onmouseover = mouse_in;
ys_frame.onmouseout = mouse_out;

var current_time = Date.now().toLocaleString()
console.log(current_time)
