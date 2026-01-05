import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pets } from '../data/petsData';
import { ArrowRight, PawPrint } from 'lucide-react';

const PetGallery = () => {
    return (
        <div style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}
                >
                    <PawPrint size={32} className="premium-gradient" style={{ borderRadius: '50%', padding: '6px' }} />
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '700' }}>Mis Mascotas</h1>
                </motion.div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Un pequeño rincón dedicado a mis mejores amigos.</p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {pets.map((pet, index) => (
                    <motion.div
                        key={pet.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass"
                        style={{ overflow: 'hidden', cursor: 'pointer' }}
                    >
                        <Link to={`/pet/${pet.id}`} style={{ display: 'block' }}>
                            <div style={{ position: 'relative', height: '250px', backgroundColor: '#334155', overflow: 'hidden' }}>
                                <img
                                    src={pet.images.main}
                                    alt={pet.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    className="pet-image"
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7) 100%)',
                                    pointerEvents: 'none'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    left: '1rem',
                                    backgroundColor: pet.accentColor,
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    {pet.type}
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{pet.name}</h2>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                    {pet.breed} • {pet.age}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: pet.accentColor, fontWeight: '600', gap: '0.5rem' }}>
                                    Ver perfil <ArrowRight size={18} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PetGallery;
