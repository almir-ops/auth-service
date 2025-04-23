module.exports = function AuthController(loginUser) {
    return {
      login: async (req, res) => {
        try {
          const result = await loginUser(req.body);
          console.log('🔐 JWT_SECRET usado:', process.env.JWT_SECRET);
          res.json({ message: 'Login successful', token: result.token });
        } catch (error) {
          res.status(401).json({ error: error.message });
        }
      }
    };
  };
  