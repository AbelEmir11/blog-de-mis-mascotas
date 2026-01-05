import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav style={{
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            padding: '1rem 2rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'var(--text-main)',
                    textDecoration: 'none'
                }}>
                    <PawPrint size={24} className="premium-gradient" />
                    Mis Mascotas
                </Link>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link
                        to="/"
                        style={{
                            color: isActive('/') ? '#6366f1' : 'var(--text-muted)',
                            fontWeight: isActive('/') ? '600' : '500',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                            fontSize: '1rem'
                        }}
                    >
                        Nuestra Familia
                    </Link>
                    <Link
                        to="/otras-mascotas"
                        style={{
                            color: isActive('/otras-mascotas') ? '#6366f1' : 'var(--text-muted)',
                            fontWeight: isActive('/otras-mascotas') ? '600' : '500',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                            fontSize: '1rem'
                        }}
                    >
                        Memorias y Amigos
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
