// renderer.js

onload = () => {
  //   const webview = document.querySelector('webview')
  //   const indicator = document.querySelector('.indicator')

  //   const loadstart = () => {
  //     indicator.innerText = 'loading...'
  //   }

  //   const loadstop = () => {
  //     indicator.innerText = ''
  //   }

  //   webview.addEventListener('did-start-loading', loadstart)
  //   webview.addEventListener('did-stop-loading', loadstop)

	// webview.addEventListener('dom-ready', () => {
	// 	console.log('Webview Ready !')

	// 	webview.insertCSS('body{ background-color: black !important;}')
	// });

	// webview.addEventListener('console-message', (e) => {
	// 		console.log('Guest page logged a message:', e.message)
	// });
}

// const ipc = require("ipc");
// const webview = document.getElementsByClassName("tabs-pane active")[0];

// webview.addEventListener("ipc-message", function (e) {
//   if (e.channel === "window-data") {
//     // console.log(e.args[0]);

//     $(".tab.active .tab-favicon").attr("src", e.args[0].favicon);
//     $(".tab.active .tab-title").html(e.args[0].title);
//     $("#url-bar").val(e.args[0].url);

//     $("#aries-titlebar h1").html("Aries | " + e.args[0].title);
//   }

//   // TODO
//   // Make this better...cancel out setTimeout?
//   let timer;

//   if (e.channel === "mouseover-href") {
//     // console.log(e.args[0]);
//     $(".linker").html(e.args[0]).stop().addClass("active");

//     clearTimeout(timer);

//     timer = setTimeout(function () {
//       $(".linker").stop().removeClass("active");
//     }, 1500);
//   }
// });