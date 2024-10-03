import jwt from 'jsonwebtoken'

export const generateToken = (email, role) => {
    try {
        if (!email) {
            return res.status(400).json({ message: "Unable to generate token: Invalid email address provided." });
        }

        const secretKey = role === 'Patient'
            ? process.env.PATIENT_JWT_SECRET_KEY
            : role === 'doctor'
                ? process.env.DOCTOR_JWT_SECRET_KEY
                : process.env.ADMIN_JWT_SECRET_KEY

        if (!secretKey) {
            return res.status(400).json({ message: "Secret key not found for the specified role." })
        }

        const token = jwt.sign({ email, role }, secretKey, { expiresIn: '1h' })
        return token;
    } catch (error) {

        res.status(500).json({ true: false, message: error.message })
    }
}