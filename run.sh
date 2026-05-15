#!/bin/bash
npm install > install.log 2>&1
npm run dev > dev.log 2>&1 &
