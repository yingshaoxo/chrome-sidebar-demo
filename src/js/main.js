import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/Navigation';

class App extends React.Component {
    render() {
        return (
            <Navigation></Navigation>
        )
    }
}

// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
  // If message is injectApp
    if(request.injectApp) {
        // Inject our app to DOM and send response
        injectApp();
        
        response({
            startedExtension: true,
        });
  }
});

function send_msg_to_background(msg) {
    chrome.runtime.sendMessage({
        do: "true"
    }, function(response) {});
}

function injectApp() {
    var id = "chrome_sidebar_demo_dom"
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", id);

    ReactDOM.render(<App />, newDiv);

    var html_element = document.getElementsByTagName("html")[0]
    html_element.insertAdjacentHTML('afterbegin', newDiv.innerHTML)

    /*
    var id = "chrome_sidebar_demo_dom"
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", id);
    document.body.appendChild(newDiv);
    ReactDOM.render(<App />, newDiv);
    */
}

injectApp()
