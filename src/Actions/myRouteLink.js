export default function myRouteLink( node ) {
	
	const handleClick = event => {
		event.preventDefault();

		const href = node.getAttribute('href');

		console.log(`Clicking to ${href}`)

		console.log(`Emitting route:link event`)

		if(node.classList.contains('my-navbar-link')) {
			// [...document.querySelectorAll('.my-navbar-link')].forEach(el => {
			// 	el.classList.remove('active')
			// })
			document.querySelector('.my-navbar-link.active').classList.remove('active')

			node.classList.add('active')
		}

		const customEvent = new CustomEvent('route:click', {
			detail: {
				href,
				source: event.target
			}
		})

		document.dispatchEvent(customEvent);
	}

	node.addEventListener('click', handleClick);
	
	return {
    	destroy()  {
      		node.removeEventListener('click', handleClick)
    	}
  	}
}