import INTRO from '../model/introModel.js';

// C -- for create in CRUD. Creating api to receive data

export const createIntro = async (req, res) => {
  const { welcomeText, firstName, lastName, caption, description } = req.body;
  if (!welcomeText || !firstName || !lastName || !caption || !description) {
    res.status(400).json({ success: false, errMsg: 'all fields are required' });
  }
  try {
    const intro = await INTRO.create(req.body);
    res.status(200).json({
      success: true,
      message: 'intro inputted successfully',
      intro,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};


export const allIntro = async (req, res) => {
  try {
    const intro = await INTRO.find();
    if (intro && intro.length === 0) {
      res
        .status(400)
        .json({ success: false, errMsg: 'no project found / created' });
      return;
    }
    res.status(200).json({ success: true, message: 'intro', intro });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};
