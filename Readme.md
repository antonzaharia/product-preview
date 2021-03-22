# Product Preview Readme

# Overview

This is demo of prints preview in different shapes: Canvas Wraps, Giclee Art Prints and Framed Prints.
The app was created using Ruby on Rails as backend and React as frontend.

# Installation

Clone this repository by typing in your terminal: "git clone https://github.com/antonzaharia/product-preview.git"
now type: "cd product-preview" to open the main directory.

# Backend

type: "cd backend/product-preview" to access the Ruby on Rails app
In your terminal, run 'bundle install' to install all required gems.

than type: 'rails db:migrate', type 'rails db:seed' to fill up the database with 3 products (canvas, giclee and frame) and 10 backgrounds that have different attributes already saved to match the products.

# Frontend

From the main directory of the app, in your terminal, type: "cd frontend/product-preview" to access the React app.

In your terminal, run 'npm install' to install all required npm packages.

# How to run the program

From the main directory "cd backend/product-preview" and run in the terminal: "rails server -p 3001" to start the server.

From the main directory "cd frontend/product-preview" and run in another terminal: "npm start" to start the npm server.
Visit 'http://localhost:3000' to see the homepage.

# Usage

After installation visit the Homepage.
To start the process you need to upload a picture that will be used for the creation of the previews. Press the button 'Upload' and wait for the green check mark to appear and then press the 'Next' button (you will be redirected to "/select-shape" route).

If 'rails db:seed' was used you can now see the 3 products choices available. Select one of them and choose the size of the product. There will be 3 sizes for portrait orientation and three sizes of landscape orientation. After you selected both, press the button 'Next' (you will be redirected to "/preview" route).

Here the generated pictures will load. In the right side of the screen (on the InfoBar element) next to the "View", a number of photos returned will be available (it depends on how many backgrounds that fits the earlier selections are available).

# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/antonzaharia/product-preview. This project is intended to be a safe, welcoming space for collaboration.

# License

The gem is available as open source under the terms of the MIT License.

# Code of Conduct

Everyone interacting in the Product Preview project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.
