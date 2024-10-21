import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RequireRole } from './context/AuthContext';

const Index = lazy(() => import("./pages/feeds/Index"));
const PrivateRoute = lazy(() => import('./hoc/PrivateRoute'));
const UserProfile = lazy(() => import('./pages/profile/UserProfile'));
const EditUserProfile = lazy(() => import("./pages/profile/EditUserProfile"));
const ConfirmMail = lazy(() => import('./pages/auth/ConfirmMail'));
const LockScreen = lazy(() => import('./pages/auth/LockScreen'));
const Recoverpw = lazy(() => import('./pages/auth/Recoverpw'));
const SignIn = lazy(() => import('./pages/auth/SignIn'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const UserView = lazy(() => import('./pages/friend/UserView'));
const Stories = lazy(() => import('./pages/stories/Stories'));
const Message = lazy(() => import('./pages/chat/chat'));
const Notification = lazy(() => import('./pages/notification/Notification'));
const Store = lazy(() => import('./pages/store/Store'));
const OrderList = lazy(() => import('./components/orders/OrderList'))

// Lazy load des composants
const Default = lazy(() => import('./layouts/Default'));

const AppRoutes = () => {
  return (
    <Suspense fallback={
      <div id="loading">
        <div id="loading-center">
        </div>
      </div>
    }>
      <Routes>

        <Route path="/" element={<Default />}>
          <Route path="dashboard/app/profile" element={<UserProfile />} />
          <Route path="/friend/UserView" element={<UserView />} />
          <Route path='dashboard/app/chat' element={<Message />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/dashboard/app/notification" element={<Notification />} />
          <Route path="/dashboard/app/store" element={<Store />} />
          <Route path="/dashboard/app/orders" element={<OrderList />} />


          <Route path='/' element={<Index />} />

          <Route path="dashboard/app/profile" element={
            <UserProfile />
          } />
          <Route element={<PrivateRoute />}>
            <Route path="dashboard/app/user-profile-edit" element={<EditUserProfile />} />
          </Route>
        </Route>

        <Route path="/auth/confirm-mail" element={<ConfirmMail />} />
        <Route path="/auth/lock-screen" element={<LockScreen />} />
        <Route path="/auth/recoverpw" element={<Recoverpw />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
