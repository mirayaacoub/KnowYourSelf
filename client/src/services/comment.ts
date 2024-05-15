// commentService.ts

interface CommentData {
  content: string;
  user_id: number;
  blog_id: number;
}

interface FetchCommentsResponse {
  status: number;
  message: string;
  comments?: CommentData[];
}

interface CreateCommentResponse {
  status: number;
  message: string;
  comment?: CommentData;
}

export const createComment = async (
  comment: CommentData,
): Promise<CreateCommentResponse> => {
  try {
    const response = await fetch(`comment/createComment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ comment }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating comment:", error);
    return { status: 500, message: "Internal server error" };
  }
};

export const getCommentsByBlog = async (
  blog_id: number,
): Promise<FetchCommentsResponse> => {
  try {
    const response = await fetch(`comment/getCommentsByBlog?id=${blog_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return { status: 500, message: "Internal server error" };
  }
};
