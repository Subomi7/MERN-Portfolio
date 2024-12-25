import CONTACT from '../model/contactModel.js';

export const createContact = async (req, res) => {
  const { name, email, gender, pronoun, mobile, country } = req.body;
  if (!name || !email || !gender || !pronoun || !mobile || !country) {
    res.status(400).json({ success: false, errMsg: 'all fields are required' });
  }
  try {
    const contact = await CONTACT.create(req.body);
    res.status(200).json({
      success: true,
      message: 'contact inputted successfully',
      contact,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};
