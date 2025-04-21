module.exports = function AuthController(loginUser) {
    return {
      login: async (req, res) => {
        try {
          const result = await loginUser(req.body);
          res.json({ message: 'Login successful', token: result.token });
        } catch (error) {
          res.status(401).json({ error: error.message });
        }
      }
    };
  };
  