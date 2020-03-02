$('.hoverbutton').on('click', function(event) {
	event.preventDefault();
	var val = $(this).attr('value')
	$('.modal-dialog').addClass('modal-lg')
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


$('.degree').on('click', function(event) {
	event.preventDefault();
	var val = $(this).attr('value');
	$('.modal-dialog').removeClass('modal-lg')
	switch(val){
		case '1':
			$('#judulimage').html("Politeknik Negeri Lhokseumawe ")
			$('#ketimage').html("")
			$('#srcimage').attr('src', 'uploads/ijazah1.jpg');
		break;
		case '2':
			$('#judulimage').html("SMA Negeri 1 Bireuen")
			$('#ketimage').html("")
			$('#srcimage').attr('src', 'uploads/ijazah2.jpg');
		break;
	}
	$('#modal-id').modal('toggle')
});

$('.competition').on('click', function(event) {
	event.preventDefault();
	var val = $(this).attr('value');
	$('.modal-dialog').removeClass('modal-lg')
	switch(val){
		case '1':
			$('#judulimage').html("Kometisi Mahasiswa Informatika Politeknik Nasional")
			$('#ketimage').html("")
			$('#srcimage').attr('src', 'uploads/lomba1.jpg');
		break;
		case '2':
			$('#judulimage').html("National Polytechnic English Olympic")
			$('#ketimage').html("")
			$('#srcimage').attr('src', 'uploads/lomba2.jpg');
		break;
		case '3':
			$('#judulimage').html("Mahasiswa Berprestasi")
			$('#ketimage').html("")
			$('#srcimage').attr('src', 'uploads/lomba3.jpg');
		break;
	}
	$('#modal-id').modal('toggle')
});

$('.organization').on('click', function(event) {
	event.preventDefault();
	var val = $(this).attr('value');
	$('.modal-dialog').removeClass('modal-lg')
	switch(val){
		case '1':
			$('#judulimage').html("Himpunan Mahasiswa TIK")
			$('#ketimage').html("")
			$('#srcimage').attr('src', 'uploads/organisasi1.jpg');
		break;
		case '2':
			$('#judulimage').html("UKM Improving English Club Of Polytechnic")
			$('#ketimage').html("")
			$('#srcimage').attr('src', 'uploads/organisasi2.jpg');
		break;
		case '3':
			$('#judulimage').html("Mahasiswa Berprestasi")
			$('#ketimage').html("")
			$('#srcimage').attr('src', 'uploads/organisasi3.jpg');
		break;
	}
	$('#modal-id').modal('toggle')
});