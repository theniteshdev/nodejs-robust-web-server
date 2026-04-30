document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year')
    if (y) y.textContent = new Date().getFullYear()
    const form = document.getElementById('contactForm')
    const status = document.getElementById('status')
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (status) status.textContent = 'Sending...'
            setTimeout(() => { if (status) status.textContent = 'Sent — thanks!'; form.reset() }, 600)
        })
    }
})
