import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const { status, data: session } = useSession();
  const router = useRouter();

  if (status === "loading") {
    // Handle loading state, such as showing a loading spinner
    return <div>Loading...</div>;
  }

  if (!session) {
    // User is not authenticated, redirect to login page
    router.replace("/login");
    return null;
  }

  // User is authenticated, render the protected content
  return children;
};

export default ProtectedRoute;
