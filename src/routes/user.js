const router = require('express').Router();
const userController = require('../controllers/user');
const { verifyToken } = require('../middleware/jwt');

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API for managing user information
 */

/**
 * @swagger
 * /api/user/me:
 *   post:
 *     summary: Get the current user's information
 *     description: Retrieve the information of the currently authenticated user based on the provided JWT token.
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []  # Indicates that this route requires a bearer token
 *     responses:
 *       200:
 *         description: Successfully retrieved user information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier of the user.
 *                   example: "670507e5a85e8b4542098ab9"
 *                 firstname:
 *                   type: string
 *                   description: The user's first name.
 *                   example: John
 *                 lastname:
 *                   type: string
 *                   description: The user's last name.
 *                   example: Doe
 *                 email:
 *                   type: string
 *                   description: The user's email address.
 *                   example: john.doe@example.com
 *       401:
 *         description: Unauthorized - Missing or invalid token.
 *       500:
 *         description: Internal server error.
 */
router.post('/me', verifyToken, userController.getMyInfos);

module.exports = router;
