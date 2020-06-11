/********************
 * YOUR CODE BELOW! *
 ********************/

 function moreThan5(one) {
  return one > 5;
 }

 function topScore(score, highScore) {
   return score > highScore
 }

 function isInDanger(grade) {
   
  return grade >= 60 && grade <=71;
 }

 function isCoasting(grade) {
   return grade >= 72 && grade <= 83;
 }

 function isSucceeding(grade) {
   return grade >= 84 && grade <= 92;
 }

 function isFailing(grade) {
   return grade < 60;
 }

 function isAcing(grade) {
   return grade > 92;
 }

 function isStudent(str) {
  return str === 'student';
 }

 function isTeacher(str) {
   return str === 'teacher';
 }

 function isAdmin(str) {
   return str === 'admin';
 }

 function isElementary(str) {
   return str === 'elementary';
 }

 function areDifferentPeople(name1, name2) {
   return name1 !== name2;
 }

 function isMiddleSchoolTeacher(str, num) {
   return str && num === 'teacher'  
   
 }

 function notAnElementarySchoolAdministrator(level, role) {
   return level !== role;
 }



/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  differentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
