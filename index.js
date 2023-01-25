// Sidebar Elements

const menuIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.fa-xmark')
const sidebar = document.querySelector('.sidebar')

// Navbar Links

const logo = document.querySelector('.logo')
const methodLink = document.querySelector('.dientitos-method-link')
const dentalServicesLink = document.querySelector('.dental-services-link')
const contactUsLink = document.querySelector('.contact-us-link')
const bookAppointment= document.querySelector('.book-appointment')

// Sections

const heroSection = document.querySelector('.hero')
const methodSection = document.querySelector('.method-section')
const dentalServicesSection = document.querySelector('.dental-services-section')
const contactUsSection = document.querySelector('.contact-section')

// Hide Show Sidebar

const hideSideBar = () => {
    sidebar.style.transform = 'translateY(-110%)'
}

menuIcon.addEventListener('click', () => {
    sidebar.style.transform = 'translateY(0)'
})

closeIcon.addEventListener('click', () => {
    hideSideBar()
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 760) {
      hideSideBar()
    }
})

// Set Sections

const setPage = (currentPage) => {
        heroSection.style.opacity = '0'
        methodSection.style.opacity = '0'
        dentalServicesSection.style.opacity = '0'
        contactUsSection.style.opacity = '0'

        heroSection.style.position = 'fixed'
        dentalServicesSection.style.position = 'fixed'
        methodSection.style.position = 'fixed'
        contactUsSection.style.position = 'fixed'

    if(currentPage === 0) {
        heroSection.style.transform = 'translateX(0)'
        methodSection.style.transform = 'translateX(100%)'
        dentalServicesSection.style.transform = 'translateX(100%)'
        contactUsSection.style.transform = 'translateX(100%)'

        heroSection.style.opacity = '1'
        heroSection.style.position = 'absolute'
    }
    if(currentPage === 1) {
        heroSection.style.transform = 'translateX(-100%)'
        methodSection.style.transform = 'translateX(0)'
        dentalServicesSection.style.transform = 'translateX(100%)'
        contactUsSection.style.transform = 'translateX(100%)'  

        methodSection.style.opacity = '1'
        methodSection.style.position = 'absolute'
    }
    if(currentPage === 2) {
        
        heroSection.style.transform = 'translateX(-100%)'
        methodSection.style.transform = 'translateX(-100%)'
        dentalServicesSection.style.transform = 'translateX(0)'
        contactUsSection.style.transform = 'translateX(100%)'  
        
        dentalServicesSection.style.opacity = '1'
        dentalServicesSection.style.position = 'absolute'
    }
    if(currentPage === 3) {
        heroSection.style.transform = 'translateX(-100%)'
        methodSection.style.transform = 'translateX(-100%)'
        dentalServicesSection.style.transform = 'translateX(-100%)'
        contactUsSection.style.transform = 'translateX(0)'  

        contactUsSection.style.opacity = '1'
        contactUsSection.style.position = 'absolute'
    }
    hideSideBar()
}

setPage(0)

logo.addEventListener('click', () => {
    setPage(0)
})

methodLink.addEventListener('click', () => {
    setPage(1)
})

dentalServicesLink.addEventListener('click', () => {
    setPage(2)
})

contactUsLink.addEventListener('click', () => {
    setPage(3)
})
