

name: Node.JS CI

on:

  push:
    branches: [ "Maicol" ]

jobs:
  
  build:

    runs-on: windows-latest

    steps:
      
      - uses: actions/checkout@v3
        
      - name: Use Node.js
        uses: actions/setup-node@v3

        with:
          node-version: '20.11.0'

      - name: Dependencias
        run: npm install express
          
