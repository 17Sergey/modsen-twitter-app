"use client";

import Sidebar from "@/widgets/Sidebar";

// const withAuth = (WrappedComponent: FC) => {
//   // eslint-disable-next-line react/display-name
//   return (props: JSX.IntrinsicAttributes) => {
//     // const router = useRouter();
//     const { user } = useAuth();
//     const isAuthenticated = !!user;

//     // console.log(router);

//     useEffect(() => {
//       if (!isAuthenticated) {
//         // router.replace(ROUTES.ENTRY);
//         window.location.pathname = ROUTES.ENTRY;
//       }
//     }, [isAuthenticated]);

//     if (!isAuthenticated) {
//       return null; // Пока выполняется редирект, ничего не рендерим
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// const ProtectedRoutesProvider: FC<PropsWithChildren> = ({ children }) => {
//   const { user } = useAuth();
//   const router = useRouter();
//   const pathname = usePathname();

//   const isAuthenticated = !!user;
//   const isProtectedRoute = pathname && PROTECTED_ROUTES.includes(pathname);

//   useEffect(() => {
//     if (!isAuthenticated && isProtectedRoute) {
//       router.replace(ROUTES.ENTRY);
//     }
//   }, [router, isAuthenticated, isProtectedRoute]);

//   if (!isAuthenticated && isProtectedRoute) return null;

//   return <>{children}</>;
// };

const FeedPage = () => {
  return (
    // <ProtectedRoutesProvider>
    //   <Sidebar />
    //   <h1>Protected Feed</h1>
    // </ProtectedRoutesProvider>
    <>
      <Sidebar />
      <h1>Protected Feed</h1>
    </>
  );
};

export default FeedPage;

// export default withAuth(FeedPage);
