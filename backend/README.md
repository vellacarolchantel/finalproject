# Backend

Please refer to **tester.js** to see the Green and Yellow aspects of the backend in motion.

For the Orange and Blue sections, the tests were run through postman. Feel free to contact Carol Altimas if you would like relevant screenshots.

Simply install the required nodes, go to the backend directory and run **"node tester.js"**, and in a browser access the url "http://localhost:5000/".

From there you will be able to register to the database, login to the dashboard, manually add courses and professors, manage users (editing, adding, deleting), as well as import CSV.

# Assumptions made for this Project

Wishlist asks for student_id.

We decided to think longterm and add in some general logic for term_month_year if it waas to continue to be more than the current semester.

# Access codes for the different levels
0 - Sys Op
1 - Ta Admin
2 - Professor
3 - Ta 
4 - Student