document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year')
    if (year) year.textContent = new Date().getFullYear()

    const form = document.getElementById('contactForm')
    const status = document.getElementById('formStatus')
    if (form && status) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const data = new FormData(form)
            // Minimal client-side feedback; in a real app we'd POST to an API
            status.textContent = 'Sending...'
            setTimeout(() => {
                status.textContent = 'Thanks! We received your message.'
                form.reset()
            }, 700)
        })
    }
})
