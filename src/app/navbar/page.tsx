'use client'

import '../style/navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
 
 

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Toggle body scroll
    document.body.style.overflow = isSidebarOpen ? 'unset' : 'hidden';
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <Image 
              src="/images/img4.png"
              alt="Logo"
              width={50}
              height={40}
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/skill" className="link">
            Skills
          </Link>
          <Link href="/skill" className="link">
            Projects
          </Link>
          <Link href="/about" className="link">
            About
          </Link>
          <Link href="/contact" className="link">
            Contact
          </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
      
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <Link href="/" className="sidebar-link" onClick={toggleSidebar}>
            Home
          </Link>
          <Link href="/skill" className="sidebar-link" onClick={toggleSidebar}>
            Skill
          </Link>
          <Link href="/project" className="sidebar-link" onClick={toggleSidebar}>
            Projects
          </Link>
          <Link href="/about" className="sidebar-link" onClick={toggleSidebar}>
            About
          </Link>
          <Link href="/contact" className="sidebar-link" onClick={toggleSidebar}>
            Contact
          </Link>
          
        </div>
      </div>
    </>
  );
}