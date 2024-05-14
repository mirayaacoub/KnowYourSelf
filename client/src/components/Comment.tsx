import { FaArrowRightLong } from "react-icons/fa6";
import { formatDate } from "../util/utils";

const Comment: React.FC<CommentData> = ({
  blog_id,
  user_id,
  content,
  User,
}) => {
  const textClampStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical" as any,
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        <img
          src={"blogIMG1.png"}
          alt={User.username}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="font-bold">{User.username}</span>
      </div>
      <p className="text-sm mt-1" style={textClampStyle}>
        {User.username}
      </p>
      <p className="text-sm mt-1" style={textClampStyle}>
        {content}
      </p>
    </div>
  );
};
export default Comment;
