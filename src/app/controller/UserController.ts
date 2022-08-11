import UserService from '../service/UserService';

class UserController {
  async create(req, res) {
    try {
      const { name, age } = req.body;
      const result = await UserService.create({ name, age });
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async read(req, res){
    
  }

  async update(req, res){
    console.log('teste teste')
  }
}

export default new UserController();
