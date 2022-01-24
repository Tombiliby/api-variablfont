module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7f9fdc8d422e2751bca93638d4bf3bd1'),
  },
});
