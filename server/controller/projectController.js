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
