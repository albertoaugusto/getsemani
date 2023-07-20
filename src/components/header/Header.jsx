import { useState } from 'react'
import HeaderImg from '../../assets/logo-get-semani.png'
import '../../styles/components/header.sass'

function Header () {
    /*header color change*/
    window.addEventListener("scroll", function (){
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header");
    })
    /*menu toggle*/
    const[Toggle, showMenu] = useState(false);

    /*active link*/
    const[activeNav, setActiveNav] = useState("#home")
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav-logo"> 
                <img src={HeaderImg} alt="html-tag-img" />
            </a>
            
            <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#church" onClick={() => setActiveNav("#church")} className={activeNav === "#church" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-estate nav-icon"></i> A Igreja
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#pastoral" onClick={() => setActiveNav("#pastoral")} className={activeNav === "#pastoral" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-users-alt nav-icon"></i> Pastoral
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#ministries" onClick={() => setActiveNav("#ministries")} className={activeNav === "#ministries" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-image-v nav-icon"></i> Ministérios
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#suport" onClick={() => setActiveNav("#suport")} className={activeNav === "#suport" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-hospital nav-icon"></i> Apoio 
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#devotionals" onClick={() => setActiveNav("#devotionals")} className={activeNav === "#devotionals" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-book-open nav-icon"></i> Devocionais
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#events" onClick={() => setActiveNav("#events")} className={activeNav === "#events" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-calendar-alt nav-icon"></i> Eventos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-phone nav-icon"></i> Contato
                        </a>
                    </li>
                </ul>
                {/*responsive button*/}
                <i className="uil uil-times nav-close" onClick={() => showMenu (!Toggle)}></i>
            </div>
            {/*responsive menu*/}
            <div className="nav-toggle" onClick={() => showMenu (!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header