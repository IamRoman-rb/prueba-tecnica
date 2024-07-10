import { useEffect, useState } from 'react';
import '../styles/release.css';

const Release = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/public/json/release.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }, []);

    if (projects.length === 0) {
        return <div>Cargando...</div>;
    }

    return (
        <section className="releases">
            {projects.map((project, index) => (
                <article key={index} className='release'>
                    <article className='bar'>
                        <article className='ball'></article>
                    </article>
                    <section className='detail'>
                        <h1>{project.title}</h1>
                        <article className='info'>
                            <a href="#" className={`state fix ${project.state.toLowerCase()}`}>{project.state}</a>
                            <p className='date'>{project.date}</p>
                            <p className='description'>{project.description}</p>
                        </article>
                        {project.img && (
                            <picture>
                                <img src={project.img} alt={`Imagen del proyecto ${index + 1}`} />
                            </picture>
                        )}
                        {project.list.length > 0 && (
                            <ul>
                                {project.list.map((item, itemIndex) => (
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
