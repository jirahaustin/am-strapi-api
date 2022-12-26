module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-159.railway.app'),
      port: env.int('DATABASE_PORT', 5868),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'MJg47tXe8ULRMuNCBr9h'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
