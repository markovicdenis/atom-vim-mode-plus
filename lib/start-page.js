const HOME_PAGE_URI = "atom://vim-mode-plus/home"

module.exports = class StartPage {
  constructor(URI) {
    this.uri = URI
    const container = document.createElement("div")
    this.element = container
    container.innerHTML = "<p>hello</p>"
  }
  getTitle() {
    return "vim-mode-plus statup page"
  }
  getURI(){
    return this.uri
  }
}
