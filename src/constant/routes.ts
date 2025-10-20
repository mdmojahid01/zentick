export const publicRoutes = [
  "/auth",
  // "/reset-password",
  // "/email-verification",
  // "/set-password",
];

export const isPublicRoute = (pathname: string): boolean => {
  return publicRoutes.some((route) => pathname.startsWith(route));
};
