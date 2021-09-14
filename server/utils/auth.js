const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretstar";
const expiration = "2h";

module.exports = {
    // function for our authenticated routes
    authMiddleware: function ({ req }) {
        console.log("hit")
        let token = req.body.token || req.query.token || req.headers.authorization;

        // ["Bearer", "<tokenvalue>"]
        console.log(req.headers)
        if (req.headers.authorization) {
            console.log("hit")
            token = token.split(" ").pop().trim();
        }
        console.log(token)

        if (!token) {
            return req;
        }

        // verify token and get user data out of it
        try {   console.log("try")
                const { data } = jwt.verify(token, secret, { maxAge: expiration });
                console.log(data)
                req.user = data;
                console.log(req.user)
        } catch {
            console.log("Invalid token");
            // return res.status(400).json({ message: "invalid token!" });
        }

        // send to next endpoint
        // next();
        return req;
    },

    signToken: function ({ email, _id }) {
        const payload = { email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};