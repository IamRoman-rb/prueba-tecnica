import React, { useEffect } from 'react';
import '../styles/release.css';
import releases from '../../public/json/release.json'; // Importar el archivo JSON

const Release = () => {
    useEffect(() => {
        const releaseElements = document.querySelectorAll('.release');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Cambiar según sea necesario para ajustar cuándo se activa la transición
        });

        releaseElements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="releases">
            {releases.map((release, index) => (
                <article key={index} className={`release ${index % 2 === 0 ? 'even' : 'odd'}`}>
                    <article className='bar'>
                        <article className='ball'></article>
                    </article>
                    <section className='detail'>
                        <h1>{release.title}</h1>
                        <article className='info'>
                            <a href="#" className={`state ${release.state.toLowerCase()}`}>{release.state}</a>
                            <p className='date'>{release.date}</p>
                            <p className='description'>{release.description}</p>
                        </article>
                        {release.img && (
                            <picture>
                                <img src={release.img} alt={`Imagen del proyecto ${index + 1}`} />
                            </picture>
                        )}
                        {release.list.length > 0 && (
                            <ul>
                                {release.list.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </section>
                </article>
            ))}
        </section>
    );
}

export default Release;
