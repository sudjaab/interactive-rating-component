const submit_btn = document.querySelector('.submit-btn')
const rating_state = document.querySelector('.rate-state')
const thank_state = document.querySelector('.thank-state')
const ratings = document.querySelectorAll('.circle')
let score = 0

submit_btn.addEventListener('click', () => {
	rating_state.classList.add('hide')
	score.textContent = score
	thank_state.classList.remove('hide')

	document.getElementById('count').innerHTML =
		'You selected ' + score + ' out of 5'
})
ratings.forEach((rate) => {
	rate.addEventListener('click', (event) => {
		ratings.forEach((rate) => {
			rate.classList.remove('active')
		})
		if (event.target.classList.contains('active')) {
			event.target.classList.add('active')
		} else {
			event.target.classList.add('active')
		}
		score = event.target.textContent
	})
})
