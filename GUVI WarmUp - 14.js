/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	if (firstName === "" && lastName === "") {
		return "";
	} else if (firstName === undefined) {
		return lastName;
	} else if (lastName === undefined) {
		return firstName;
	} else {
		return firstName + " " + lastName;
	}
}
/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/