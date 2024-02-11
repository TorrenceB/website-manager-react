import { Timestamp } from "firebase/firestore";

import { Button, Trash, Pencil } from "./index";

interface Props {
  id?: string;
  title: string;
  body: string;
  date?: Timestamp;
  tags: { id: string; title: string }[];
}

const PostCard = ({ title, body, date, tags }: Props) => {
  return (
    <div className="flex flex-col gap-2 rounded p-4 h-72 w-full bg-cool-gray text-light-gray transition-all">
      <h3 className="text-dark-indigo">{title}</h3>
      <p>Mon Jul 21 2023</p>
      {tags.map((tag) => (
        <div
          key={tag.id}
          className="w-fit p-1.5 rounded-full bg-dark-indigo text-light-gray text-xs font-bold"
        >
          <span>{tag.title}</span>
        </div>
      ))}

      <p className="max-h-32 overflow-hidden">{body}</p>
      <div className="flex gap-2">
        <Button>
          Edit
          <Pencil />
        </Button>
        <Button>
          Delete
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
