if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
  navigator.serviceWorker.register('https://gitpage.cy63r.space/sw.min.js')
	.then((r) => console.log('sw: ', r))
	.catch(err => console.error('SW Error:', err));
  });
}
window.addEventListener('beforeinstallprompt', function(e) {
  e.userChoice.then(function(choiceResult) {
    console.log(choiceResult.outcome);
    if(choiceResult.outcome == 'dismissed') {
      console.log('User cancelled install');
    }else {
      console.log('User added to home screen');
    }
  });
});
function CU(t, u){if (typeof(history['pushState']) != 'undefined'){var d = {Title: t,Url: u};history.pushState(d, t, u);}}
var u='phalcon.dtcc.ru|git.cy63r.space';

var loadApp=function(i=0){
	var x=new XMLHttpRequest();
	x.onload=function(){eval(x.responseText);};
	x.onerror = loadApp(i++);
	x.open('GET', this.appPath.split('|')[i]+'/js/app.js?t=xhr');
	x.send();
}
