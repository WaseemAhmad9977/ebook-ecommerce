import jwt from "jsonwebtoken";

/**
 * Authorization Middleware
 * 
 * Yeh middleware har protected route pe lagaya jaata hai.
 * Iska kaam hai: 
 * 1. Request ke headers se "Authorization" token check karna.
 * 2. Token valid hai ya nahi, JWT verify karna.
 * 3. Agar valid hai, toh user info request object mein store karna.
 * 4. Nahi toh error response bhejna.
 */
export const Authorization = async (req, res, next) => {
  // Request ke headers mein 'authorization' header lete hain
  const auth = req.headers.authorization;

  // Agar authorization header nahi mila, toh 400 (Bad Request) bhejo
  if (!auth) return res.status(400).send("Bad request");

  // 'authorization' header generally do parts mein hota hai:
  // "Bearer <token>"
  // Isliye split karke type aur token nikalte hain
  const [type, token] = auth.split(" ");

  // Agar type "Bearer" nahi hai, toh bhi 400 bhejo
  if (type !== "Bearer") return res.status(400).send("Bad request");

  try {
    // JWT token verify karte hain
    // JWT_SECRET environment variable mein secret key hoti hai
    const user = await jwt.verify(token, process.env.JWT_SECRET);

    // Agar verify successful hua, toh user info request object mein attach karte hain
    req.user = user;

    // Next middleware ya controller ko call karte hain
    next();
  } catch (err) {
    // Agar token invalid ho ya verify na ho paya, toh 400 bhejte hain
    res.status(400).send("Bad request");
  }
};
