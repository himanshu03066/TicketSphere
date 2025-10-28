import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, res, next) => {
  try {
    const {userId} = req.auth();
    const user = await clerkClient.users.getUser(userId);
console.log("user",user)
    if (user.privateMetadata.role !== 'admin') {
      return res.json({ success: false, message: "not authorized" });
    }

    next();
  } catch (error) {
    return res.json({ success: false, message: "not authorized" });
  }
};
// import { clerkClient, requireAuth } from "@clerk/express";

// export const protectAdmin = async (req, res, next) => {
//   try {
//     // ✅ Get userId safely from requireAuth()
//     const { userId } = requireAuth(req);
// console.log("Auth header:", req.headers.authorization);

//     if (!userId) {
//       return res.status(401).json({ success: false, message: "Unauthorized - Missing user ID" });
//     }

//     // ✅ Fetch the user from Clerk
//     const user = await clerkClient.users.getUser(userId);

//     // ✅ Check admin role
//     if (!user?.privateMetadata?.role || user.privateMetadata.role !== "admin") {
//       return res.status(403).json({ success: false, message: "You are not authorized to access admin dashboard" });
//     }

//     next();
//   } catch (error) {
//     console.error("Admin middleware error:", error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };
