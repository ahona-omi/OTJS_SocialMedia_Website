import { IoHome, IoHomeOutline } from "react-icons/io5";
import { BiMessageSquareDetail, BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdNotificationsNone, MdNotificationsActive, MdOutlineExplore, MdExplore } from "react-icons/md";
import { BsCameraReels, BsCameraReelsFill, BsSearchHeart, BsSearchHeartFill, BsPostcardHeart, BsPostcardHeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiHumanTarget } from "react-icons/gi";

export const mainu = [
    { title: "Home", icon: <IoHomeOutline className="text-2xl" />, activeIcon: <IoHome className="text-2xl" /> },
    { title: "Messages", icon: <BiMessageSquareDetail className="text-2xl" />, activeIcon: <BiSolidMessageSquareDetail className="text-2xl" /> },
    { title: "Reels", icon: <BsCameraReels className="text-2xl" />, activeIcon: <BsCameraReelsFill className="text-2xl" /> },
    { title: "Search", icon: <BsSearchHeart className="text-2xl" />, activeIcon: <BsSearchHeartFill className="text-2xl" /> },
    { title: "Add Post", icon: <BsPostcardHeart className="text-2xl" />, activeIcon: <BsPostcardHeartFill className="text-2xl" /> },
    { title: "Notification", icon: <MdNotificationsNone className="text-2xl" />, activeIcon: <MdNotificationsActive className="text-2xl" /> },
    { title: "Explore", icon: <MdOutlineExplore className="text-2xl" />, activeIcon: <MdExplore className="text-2xl" /> },
    { title: "My Profile", icon: <CgProfile className="text-2xl" />, activeIcon: <GiHumanTarget className="text-2xl" /> },
]