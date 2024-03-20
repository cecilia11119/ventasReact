import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/carmen-cecilia-cardenas-oliveros/'>
                <img src="/img/in2.png" alt='Linkedin' />
            </a>
            <a href='https://github.com/cecilia11119'>
                <img src="/img/github.png" alt='Github' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=51914036159'>
                <img src="/img/whatsapp.png" alt='WhastApp' />
                </a>
        </div>
        <img src='/img/Logo2.png' alt='org' />
        <strong>Desarrollado por Cecilia Cardenas</strong>
    </footer>
}

export default Footer