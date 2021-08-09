export type Nullable<TNullable> = TNullable | null

export interface User {
  id: string;
  username: string;
  posts: {
    edges: {
      node: Post
    }[]
  };
}

export interface Comment {
  id: string;
  title: Nullable<string>;
  createdAt: Nullable<string>;
  body: Nullable<string>;
  user: Nullable<User>;
}

export interface Post {
  id: string;
  title: Nullable<string>;
  createdAt: Nullable<string>;
  body: Nullable<string>;
  user: User,
  comments: {
    totalCount: Nullable<number>;
    edges: {
      node: {
        id: Nullable<string>
        body: Nullable<string>
        user: {
          id: Nullable<string>;
          username: Nullable<string>;
        }
      }
    }[]
  }
}