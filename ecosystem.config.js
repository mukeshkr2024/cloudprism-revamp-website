module.exports = {
    apps: [
      {
        name: 'my-app',
        script: 'npm',
        args: 'start',
        instances: 'max',
        exec_mode: 'cluster',
        wait_ready: true,
        listen_timeout: 5000,
        max_restarts: 5,
      }
    ]
  };
  