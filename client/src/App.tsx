import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  followers: number;
  likes: number;
  photos: number;
  headShot: string;
}

export default function App() {
  return <RouterProvider router={router} />;
}
