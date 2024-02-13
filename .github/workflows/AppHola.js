

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
          node-version: '20.x'

      - name: Dependencias
        run: npm install express

      - name: node apphola.js 
        run: node apphola.js
          
