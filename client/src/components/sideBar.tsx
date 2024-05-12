import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  Cog6ToothIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
  CalendarDaysIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };
  // Retrieve user data from session storage
  // const user = JSON.parse(sessionStorage.getItem("user"));
  const userDataString = sessionStorage.getItem("user");
  const user = userDataString ? JSON.parse(userDataString) : null;

  return (
    <Card className="h-[calc(110vh-2rem)] w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <List className="ml-5">
        <ListItem className="my-2 mb-5 mt-2 ">
          <Link to="/">
            <img src="logo.png" alt="Logo" className="w-full h-auto" />
          </Link>
        </ListItem>

        <ListItem className="my-2 ">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem className="my-2">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Privacy
        </ListItem>
        <ListItem className="my-2">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Call Logs
          {/* <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix> */}
        </ListItem>
        <ListItem className="my-2">
          {/* <ListItemPrefix>
              {/* You can use an appropriate indicator for Blogposts */}
          {/* <div className="h-5 w-5 bg-gray-300 rounded-full"></div> */}
          {/* </ListItemPrefix> */}
          <ListItemPrefix>
            <CalendarDaysIcon className="h-5 w-5" />
          </ListItemPrefix>
          Schedule
        </ListItem>
        {user && user.role === "therapist" && (
          <ListItem className="my-2">
            <ListItemPrefix>
              <NewspaperIcon className="h-5 w-5"></NewspaperIcon>
            </ListItemPrefix>
            Blogposts
          </ListItem>
        )}
        <ListItem className="my-2">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/">
            <button onClick={handleLogout}>Logout</button>
          </Link>
        </ListItem>
      </List>
    </Card>
  );
}
