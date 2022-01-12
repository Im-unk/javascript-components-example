class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="header">
      <ul class="menu">
          <li class="menu-item">Home</li>
          <li class="menu-item">Products</li>
          <a href="#"><img class="menu-logo" src="./images/25231.png" alt="logo"></a>
          <li class="menu-item">About</li>
          <li class="menu-item">Contact</li>
      </ul>
  </div>`;
  }
}

window.customElements.define("custom-header", MyHeader);

class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <div class="footer">
        <div class="footer-column-wrapper">
            <div class="footer-column">
                <h3>Services</h3>
                <hr />
                <ul>
                    <li>service one</li>
                    <li>service two</li>
                    <li>service three</li>
                    <li>service four</li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Services</h3>
                <hr />
                <ul>
                    <li>service one</li>
                    <li>service two</li>
                    <li>service three</li>
                    <li>service four</li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Services</h3>
                <hr />
                <ul>
                    <li>service one</li>
                    <li>service two</li>
                    <li>service three</li>
                    <li>service four</li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Services</h3>
                <hr />
                <ul>
                    <li>service one</li>
                    <li>service two</li>
                    <li>service three</li>
                    <li>service four</li>
                </ul>
            </div>
        </div>
    </div>
        `;
  }
}

window.customElements.define("custom-footer", MyFooter);
