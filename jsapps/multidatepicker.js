// script untuk datepicker jquery 

$(function() {
//    $( ".datepicker" ).removeClass("datepicker").datepicker({	
    $( ".datepicker" ).datepicker({
		dateFormat: "yy-mm-dd",
   		changeMonth: true,
   		changeYear: true,
		todayHighlight: true,
		autoclose:true,
		language: 'id',
//		maxDate: '+7d', // untuk pilih maks 7 hari kemudian, +1m (satu bulan), dst
		minDate: 'd'	// untuk pilih minimal hari ini, -1d (kemarin) dst.	
   	});

//    $("#eventMulai").on('changeDate', function(selected) {
//        var startDate = new Date(selected.date.valueOf());
//        $("#eventSelesai").datepicker('setStartDate', startDate);
//        if($("#eventMulai").val() > $("#eventSelesai").val()){
//          $("#eventSelesai").val($("#eventMulai").val());
//        }
//    });
	
});
// akhir script untuk datepicker

