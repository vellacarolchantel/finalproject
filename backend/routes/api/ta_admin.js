import {User, Ta, Course, Semester} from `../../models/models.js`;

// error function
function error(message){
    return "Error : " + message;
} 
// importing a bunch of Tas and courses
// view Ta's information :)

// adding a Ta 
router.post('/add', function (req, res) {
    let ta_name = req.body.ta_name;
    let legal_name = req.body.legal_name;
    let grad_ugrad = req.body.grad_ugrad;
    let student_id = req.body.student_id;
    let term_month_year = req.body.term_month_year;
    let supervisor_name = req.body.supervisor_name;
    let priority = req.body.priority;
    let hours = req.body.hours;
    let date_applied = req.body.date_applied;
    let location = req.body.location;
    let phone = req.body.phone;
    let degree = req.body.degree;


    if (!first_name && !last_name && !email && !username){
        error("Need to fill out all fields.");
    }else if(!first_name || !last_name || !email || !username){
        error("Need to fill out specified fields.");
    }
    // need to create a USER object

    // DOING NULL CHECKS AND EMPTY STRING CHECKS
    
    // adding everything else after :)
    // updating a Ta's information 

// removing a Ta
 
}
