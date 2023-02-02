const adminService = require('../services/adminService');

const adminController = {  
  register: async (req, res) => {
    const { username, email, password, role } = req.body;   
    const admin = await adminService.validateRegister(username, email, password, role);    
    if (admin.message) {
      const { status, message } = admin;
      return res.status(status).json(message);
    }
    return res.status(201).json(admin);
  },
};

module.exports = adminController;
