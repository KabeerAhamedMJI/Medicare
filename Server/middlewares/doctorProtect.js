import jwt from 'jsonwebtoken'

export const doctorProtect = (req, res, next) => {

    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(400).json({ success: false, message: "Doctor not authentiicated" });
        }

        let tokenVerified;
        try {
            tokenVerified = jwt.verify(token, process.env.DOCTOR_JWT_SECRET_KEY);
        } catch (error) {

            try {
                tokenVerified = jwt.verify(token, process.env.ADMIN_JWT_SECRET_KEY);
            } catch (error) {

                return res.status(401).json({ success: false, message: "Authentication failed: Invalid token." });
            }
        }

        if (tokenVerified.role !== "doctor" && tokenVerified.role !== "admin") {
            return res.status(400).json({ success: false, message: 'Doctor not authenticated' })
        }
        req.user = tokenVerified
        next();
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
}