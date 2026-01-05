/**
 * ARCHIVO DE DATOS DE MASCOTAS
 * 
 * pets - Mascotas actuales de la familia
 * otherPets - Mascotas especiales (memorias o de amigos/familia)
 *   - category: 'memoria' para mascotas que ya no están
 *   - category: 'amigo' para mascotas de amigos/familiares
 */

export const pets = [
    {
        id: 'dorito',
        name: 'Dorito',
        type: 'Gato',
        breed: 'Naranja con Blanco',
        age: '2 años',
        description: 'Dorito es el alma de la casa. Siempre está buscando un lugar cálido para dormir y su lugar favorito es el regazo de su padre.',
        traits: [
            'Le gusta dormir en el regazo',
            'Es muy mimoso',
            'Le encantan los snacks de salmón',
            'Es bastante miedoso con las visitas'
        ],
        technicalSheet: {
            color: 'Naranja y Blanco',
            personality: 'Relajado / Mimoso',
            favoriteToy: 'pelotita con cascabel',
            favoriteFood: 'Sabrositos mix'
        },
        images: {
            main: '/src/assets/pets/Dori.jpg',
            gallery: [
                { url: '/src/assets/pets/9aa0aff7-318f-4e45-8e14-d6f8debe34d9.jpg', caption: 'Posando para la cámara' },
                { url: '/src/assets/pets/dorisleep.jpg', caption: 'Su actividad favorita: dormir' },
                { url: '/src/assets/pets/doriamoroso.jpg', caption: 'En un momento súper mimoso' },
                { url: '/src/assets/pets/doricomeplanta.jpg', caption: 'Haciendo lío con las plantas' },
                { url: '/src/assets/pets/doriafuera.jpg', caption: 'Explorando el patio' },
                { url: '/src/assets/pets/doriiytrini.jpg', caption: 'Con su mejor amiga' },
                { url: '/src/assets/pets/doriventana.jpg', caption: 'Mirando pajaritos por la ventana' },
                { url: '/src/assets/pets/doritio.jpg', caption: 'Descansando tranquilo' },
                { url: '/src/assets/pets/baño.mp4', caption: 'Bañándose' },
            ]
        },
        accentColor: '#fb923c' // Naranja
    },
    {
        id: 'pirata', // Este es un ejemplo para que veas cómo se ve otro perfil
        name: 'Pirata',
        type: 'Perro',
        breed: 'collie cruzado con callejero',
        age: '1 1/2 año',
        description: 'Pirata es energía pura. Le encanta correr por el parque y atrapar la pelota. Es el mejor amigo de todos los que conoce.',
        traits: [
            'Muy activo',
            'incanzable',
            'amigable',
            'sonríe',
            'deportista',
            'es un modelo para las fotos'

        ],
        technicalSheet: {
            color: 'blanco y negro',
            personality: 'Enérgico / Amigable',
            favoriteToy: 'Pelota de tenis',
            favoriteFood: 'Pollo cocido'
        },
        images: {
            main: '/src/assets/pets/2ebb9642-261f-4a1a-acf2-a71e5b73616f.jpg',
            gallery: [
                { url: '/src/assets/pets/0eba736e-0b20-46e7-9592-597aeee6c834.jpg', caption: 'Dañino desde la beta' },
                { url: '/src/assets/pets/f5c70969-02c2-4eb5-be7d-8150dd8dc3e1.jpg', caption: 'la casual' },
                { url: '/src/assets/pets/df5b6c19-6088-4bd9-896b-ee243489471d.jpg', caption: 'rogando por quedarse econ nosotros' },
                { url: '/src/assets/pets/ea1ff445-d72b-4036-a1b6-a86618512c04.jpg', caption: '¨dale tirame la pelota¨' },
                { url: '/src/assets/pets/1b2f9c80-fe09-4179-9c53-40449e5d144c.jpg', caption: '¨deberiamos besarnos para romper la tension¨' },
                { url: '/src/assets/pets/dc1efc38-00ff-48bd-9c7d-a6fc72898765.jpg', caption: 'descansando' },
                { url: '/src/assets/pets/d97e73b0-e131-4d3e-bf4d-4c14d40fb0cd.jpg', caption: '¨mirando a la nada, pensando en la pelota¨' },
                { url: '/src/assets/pets/69750d91-dcc6-4453-9757-a4a5e2cdbb6a.jpg', caption: 'con su programador padre' },
                { url: '/src/assets/pets/paseo.mp4', caption: 'paseando' },
                { url: '/src/assets/pets/baile.mp4', caption: 'bailando' },
            ]
        },
        accentColor: '#3b82f6' // Azul
    },
    {
        id: 'burger',
        name: 'Burger (Gordo)',
        type: 'Gato',
        breed: 'Negro con blanco',
        age: '1 año',
        description: 'Amado por los humanos, odiado por sus pares gatunos. El gordo sueña con ser un perro, se autopercibe como tal.',
        traits: [
            'Gordo y orgulloso',
            'Ama la pelea',
            'Rompehuevos profesional',
            'Un incomprendido'
        ],
        technicalSheet: {
            color: 'Negro con blanco',
            personality: 'Juguetón / Pesado',
            favoriteToy: 'Otros gatos ',
            favoriteFood: 'Lo que haya en el plato (ajeno)'
        },
        images: {
            main: '/src/assets/pets/ejecutivo.jpg', // Reemplazar con foto real
            gallery: [
                { url: '/src/assets/pets/b562c3cc-da58-47a0-943b-4122add844bc.jpg', caption: 'reposando con su madre' },
                { url: '/src/assets/pets/11569b84-7091-4d6b-890b-2b09063bcf8a.jpg', caption: 'colandose por la ventana' },
                { url: '/src/assets/pets/03787d3a-f639-4587-b431-5504df89eea7.jpg', caption: 'descansando, muy incomodo' },
                { url: '/src/assets/pets/42fc4365-23c3-4e21-a99d-fd4260890225.jpg', caption: 'descansando, con su mejor amigo' },
                { url: '/src/assets/pets/casual.jpg', caption: 'casual' },
                { url: '/src/assets/pets/lucha.mp4', caption: 'luchando' },
            ]
        },
        accentColor: '#313030ff'
    },

    {
        id: 'coqui',
        name: 'Coqui',
        type: 'Perro',
        breed: 'callejero cruza con vereda',
        age: '5 años',
        description: 'es un perro que se hizo atropellar por un auuto para ser adoptado, asi de simple.',
        traits: ['los pedos mas ediondos del condado',
            'amor por la pelea',
            'destructor de juguetes ajenos',
            'se come hasta el arroz crudo'
        ],
        technicalSheet: {
            color: 'negro con blanco',
            personality: 'bruto/torpe',
            favoriteToy: 'Juguetes del piri/botellas',
            favoriteFood: 'alimento de los gatos'
        },
        images: {
            main: '/src/assets/pets/coqui.jpg',
            gallery: [
                { url: '/src/assets/pets/mosca.jpg', caption: 'se le raja el culo durmiendo, literalmente' },
                { url: '/src/assets/pets/almohada.jpg', caption: 'muy amiguero de los felinos de menos de 6 meses' },
                { url: '/src/assets/pets/bestis.jpg', caption: 'con su amistad gatuna' },
                { url: '/src/assets/pets/larapini.jpg', caption: 'se jijea' },
                { url: '/src/assets/pets/atento.jpg', caption: 'atento' },

            ]
        },
        accentColor: '#000000ff'
    },
    {
        id: 'trini',
        name: 'Trini',
        type: 'Perra',
        breed: 'caniche mini toy',
        age: '12 años',
        description: 'la ultima cachiche de la dinastia.',
        traits: ['tamaño pericote',
            'los ruidos mas extraños',
            'los gatos son mas grandes que este ser',
            'adoracion por las frutas '
        ],
        technicalSheet: {
            color: 'blanco',
            personality: 'solitaria',
            favoriteToy: 'gatos de menos de 6 meses',
            favoriteFood: 'tomate'
        },
        images: {
            main: '/src/assets/pets/t1.jpeg',
            gallery: [
                { url: '/src/assets/pets/t2.jpeg', caption: 'comodamente en las sabanas' },
                { url: '/src/assets/pets/t3.jpeg', caption: 'ahi se va yendo, la vieja anti' },
                { url: '/src/assets/pets/t4.jpeg', caption: 'la vieja pitiñosa' },
                { url: '/src/assets/pets/finjiendo.jpg', caption: 'finje su muerte como las zarigueyas' },
                { url: '/src/assets/pets/adoptiva.jpg', caption: 'la niñera trini, despues de los 3 meses de vida los odia' },

            ]
        },
        accentColor: '#ffffffff'
    },
    {
        id: 'grichi',
        name: 'Grichi',
        type: 'Gata',
        breed: 'gris',
        age: '2 años',
        description: 'la loquita de la casa, la Helaena Targaryen.',
        traits: ['gritona',
            'sindicalista, pide comida para los demas gatos',
            'ordinaria',
            'loca '
        ],
        technicalSheet: {
            color: 'gris',
            personality: 'gritona',
            favoriteToy: 'tapas de botella',
            favoriteFood: 'sabrositos de carne'
        },
        images: {
            main: '/src/assets/pets/grichijr.jpg',
            gallery: [
                { url: '/src/assets/pets/hermanas.mp4', caption: 'era puro amor con su hermana finada' },
                { url: '/src/assets/pets/castrada.jpg', caption: 'post operatorio no queria saber nada con las pastillas' },
                { url: '/src/assets/pets/grichi3.jpg', caption: 'grichi' },
                { url: '/src/assets/pets/grichi2.jpg', caption: 'la Satoru Gojo?' },
                { url: '/src/assets/pets/grichi4.jpg', caption: 'grichi' }



            ]
        },
        accentColor: '#857e7eff'
    },
    {
        id: 'merco',
        name: 'Merco',
        type: 'Gato',
        breed: 'blanco',
        age: '2 años',
        description: 'el gatito ojos claros, mejor conocido como ¨El Cochinote¨.',
        traits: ['cochinote',
            'bullyneado',
            'ordinario',
            'tio merco'
        ],
        technicalSheet: {
            color: 'blanco',
            personality: 'rarito',
            favoriteToy: 'el suele ser el juguete del gordo',
            favoriteFood: 'sabrositos de carne'
        },
        images: {
            main: '/src/assets/pets/merco.jpg',
            gallery: [
                { url: '/src/assets/pets/tio.jpg', caption: 'el tio merco' },
                { url: '/src/assets/pets/familiero.jpg', caption: 'salud mi familia' },
                { url: '/src/assets/pets/compa.jpg', caption: 'inseparables con el doro' },
                { url: '/src/assets/pets/azules.jpg', caption: 'Satoru Gojo' },

            ]
        },
        accentColor: '#ffffffff'
    },
    {
        id: 'mishita',
        name: 'Mishita',
        type: 'Gata',
        breed: 'multi color',
        age: '5 años',
        description: 'la culpable de que hayan tantos gatos en la casa.',
        traits: ['alzada',
            'cazadora',
            'rara',
            'violenta'
        ],
        technicalSheet: {
            color: 'multi color',
            personality: 'agresiva',
            favoriteToy: 'amor por golpear a sus hijos con violencia',
            favoriteFood: 'ratas'
        },
        images: {
            main: '/src/assets/pets/mishita.jpg',
            gallery: [
                { url: '/src/assets/pets/dormitorio.jpg', caption: 'dormitorio' },
                { url: '/src/assets/pets/madre.jpg', caption: 'amamantando' },
                { url: '/src/assets/pets/madre2.jpg', caption: 'ya desde chiquitos no los toleraba' },
                { url: '/src/assets/pets/mishita2.jpg', caption: 'en el patio de comida ' },
                { url: '/src/assets/pets/mishita3.jpg', caption: 'estirada post comida' },

            ]
        },
        accentColor: '#964c9cff'
    },
    {
        id: 'hitler',
        name: 'Hitler',
        type: 'Gata',
        breed: 'blanco con negro',
        age: '2 años',
        description: 'madre de el gordo y la burgara. amor por su hija, odio hacia su hijo¨.',
        traits: ['cambiante',
            'madre',
            'cochinota',
            'bigote extravagante'
        ],
        technicalSheet: {
            color: 'blanco con negro',
            personality: 'cambiante',
            favoriteToy: 'carton, tapitas, hilos',
            favoriteFood: 'sabrositos'
        },
        images: {
            main: '/src/assets/pets/hitler.jpg',
            gallery: [
                { url: '/src/assets/pets/hitler2.jpg', caption: 'la hikler' },
                { url: '/src/assets/pets/hitler3.jpg', caption: 'sesion de fotos' },
                { url: '/src/assets/pets/hitler4.jpg', caption: 'la hikler' },
                { url: '/src/assets/pets/hitler5.jpg', caption: 'sesion improvisada' },

            ]
        },
        accentColor: '#20a874ff'
    },
    {
        id: 'burga',
        name: 'Burga',
        type: 'Gata',
        breed: 'blanco con negro',
        age: '1 año',
        description: 'madre de el gordo y la burgara. amor por su hija, odio hacia su hijo¨.',
        traits: ['cambiante',
            'madre',
            'cochinota',
            'bigote extravagante'
        ],
        technicalSheet: {
            color: 'blanco con negro',
            personality: 'cambiante',
            favoriteToy: 'carton, tapitas, hilos',
            favoriteFood: 'sabrositos'
        },
        images: {
            main: '/src/assets/pets/burga3.jpg',
            gallery: [
                { url: '/src/assets/pets/burga2.jpg', caption: 'la burga' },
                { url: '/src/assets/pets/burga3.jpg', caption: 'la burga' },
                { url: '/src/assets/pets/burga4.jpg', caption: 'la burga' },
                { url: '/src/assets/pets/burga.jpg', caption: 'la burga' },

            ]
        },
        accentColor: '#a3a3a3ff'
    },
    {
        id: 'mora',
        name: 'Mora',
        type: 'Perra',
        breed: 'caniche cruza con callejero',
        age: '6 años',
        description: 'la Mora Villegas, hija de la Mayra Villegas¨.',
        traits: ['mamerta',
            'idiota como la madre',
            'come caca',
            'se mea en la cama'
        ],
        technicalSheet: {
            color: 'gris',
            personality: 'agresiva',
            favoriteToy: 'juguetes del piri, palitos',
            favoriteFood: 'caca de gatos'
        },
        images: {
            main: '/src/assets/pets/mora.jpg',
            gallery: [
                { url: '/src/assets/pets/mora2.jpg', caption: 'la Mora Villegas' },
                { url: '/src/assets/pets/mora3.jpg', caption: 'en la ventana' },
                { url: '/src/assets/pets/mora4.jpg', caption: '' },
                { url: '/src/assets/pets/mora5.jpg', caption: '' },

            ]
        },
        accentColor: '#4d4d4dff'
    },

];

