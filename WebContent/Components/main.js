$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

//Save -------
$(document).on("click","#btnSave",function(event){
	//Clear status messages
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	//Form validation 
	var status = validateItem();
	
	//If not valid
	if(status != true)
		{
			$("#alertError").text(status);
			$("#alertError").show();
			return;
		}
	
	var student = etStudentCard($("#txtName").val().trim(),
			$('input[name="rdoGender"]:checked').val(),
			$("#ddlyear").val());
	
	$("#colStudents").append(student);
	
	$("#alertSuccess").text("Saved Successfully.");
	$("#alertSuccess").hide();
	
	$("#formStudent")[0].reset();
		
});

//Form validation 
function validateItemForm()
{
	//Name
	if($("#txtName".val().trim()).length==""){
		return "Enter the student name";
	}
	
	//Gender
	if($('input[name="rdoGender"]:checked').length === 0){
		return "Select gender.";
	}
	
	//year
	if($("#ddYear").val() == "0"){
		return "Select year.";
	}
	
	return true;
}