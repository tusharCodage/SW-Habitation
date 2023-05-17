export default async function handler(req, res) {
    const { email } = req.body;
    
       res.status(400).json({ error: 'Email is required' });
    }
  
    try {
      const LIST_ID = process.env.MAILCHIMP_LIST_ID;
       const API_KEY = process.env.MAILCHIMP_API_KEY;
       const DATACENTER = API_KEY.split('-')[1];
  
      const data = {
        email_address: email,
        status: 'subscribed'
      };
  
      const response = await fetch(
        `https://gmail.us17.list-manage.com/subscribe/post?u=3c5fd86c9eae9d0783dce6d24&amp;id=9c0e4b235d&amp;f_id=00c348e0f0`,
        {
          body: JSON.stringify(data),
          headers: {
            Authorization: `apikey ${API_KEY}`,
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      );
  
      if (response.status >= 400) {
         res.status(400).json({
          error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`
        });
      }
  
       res.status(201).json({ error: '' });
    } catch (error) {
       res.status(500).json({ error: error.message || error.toString() });
    }