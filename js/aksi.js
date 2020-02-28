$('.hoverbutton').on('click', function(event) {
	event.preventDefault();
	var val = $(this).attr('value')
	switch(val){
		case '1': 
			$('#judulimage').html("ACEH BIODIVERSITY")
			$('#ketimage').html("ABC atau Aceh Biodiversity Conservation merupakan aplikasi berbasis web-responsive yang dapat menyediakan metadata dari satwa di Aceh.")
			$('#srcimage').attr('src', 'img/abc.jpg');
		break;
		case '2': 
			$('#judulimage').html("CEKSTAY")
			$('#ketimage').html("Cekstay adalah aplikasi pencarian rumah kost dan catering di Aceh")
			$('#srcimage').attr('src', 'img/cekstay.jpg');
		break;
		case '3': 
			$('#judulimage').html("E-LAPOR")
			$('#ketimage').html("E-Lapor merupakan aplikasi  kerusakan barang di Unit TP3A Politeknik Negeri Lhokseumawe berbasis web-responsive.")
			$('#srcimage').attr('src', 'img/elapor.jpg');
		break;
		case '4': 
			$('#judulimage').html("E-UJIAN")
			$('#ketimage').html("E-Ujian adalah aplikasi ujian secara online dimana soal muncul secara acak menggunakan algoritma fisher Yates dan memiliki batas waktu")
			$('#srcimage').attr('src', 'img/ujian.jpg');
		break;
		case '5': 
			$('#judulimage').html("REKAM MEDIK")
			$('#ketimage').html("Sistem Rekam Medik adalah aplikasi manajemen pasien pada sebuah Rumah Sakit")
			$('#srcimage').attr('src', 'img/rekam.jpg');
		break;
		case '6': 
			$('#judulimage').html("E-GAMPONG (Dalam Pengebangan)")
			$('#ketimage').html("E-Gampong merupakan aplikasi untuk menajemen administrasi desa berbasis web responsive")
			$('#srcimage').attr('src', 'img/egampong.jpg');
		break;
		case '7': 
			$('#judulimage').html("SIMPENMAS")
			$('#ketimage').html("SIMPENMAS adalah sebuah sistem untuk memanajemansi proposal penelitian dan pengabdian masyarakat ")
			$('#srcimage').attr('src', 'img/simpenmas.jpg');
		break;
	}
	$('#modal-id').modal('toggle')
});		
