import express from 'express';
import { knex } from '../database'
import * as AuthController from '../controllers/AuthController.js';

const router = express();

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

//posting feedback
router.post('/postFeedback', async (req, res) => {

  const feedback = {
    author_id: req.body.authorId,
    tutor_id: req.body.tutorId,
    subject_id: req.body.subjectId,
    body: req.body.feedbackBody,
    rating: req.body.rating,
  };

  const savedFeedback = await knex('feedback').insert(feedback);
  console.log(savedFeedback);
  res.send(feedback);
});

//add a subject to your teachable subjects
router.post('/addSubject', async (req, res) => {

  const subject = {
    user_id: req.body.userId,
    subject_id: req.body.subjectId,
    proficiency: req.body.proficiency,
    rate: req.body.rate
  };

  const savedSubject = await knex('subjects_users').insert(subject);
  console.log(savedSubject);
  res.send(subject);
});


export default router;
