import './styles.scss';

import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

var octicons = require("octicons")
var add_url_icon = octicons.plus.toSVG({ 
    "aria-label": "add url",
    "width": 50
})

var management_element = document.getElementById("management")
management_element.outerHTML += add_url_icon