// ============================================
// OTRAS MASCOTAS (Memorias y Amigos/Familia)
// ============================================

export const otherPets = [
    // EJEMPLO DE MASCOTA "MEMORIA" (ya no está con nosotros):
    /*
    {
        id: 'nombre-unico',
        name: 'Nombre',
        type: 'Perro/Gato',
        breed: 'Raza',
        age: 'Años vividos (ej: "5 años")',
        category: 'memoria', // NO CAMBIAR para mascotas fallecidas
        description: 'Una breve descripción y recuerdos especiales.',
        traits: ['Rasgo 1', 'Rasgo 2'],
        technicalSheet: {
            color: 'Color',
            personality: 'Personalidad',
            favoriteToy: 'Juguete',
            favoriteFood: 'Comida'
        },
        images: {
            main: '/src/assets/pets/nombre-main.jpg',
            gallery: [
                { url: '/src/assets/pets/nombre-1.jpg', caption: 'Descripción' }
            ]
        },
        accentColor: '#6366f1'
    },
    */

    // EJEMPLO DE MASCOTA "AMIGO" (mascota de amigos/familia):
    /*
    {
        id: 'nombre-unico-2',
        name: 'Nombre',
        type: 'Perro/Gato',
        breed: 'Raza',
        age: 'Edad',
        category: 'amigo', // NO CAMBIAR para mascotas de amigos
        description: 'Descripción de la mascota y de quién es.',
        traits: ['Rasgo 1', 'Rasgo 2'],
        technicalSheet: {
            color: 'Color',
            personality: 'Personalidad',
            favoriteToy: 'Juguete',
            favoriteFood: 'Comida'
        },
        images: {
            main: '/src/assets/pets/nombre-main.jpg',
            gallery: [
                { url: '/src/assets/pets/nombre-1.jpg', caption: 'Descripción' }
            ]
        },
        accentColor: '#6366f1'
    },
    */
];
