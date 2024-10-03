import jwt from 'jsonwebtoken'

export const patientProtect = (req, res, next) => {

    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(400).json({ success: false, message: "You are not authentiicated" });
        }

        let tokenVerified;
        try {
            tokenVerified = jwt.verify(token, process.env.DOCTOR_JWT_SECRET_KEY);
        } catch (error) {

            try {
                tokenVerified = jwt.verify(token, process.env.ADMIN_JWT_SECRET_KEY);
            } catch (error) {
                try {
                    tokenVerified = jwt.verify(token, process.env.PATIENT_JWT_SECRET_KEY);
                } catch (error) {
                    return res.status(401).json({ success: false, message: "Authentication failed: Invalid token." });
                }
            }
        }

        if (tokenVerified.role !== "doctor" && tokenVerified.role !== "admin" && tokenVerified.role !== "patient") {
            return res.status(400).json({ success: false, message: 'Not authenticated' })
        }
        req.user = tokenVerified
        
        next();
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
    }
}