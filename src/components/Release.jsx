import { useEffect, useState } from 'react';
import '../styles/release.css';

export const Release = () => {
    const [releaseData, setReleaseData] = useState([]);

    useEffect(() => {
        fetch('../json/release.json')
            .then(response => response.json())
            .then(data => setReleaseData(data))
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }, []);

    if (releaseData.length === 0) {
        return <div>Cargando...</div>;
    }

    return (
        <section className="releases">
            {releaseData.map((release, index) => (
                <article key={index} className='release'>
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
                        <picture>
                            <img src={release.img} alt={`Imagen del proyecto ${index + 1}`} />
                        </picture>
                    </section>
                </article>
            ))}
        </section>
    );
}
