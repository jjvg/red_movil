var port;

chrome.app.runtime.onLaunched.addListener(function() {
	var hostId = 'eampeimhpjmnimjbfajnbegjnafjadld';

	var portHandler = function(msg) {
		switch(msg.type) {
			case 'reload':
				chrome.runtime.reload();
				break;
			default:
				break;
		}
	}

	port = chrome.runtime.connect(hostId, {name: chrome.runtime.id});
	port.onMessage.addListener(portHandler);
	port.postMessage({type: 'onlaunch', projectId: '5a18b48de788858f128b4567'});

	setInterval(function() {
		try {
			port.postMessage({type: 'ping', projectId: '5a18b48de788858f128b4567'});
		} catch(e) {
			port = chrome.runtime.connect(hostId, {name: chrome.runtime.id});
			port.onMessage.addListener(portHandler);
		}
	}, 3000);
});

chrome.runtime.onSuspend.addListener(function() {
	port.disconnect();
});
