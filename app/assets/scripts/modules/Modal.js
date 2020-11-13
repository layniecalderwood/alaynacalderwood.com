class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.openModalButtons = document.querySelectorAll(".open-modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }

    events() {
        // listen for open click
        this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

        // listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal())

        // pushes any key 
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    openTheModal(e) {
        e.preventDefault()
        this.modal.classList.add("modal--is-visible")

    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal()
        }
    }

    injectHTML () {
        document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
    <div class="modal__inner">
      <h2 style="margin-bottom: 0;" class="section-title section-title--blue section-title--less-margin">Get in <strong>Touch</strong></h2>
      <div class="wrapper">
        <p class="modal__description">
            Use any of these platforms to reach out! I'll be sure to get back to you as soon as I can.
        </p>
      </div>

      <div class="social-icons">
        <a href="mailto:alaynacalderwood1@gmail.com" class="social-icons__icon"><img src="assets/images/icons/email.svg" alt="Twitter"></a>
        <a href="tel:703-618-6171" class="social-icons__icon"><img src="assets/images/icons/mobile.svg" alt="Instagram"></a>
        <a target="_blank" href="https://www.linkedin.com/in/alayna-calderwood/" class="social-icons__icon"><img src="assets/images/icons/linkedin.svg" alt="Facebook"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
        `)
    }
}

export default Modal