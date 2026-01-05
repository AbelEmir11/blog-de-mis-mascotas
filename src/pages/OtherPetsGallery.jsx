import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { otherPets } from '../data/petsData';
import { ArrowRight, Heart, Users } from 'lucide-react';

const OtherPetsGallery = () => {
    const memoriesPets = otherPets.filter(pet => pet.category === 'memoria');
    const friendsPets = otherPets.filter(pet => pet.category === 'amigo');

    const PetCard = ({ pet, index }) => (
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
    );

    return (
        <div style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Sección: Memorias */}
            {memoriesPets.length > 0 && (
                <section style={{ marginBottom: '4rem' }}>
                    <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}
                        >
                            <Heart size={32} fill="#f87171" stroke="#f87171" style={{ borderRadius: '50%', padding: '6px' }} />
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '700' }}>En Nuestros Corazones</h1>
                        </motion.div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Siempre en nuestros recuerdos, nunca olvidados.
                        </p>
                    </header>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {memoriesPets.map((pet, index) => <PetCard key={pet.id} pet={pet} index={index} />)}
                    </div>
                </section>
            )}

            {/* Sección: Amigos */}
            {friendsPets.length > 0 && (
                <section>
                    <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}
                        >
                            <Users size={32} className="premium-gradient" style={{ borderRadius: '50%', padding: '6px' }} />
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '700' }}>Familia Extendida</h1>
                        </motion.div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Las mascotas de nuestros amigos y familiares.
                        </p>
                    </header>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {friendsPets.map((pet, index) => <PetCard key={pet.id} pet={pet} index={index} />)}
                    </div>
                </section>
            )}

            {/* Si no hay mascotas todavía */}
            {memoriesPets.length === 0 && friendsPets.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                        Aún no hay mascotas en esta sección.
                    </p>
                </div>
            )}
        </div>
    );
};

export default OtherPetsGallery;
