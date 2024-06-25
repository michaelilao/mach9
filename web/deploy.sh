#!/bin/bash
git pull
npm install
npx vite build 
pm2 stop app.mach9aero.com 
pm2 delete app.mach9aero.com 
pm2 serve dist 4002 --spa --name app.mach9aero.com 
pm2 save --force