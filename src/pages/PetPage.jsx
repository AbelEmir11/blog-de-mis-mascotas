import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { pets, otherPets } from '../data/petsData';
import { ChevronLeft, Info, Heart, Camera, X } from 'lucide-react';

const PetPage = () => {
    const { id } = useParams();
    const [selectedImg, setSelectedImg] = useState(null);

    // Buscar en ambas listas
    const allPets = [...pets, ...otherPets];
    const pet = allPets.find(p => p.id === id);

    if (!pet) return <div>Mascota no encontrada</div>;

    // Helper para detectar si es video
    const isVideo = (url) => url?.toLowerCase().endsWith('.mp4');

    // Helper para manejar si la imagen es objeto o string (compatibilidad)
    const getImgUrl = (img) => typeof img === 'string' ? img : img.url;
    const getImgCaption = (img) => typeof img === 'string' ? '' : img.caption;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}
        >
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                <ChevronLeft size={20} /> Volver a la galería
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '3rem', alignItems: 'start' }}>
                {/* Columna Izquierda: Imagen y Ficha */}
                <div style={{ position: 'sticky', top: '2rem' }}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{
                            height: '400px',
                            borderRadius: '1.5rem',
                            backgroundColor: '#334155',
                            marginBottom: '2rem',
                            overflow: 'hidden',
                            boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
                            cursor: 'pointer'
                        }}
                        onClick={() => setSelectedImg({ url: pet.images.main, caption: 'Foto principal' })}
                    >
                        <img
                            src={pet.images.main}
                            alt={pet.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>

                    <div className="glass" style={{ padding: '1.5rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: pet.accentColor }}>
                            <Info size={20} /> Ficha Técnica
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {Object.entries(pet.technicalSheet).map(([key, value]) => (
                                <div key={key} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'capitalize' }}>
                                        {key === 'color' ? 'Color' : key === 'personality' ? 'Personalidad' : key === 'favoriteToy' ? 'Juguete Favorito' : 'Comida Favorita'}
                                    </span>
                                    <p style={{ fontWeight: '500' }}>{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Contenido */}
                <div>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{pet.name}</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '500' }}>{pet.type} • {pet.breed}</p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Sobre {pet.name}</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            {pet.description}
                        </p>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Heart size={20} fill={pet.accentColor} stroke={pet.accentColor} /> Rasgos Únicos
                        </h3>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
                            {pet.traits.map((trait, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem' }}
                                >
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: pet.accentColor }} />
                                    {trait}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Camera size={20} color={pet.accentColor} /> Galería de Fotos
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
                            {pet.images.gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass"
                                    style={{
                                        borderRadius: '1rem',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                    onClick={() => setSelectedImg(typeof img === 'string' ? { url: img, caption: '' } : img)}
                                >
                                    <div style={{ height: '180px', position: 'relative' }}>
                                        {isVideo(getImgUrl(img)) ? (
                                            <video
                                                src={getImgUrl(img)}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                muted
                                                onMouseOver={(e) => e.target.play()}
                                                onMouseOut={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                                            />
                                        ) : (
                                            <img
                                                src={getImgUrl(img)}
                                                alt={`${pet.name} ${i}`}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        )}
                                        {isVideo(getImgUrl(img)) && (
                                            <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: '4px' }}>
                                                <Camera size={14} color="white" />
                                            </div>
                                        )}
                                    </div>
                                    {getImgCaption(img) && (
                                        <div style={{
                                            padding: '0.75rem',
                                            fontSize: '0.85rem',
                                            background: 'rgba(0,0,0,0.5)',
                                            color: 'white'
                                        }}>
                                            {getImgCaption(img)}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* LIGHTBOX / MODAL */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            padding: '2rem'
                        }}
                    >
                        <button
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                color: 'white',
                                background: 'none',
                                padding: '10px'
                            }}
                            onClick={() => setSelectedImg(null)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            style={{ maxWidth: '90%', maxHeight: '80%' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {isVideo(selectedImg.url) ? (
                                <video
                                    src={selectedImg.url}
                                    controls
                                    autoPlay
                                    style={{
                                        width: '100%',
                                        maxHeight: '80vh',
                                        borderRadius: '1rem',
                                        boxShadow: '0 0 50px rgba(0,0,0,0.5)'
                                    }}
                                />
                            ) : (
                                <img
                                    src={selectedImg.url}
                                    alt="Selected"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '80vh',
                                        borderRadius: '1rem',
                                        boxShadow: '0 0 50px rgba(0,0,0,0.5)'
                                    }}
                                />
                            )}
                            {selectedImg.caption && (
                                <div style={{
                                    marginTop: '1.5rem',
                                    color: 'white',
                                    fontSize: '1.25rem',
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {selectedImg.caption}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default PetPage;
