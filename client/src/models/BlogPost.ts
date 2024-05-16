interface BlogPostData {
    blog_id: number;
    blog_title: string;
    content: string;
    image: string;
    created_at: string;
    updated_at: string;
    therapist_id: number;
    Therapist: {
      therapist_id: number;
      User: {
        email: string;
        username: string;
      };
    };
  }