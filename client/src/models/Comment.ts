interface CommentData {
  blog_id: number;
  user_id: number;
  content: string;
  User: {
    email: string;
    username: string;
  };
}
