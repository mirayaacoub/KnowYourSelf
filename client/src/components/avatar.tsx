import { Avatar, Typography } from "@material-tailwind/react";

export function AvatarSizes() {
  let s = sessionStorage.getItem("user");
  let username, role;
  if (s) {
    let userObj = JSON.parse(s);
    username = userObj.username;
    role = userObj.role;
    console.log("user email isss " + username);
  }

  return (
    <div className="flex flex-col gap-6 mb-7">
      <div className="flex items-center gap-4">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="h-20 w-20 rounded-full" // Adjust size and make it rounded
        />
        <div>
          <Typography variant="h6">{username}</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {role}
          </Typography>
        </div>
      </div>
      {/* <div className="flex items-center gap-4">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          variant="rounded"
        />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Web Developer
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          variant="square"
        />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Web Developer
          </Typography>
        </div>
  </div>*/}
    </div>
  );
}
