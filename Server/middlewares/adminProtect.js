import jwt from 'jsonwebtoken'

export const adminProtect = (req, res, next) => {

    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(400).json({ success: false, message: "Admin not authentiicated Now" });
        }

        const tokenVerified = jwt.verify(token, process.env.ADMIN_JWT_SECRET_KEY);


        if (tokenVerified.role !== "admin") {
            return res.status(400).json({ success: false, message: 'Admin not authenticated' })
        }
        req.user = tokenVerified
        next();
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
}