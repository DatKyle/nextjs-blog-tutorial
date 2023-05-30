import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
      "/posts/:page",
      "/"
    ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};