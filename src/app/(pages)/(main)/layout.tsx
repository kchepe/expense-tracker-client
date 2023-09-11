import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Navbar from "@/app/common/Navbar";
import Box from "@/app/common/Box";
import getSessionUtil from "@/app/utils/getSession.util";
import Snackbar from "@/app/common/Notifications/Snackbar";

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSessionUtil();
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <Box>
      <Navbar />
      <Snackbar />
      <Box className="lg:px-10 mt-24 px-5 sm:px-7">{children}</Box>
    </Box>
  );
};
export default AdminLayout;
