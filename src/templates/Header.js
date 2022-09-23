import logo from "../assets/aerolab-logo.svg"

const Header = () => {
  const view = `
        <div class="Header-main">
            <div class="Header-top">
                <div class="Header-logo">
                    <a href="/">
                        <span><img src=${logo}></span>
                    </a>
                </div>

                <div class="Header-nav">
                    <a href="/">
                        Alexis Brunetti
                    </a>
                </div>
            </div>
            <div class="Header-img">
               <h1>Electronics</h1>
            </div>
        </div>   
    `;
  return view;
};

export default Header;
