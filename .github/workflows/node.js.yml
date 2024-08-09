name: Node.js CI

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: self-hosted

    strategy:
      matrix:
        node-version: [20.16.0]

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Set up Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install dependencies
      run: npm install --force

    - name: Build the project
      run: npm run build --if-present

    - name: Deploy with PM2
      run: pm2 restart all