'use client'
import Link from 'next/link';
import '../style/footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="socialLinks">
                        <a href="https://www.linkedin.com/in/shamsurrehman123/" className="socialIcon"><FaLinkedin /></a>
                        <a href="https://github.com/Shamsurrehman4488" className="socialIcon"><FaGithub /></a>
                        <a href="https://www.facebook.com/profile.php?id=100081084192923" className="socialIcon"><FaFacebook /></a>
                        <a href="https://www.youtube.com/@Shamsi-vlog" className="socialIcon"><FaYoutube /></a>
                
            </div>
            
            <nav className="navigation">
                <Link href="/faq" className="navLink">FAQ</Link>
                <Link href="/services" className="navLink">Services</Link>
                <Link href="/about" className="navLink">About Me</Link>
                <Link href="/contact" className="navLink">Contact</Link>
                <Link href="/privacy" className="navLink">Privacy Policy</Link>
            </nav>
            
            <div className="copyright">
                © 2024 Shams | All Right Reserved
            </div>
        </footer>
    );
};

export default Footer;