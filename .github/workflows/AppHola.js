
name: CI

on:
  push:
    branches:
      - Maicol

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20.11.0'

      - name: Install dependencies
        run: npm install
          
