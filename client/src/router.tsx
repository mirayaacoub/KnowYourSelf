import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useNavigate,
} from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { AboutUs } from "./pages/AboutUs.tsx";
import { ProfilePage } from "./pages/ProfilePage.tsx";
import { TherapistPage } from "./pages/TherapistPage.tsx";
import { BookPage } from "./pages/BookPage.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/aboutUs" element={<AboutUs />}></Route>
      <Route path="/profilePage" element={<ProfilePage />}></Route>
      <Route
        path="/findTherapist"
        element={<TherapistPage></TherapistPage>}
      ></Route>
      <Route
        path="/book-appointment/:therapistId"
        element={<BookPage></BookPage>}
      ></Route>
    </Route>,
  ),
);
