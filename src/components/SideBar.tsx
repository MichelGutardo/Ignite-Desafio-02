import '../styles/sidebar.scss';

import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBar {
  genres: Array<GenreResponseProps>;
  selectedGenre: number;
  clicking: (id: number) =>void;
}

  export function SideBar({genres,selectedGenre,clicking}:SideBar) {

  return(
      <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={()=>clicking(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>
        
    </nav>
  );
}