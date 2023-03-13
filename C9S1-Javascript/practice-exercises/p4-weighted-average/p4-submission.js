// define function calculateWeightedAverage here to calcuate weighted average

var assignmentweight=10;
var projectweight=35;
var quizweight=10;
var Mid_term_Evalutiontweight=15;
var final_examweight=30;

function calculateWeightedAverage(assignmentscore,projectscore,quizscore,Mid_term_Evalutiontscore,final_examscore)
{
    console.log("weights"+"       "+"% value of score");
    var assignmentPercentageScore=(assignmentscore/100)*assignmentweight;
    console.log("Assignment"+"      "+assignmentPercentageScore);
    var projectPercentageScore=(projectscore/100)*projectweight;
    console.log("projects"+"        "+projectPercentageScore);
    var quizPercentageScore=(quizscore/100)*quizweight;
    console.log("quizzes"+"         "+quizPercentageScore);
    var Mid_term_EvalutiontPercentageScore=(Mid_term_Evalutiontscore/100)*Mid_term_Evalutiontweight;
    console.log("Mid_term_Evalutiont"+"      "+Mid_term_EvalutiontPercentageScore);
    var final_examPercentageScore=(final_examscore/100)*final_examweight;
    console.log("inal_Exam"+"       "+final_examPercentageScore);
	var overallPercentage=assignmentPercentageScore+projectPercentageScore+quizPercentageScore+Mid_term_EvalutiontPercentageScore+final_examPercentageScore;
	console.log("The weighed average score is :"+overallPercentage);
}
 
//calling functions
// console.log(`The weighted average score is : ${calculateWeightedAverage(97, 82, 60, 75, 80)}`);
calculateWeightedAverage(97, 82, 60, 75, 80);