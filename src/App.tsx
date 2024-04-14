import { useState } from 'react';

import './App.css'
import Bookmark from './components/Bookmark';

export default function App() {
const [bookmarks, setBookmarks] = useState<Array<{name: string; link: string; date: Date}>>([{name: "Name", link: "https://www.google.com", date: new Date()}]);

  const updateLink = (link: string) => {
    
  };

  return (
    <main className="p-2 min-h-screen text-white bg-night">
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark} updateLink={updateLink} />
      ))}
    </main>
  );
};
