import MainLayout from "../layout/MainLayout";
import Dashboard from "../Views/Dashboard";
import Profile from "../Views/Profile";
import ProfileCard from "../Views/ProfileCard";
import ProfileFollowersCard from "../Views/ProfileFollowersCard";
import ProfileFriendRequestCard from "../Views/ProfileFriendRequestCard";
import ProfileFriendsCard from "../Views/ProfileFriendsCard";
import ProfileGalleryCard from "../Views/ProfileGalleryCard";

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <Dashboard />
        },
        {
            path: 'profile',
            element: <Profile />,
            children: [
                {
                    path: 'me',
                    element: <ProfileCard />
                },
                {
                    path: 'followers',
                    element: <ProfileFollowersCard />
                },
                {
                    path: 'friends',
                    element: <ProfileFriendsCard />
                },
                {
                    path: 'gallery',
                    element: <ProfileGalleryCard />
                },
                {
                    path: 'friend-requests',
                    element: <ProfileFriendRequestCard />
                }
            ]
        }
        // {
        //     path: '/pages/register/register3',
        //     element: <AuthRegister3 />
        // }
    ]
};

export default MainRoutes;