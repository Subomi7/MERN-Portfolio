import EXPERIENCE from '../model/experienceModel.js';

export const createExperience = async (req, res) => {
  try {
    const experience = await EXPERIENCE.insertMany(req.body);
    res.status(200).json({
      success: true,
      message: 'experience inputted successfully',
      experience,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const allExperience = async (req, res) => {
  try {
    const experience = await EXPERIENCE.find();
    if (experience && experience.length === 0) {
      res
        .status(400)
        .json({ success: false, errMsg: 'no project found / created' });
      return;
    }
    res.status(200).json({ success: true, message: 'experience', experience });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};