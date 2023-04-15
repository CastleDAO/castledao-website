import { Button } from '../../app/components/Button';
import { useEffect, useState } from 'react';

type Project = {
  name: string;
  image: string;
  description: string;
  url: string;
  actionButton: string;
};

const projects: Project[] = [
  {
    name: 'Slayers of Moloch',
    image: '/som.png',
    description:
      'Slayers Of Moloch is a open deck builder and competitive game hosted on Arbitrum, that allows players to challenge each other and earn ERC20 tokens and NFTs as rewards and is powered by the Castle protocol',
    url: 'https://slayersofmoloch.com/',
    actionButton: 'Play Now'
  }
];

export function HighlightProjectCarouse() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<Project>(projects[activeProjectIndex]);

  useEffect(() => {
    // Every 2 seconds change the active competition
    const interval = setInterval(() => {
      const nextIndex = activeProjectIndex + 1 === projects.length ? 0 : activeProjectIndex + 1;
      setActiveProjectIndex(nextIndex);
      setActiveProject(projects[nextIndex]);
    }, 4500);

    return () => clearInterval(interval);
  }, [activeProjectIndex]);

  return (
    <div style={{ textAlign: 'left' }}>
      <div className="project-highlight">
        <div className="project-highlight-wrapper">
          <div className="project-highlight-info">
            <div>
              <div className="project-highlight-title">{activeProject.name}</div>

              <div className="actions-wrapper">
                <div className="actions fight">
                  <a href={activeProject.url} target="_blank" rel="noopener noreferrer">
                    <Button primary>{activeProject.actionButton}</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-highlight-description">{activeProject.description}</div>

      <style jsx>{`
        .project-highlight-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          box-sizing: border-box;
          color: white;
          background: url(${activeProject.image});
          background-size: cover;
          background-position: center;
        }

        .project-highlight-info {
          background: #00000059;
          padding: 30px;
          background: linear-gradient(90deg, rgba(15, 22, 21, 1) 0%, black 50%, rgba(0, 0, 0, 0) 100%);
          width: 70%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 80vh;
        }

        .project-highlight-title {
          font-size: 8rem;
          text-transform: uppercase;
          font-weight: bold;
          margin-bottom: 10px;
          text-shadow: 0 0 10px var(--red);
        }

        .project-highlight-description {
          font-size: 1.5rem;
          background: var(--red);
          padding: 15px 30px;
        }

        p {
          margin: 0;
        }

        .actions {
          display: flex;
          margin-top: 15px;
        }

        .action {
          margin-right: 15px;
        }

        .fight {
          font-size: 3rem;
        }

        @media (max-width: 768px) {
          .project-highlight-title {
            font-size: 30px;
          }

          .project-highlight-info {
            width: 100%;
            min-height: auto;
          }

          .fight {
            font-size: 2rem;
          }

          .project-highlight-wrapper {
            flex-direction: column;
          }

          .actions {
            flex-direction: column;
          }

          .action {
            margin-bottom: 15px;
          }

          .project-highlight-description {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
