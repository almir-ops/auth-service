module.exports = function LoginUser(userRepository, encrypter, tokenService) {
    return async function({ email, password }) {
      const user = await userRepository.findByEmail(email);
      if (!user) throw new Error('Usuário não encontrado');
  
      const validPassword = await encrypter.compare(password, user.password);
      if (!validPassword) throw new Error('Usuário ou senha inválidos');
  
      const token = tokenService.sign({ id: user.id, type: user.type });
      return { token, user };
    };
  };
  