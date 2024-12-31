import PROJECT from '../model/projectModel.js';

export const createProject = async (req, res) => {
  try {
    const project = await PROJECT.insertMany(req.body);
    res.status(200).json({
      success: true,
      message: 'project inputted successfully',
      project,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const allProject = async (req, res) => {
  try {
    const project = await PROJECT.find();
    if (project && project.length === 0) {
      res
        .status(400)
        .json({ success: false, errMsg: 'no project found / created' });
      return;
    }
    res.status(200).json({ success: true, message: 'projects', project });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};
