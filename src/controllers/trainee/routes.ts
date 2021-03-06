import { Router } from 'express';
import TraineeController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import { validation } from '../user/validation';

const traineeRouter: Router = Router();

/**
 * @swagger
 * definitions:
 *     Unauthorized:
 *       type: object
 *       properties:
 *         error:
 *           example: Unauthorised Access
 *         message:
 *           example: jwt must be provided
 *         status:
 *           example: 403
 *         timestamp:
 *           example: 2019-03-10T19:51:37.066Z
 *
 *
 *     TraineeResponse:
 *       type: object
 *       properties:
 *         name:
 *           example: Ankush Negi
 *         address:
 *           example: Noida
 *         mobile_number:
 *           example: 9717043261
 *         role:
 *           example: trainee
 *         dob:
 *           example: 1998-04-25
 *         hobbies:
 *           example: ["football"]
 *         email:
 *           example: ankush.negi@successive.tech
 *         password:
 *           example: ankushnegi@123
 *         createdAt:
 *           example: 2019-03-10T19:51:37.066Z
 *         createdBy:
 *           example: uihsidcinini345nin4n2onon
 *
 *
 *     500Response:
 *       type: object
 *       properties:
 *         error:
 *           example: Not Found
 *         message:
 *           example: Error
 *         status:
 *           example: 500
 *         timestamp:
 *           example: 2019-03-10T19:51:37.066Z
 */

/**
 * @swagger
 * /trainee:
 *   get:
 *     tags:
 *       - Trainee
 *     name: Find user
 *     summary: Find User List
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: name
 *         type: string
 *       - in: query
 *         name: skip
 *         type: number
 *       - in: query
 *         name: limit
 *         type: number
 *       - in: query
 *         name: sort
 *         type: string
 *       - in: query
 *         name: email
 *         type: string
 *     responses:
 *       200:
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               example: OK
 *             message:
 *               example: Trainee List
 *             data:
 *               type: object
 *               properties:
 *                 total_user:
 *                   example: 1
 *                 traineeList:
 *                   type: array
 *                   items:
 *                     $ref: '#/definitions/TraineeResponse'
 *       403:
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 *       500:
 *         schema:
 *           $ref: '#/definitions/500Response'
 */
traineeRouter.get(
  '/',
  authMiddleWare('getUsers', 'read'),
  validationHandler(validation.get),
  TraineeController.getAll
);

/**
 * @swagger
 * /trainee:
 *   post:
 *     tags:
 *       - Trainee
 *     name: Create
 *     summary: Create User
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Details of the user to create
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             role:
 *               type: string
 *             password:
 *               type: string
 *             mobileNumber:
 *               type: number
 *             dob:
 *               type: string
 *             hobbies:
 *               type: array
 *               items:
 *                 type: string
 *                 format: int64
 *             address:
 *               type: string
 *           required:
 *             - email
 *             - password
 *             - name
 *     responses:
 *       200:
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               example: OK
 *             message:
 *               example: Trainee Added Successfully
 *       403:
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 *       500:
 *         schema:
 *           $ref: '#/definitions/500Response'
 */
traineeRouter.post(
  '/',
  authMiddleWare('getUsers', 'read'),
  validationHandler(validation.create),
  TraineeController.create
);

/**
 * @swagger
 * /trainee:
 *   put:
 *     tags:
 *       - Trainee
 *     name: Modify User
 *     summary: Update User Details
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Details of the user to update
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             dataToUpdate:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *                 password:
 *                   type: string
 *                 mobileNumber:
 *                   type: number
 *                 dob:
 *                   type: string
 *                 hobbies:
 *                   type: array
 *                   items:
 *                     type: string
 *                     format: int64
 *                 address:
 *                   type: string
 *           required:
 *             - id
 *     responses:
 *       '200':
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               example: OK
 *             message:
 *               example: Trainee Updated Successfully
 *       403:
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 *       500:
 *         schema:
 *           $ref: '#/definitions/500Response'
 */
traineeRouter.put(
  '/',
  authMiddleWare('getUsers', 'read'),
  validationHandler(validation.update),
  TraineeController.update
);

/**
 * @swagger
 * /trainee/{id}:
 *   delete:
 *     tags:
 *       - Trainee
 *     name: Delete User
 *     summary: Delete User Details
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required:
 *           - id
 *         security:
 *     responses:
 *       200:
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               example: OK
 *             message:
 *               example: Trainee Deleted Successfully
 *       403:
 *         schema:
 *           $ref: '#/definitions/Unauthorized'
 *       500:
 *         schema:
 *           $ref: '#/definitions/500Response'
 */
traineeRouter.delete(
  '/:id',
  authMiddleWare('getUsers', 'read'),
  validationHandler(validation.delete),
  TraineeController.delete
);

export default traineeRouter;
