type Props = {
  bookmark: {name: string; link: string; date: Date};
  updateLink: Function;
};

export default function Bookmark(props: Props) {
  const updateLink = () => {
    props.updateLink("chrome://extensions");
  };

  return (
    <div className="relative rounded-xl px-2 py-1 w-full h-24 bg-blue-complement">
      <a href={props.bookmark.link} target="_blank" className="block w-full h-full">
        <h1 className="font-bold">{props.bookmark.name}</h1>
        <p>{`${props.bookmark.date}`}</p>
      </a>
      <button onClick={updateLink} className="absolute left-2 bottom-2">Update</button>
    </div>
  );
};
