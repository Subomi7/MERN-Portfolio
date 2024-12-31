import ABOUT from '../model/aboutModel.js';

// C -- for create in CRUD. Creating api to receive data

export const createAbout = async (req, res) => {
  const { lottieURL, description1, description2, skills } = req.body;
  if (!lottieURL || !description1 || !description2 || !skills) {
    res.status(400).json({ success: false, errMsg: 'all fields are required' });
  }
  try {
    const about = await ABOUT.create(req.body);
    res.status(200).json({
      success: true,
      message: 'about inputted successfully',
      about,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const allAbout = async (req, res) => {
  try {
    const about = await ABOUT.find();
    if (about && about.length === 0) {
      res
        .status(400)
        .json({ success: false, errMsg: 'no project found / created' });
      return;
    }
    res.status(200).json({ success: true, message: 'about', about });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};
