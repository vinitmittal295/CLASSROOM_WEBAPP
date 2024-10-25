const User = require("../models/user");
const jwt = require("jsonwebtoken");
const secret = "jfdfndjrehnfmdkjfdmkfnk"; // Consider using environment variables for secrets.

module.exports = async (req, res, next) => {
    const header = req.headers.authorization;
    console.log(">>>>header", header);
    
    if (!header) {
        return res.status(401).json({ message: "No authorization header found" });
    }

    const token = header.split(" ")[1];
    console.log("Token:", token);
    
    if (!token) {
        return res.status(401).json({ message: "No token found" });
    }

    try {
        const decoded = jwt.verify(token, secret);
        console.log("Decoded:", decoded);
        
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user; // Attach user to request object
        next();
    } catch (error) {
        console.error("JWT error:", error);
        return res.status(401).json({ message: "Unauthorized access" });
    }
};
