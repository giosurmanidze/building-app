import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="address__container">
        <p className="footer__header">მისამართი:</p>
        <div className="first">
          <address className="footer__el">
            თბილისი, რუსთავის გზატკეცილი #36
          </address>
          <address className="footer__el">თბილისი, ქიზიყის #44</address>
          <address className="footer__el footer__elm">
            ბათუმი, ლერმონტოვის და ხიმშიაშვილის ქუჩების მიმდებარე ტერიტორია
          </address>
        </div>
      </div>
      <div className="contact__container">
        <p className="footer__header">კონტაქტი:</p>
        <div className="contacts">
          <button onClick={() => (window.location = "tel:0322604141")}>
            <address>(032)2604141</address>
          </button>
          <button
            onClick={() => (window.location = "mailto:info@caucasmetal.ge")}
          >
            <address>info@caucasmetal.ge</address>
          </button>
          <button onClick={() => (window.location = "tel:995551222356")}>
            <address> (995) 551-222-356</address>
          </button>
          <button
            onClick={() =>
              (window.location = "mailto:giorgi.jalagania@caucasmetal.ge")
            }
          >
            <address> giorgi.jalagania@caucasmetal.ge</address>
          </button>
          <button onClick={() => (window.location = "tel:995568338833")}>
            <address> (995) 568-338-833</address>
          </button>
          <button
            onClick={() =>
              (window.location = "mailto:g.kvintradze@caucasmetal.ge")
            }
          >
            <address> g.kvintradze@caucasmetal.ge</address>
          </button>
        </div>
      </div>
      <div className="working__hours">
        <p className="footer__header">სამუშაო საათები </p>
        <div className="hours">
          <p>
            ორშაბათი - პარასკევი:
            <time>10:00</time>-<time>18:00</time>
          </p>
          <p>
            შაბათი:
            <time>10:00</time>-<time>16:00</time>
          </p>
        </div>
      </div>
      <div className="copyright">
        <div>
          © 2022
          <button
            onClick={() =>
              (window.location.href = "https://caucasmetal.ge/ge/terms")
            }
          >
            <p> შ.პ.ს. კავკას მეტალი</p>
          </button>
          ყველა უფლება დაცულია 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
