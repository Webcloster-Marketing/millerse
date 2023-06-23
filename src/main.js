import 'remixicon/fonts/remixicon.css'
import './style.css'

import Alpine from 'alpinejs'

// init Alpine
window.Alpine = Alpine



Alpine.data('globaldata', () => ({
	modal1: false, // grupo cantar
	modal2: false, // biografia
	modal3: false, // fundación

	toggleM1 () {
		this.modal1 = !this.modal1
		this.toggleScroll(this.modal1)
	},
	toggleM2 () {
		this.modal2 = !this.modal2
		this.toggleScroll(this.modal2)
	},
	toggleM3 () {
		this.modal3 = !this.modal3
		this.toggleScroll(this.modal3)
	},

	// Media
	social: {
		web: 'https://www.cantardelllano.com',
		facebook: 'https://www.facebook.com/miller.espinosa',
		instagram: 'https://www.instagram.com/millersantanilla/',
		youtube: 'https://www.youtube.com/channel/UC1I-4KULyEob7dQaMA5Musw',
		whatsapp: 'https://wa.me/573155642410'
	},

  toggleScroll (modal) {
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
}))

Alpine.start()
