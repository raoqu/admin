module.exports = {
  port: 80,
  rewrite: [
    {
      from: '/api/(.*)',
      to: 'http://localhost:8083/api/$1'
    },
    {
      from: '/(.*)',
      to: 'http://localhost:8080//$1'
    }
  ],
  directory: 'build',
  logFormat: 'stats'
}
