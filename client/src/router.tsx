import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useNavigate,
} from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage.tsx";
import CreateBlogPage from "./pages/UploadBlogPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { AboutUs } from "./pages/AboutUs.tsx";
import { ProfilePage } from "./pages/ProfilePage.tsx";
import { TherapistPage } from "./pages/TherapistPage.tsx";
import { BookPage } from "./pages/BookPage.tsx";
import BlogsPage from "./pages/BlogPage.tsx";
import ReadBlogPage from "./pages/ReadBlogPage.tsx";
import { SchedulePage } from "./pages/TherapistSchedulePage.tsx";
import { ChatPage } from "./pages/ChatPage.tsx";
import UserSchedulePage from './pages/UserSchedulePage.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/profile-page" element={<ProfilePage />}></Route>
      <Route path="/create-blog" element={<CreateBlogPage />}></Route>
      <Route path="/read-blog/:title" element={<ReadBlogPage />}></Route>
      <Route
        path="/find-therapist"
        element={<TherapistPage></TherapistPage>}
      ></Route>
      <Route
        path="/book-appointment/:therapistId"
        element={<BookPage></BookPage>}
      ></Route>
      <Route path="/chat/:therapistId" element={<ChatPage></ChatPage>}></Route>
      <Route path="blogs" element={<BlogsPage></BlogsPage>}></Route>
      <Route
        path="/create-schedule/:userId"
        element={<SchedulePage></SchedulePage>}
      ></Route>
      <Route
        path="/schedule/:userId"
        element={<UserSchedulePage></UserSchedulePage>}
      ></Route>
    </Route>,
  ),
);
